import { FormHelperText, TextField, Typography } from '@mui/material';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Alert from '@mui/material/Alert';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { BarChart } from '@mui/x-charts/BarChart';
import { useFormik } from "formik";
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { createCalory, createGoal, exitsCalory, exitsGoal, findLastWeekCalories, updateCalory } from '../services/calories.service';
import { loadResources } from "../services/menu/resourceLoader";
import SubscriptionService from "../services/subscription.service";
import Footer from "./Footer";
import NavBar from "./Navbar";

const CalorieCounter = () => {
    const ts = new SubscriptionService();
    useEffect(() => {
        loadResources();
        exitsGoal().then((d) => {
            setIsLoad(false);
            if (d.data && d.data.exists) {
                setUserGoal(d.data.goal);
                // console.log(d.data.goal);
                setgoalExits(true);
                exitsCalory().then((d) => {
                    if (d.data && d.data.exists) {
                        setCaloryExits(true);
                    } else if (d.data && !d.data.exists) {
                        setCaloryExits(false);
                    }
                }).catch((e) => {
                    setCaloryExits(false);
                });

                findLastWeekCalories().then((d) => {
                    let xAxisData = d.data.map((entry) => entry.day);
                    let seriesData = d.data.map((entry) => entry.calory);
                    setXAxisData(xAxisData);
                    setSeriesData(seriesData);
                }).catch((e) => {
                });
            } else if (d.data && !d.data.exists) {
                setgoalExits(false);
            }

        }).catch((e) => {
            setIsLoad(false);
            setgoalExits(false);
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            age: "",
            gender: "",
            height: "",
            currentWeight: "",
        },
        validationSchema: Yup.object({
            age: Yup.string().required("Age is required"),
            gender: Yup.string().required("Gender is required"),
            height: Yup.string().required("Height is required"),
            currentWeight: Yup.string().required("Weight is required"),
        }),
        onSubmit: (values) => {
            getBmiStatus();
        },
    });
    const goal = useFormik({
        initialValues: {
            targetWeight: "",
            targetDays: "",
        },
        validationSchema: Yup.object({
            targetWeight: Yup.string().required("Weight is required"),
            targetDays: Yup.string().required("Days is required"),
        }),
        onSubmit: async (values) => {
            if (formik.values.currentWeight === values.targetWeight) {
                alert("Please choose different achive weight");
                return;
            }
            // c = 70 t 55 == loss
            if (formik.values.currentWeight > values.targetWeight) {
                setGoalType('Loss Weight');
                setGoalWeight(formik.values.currentWeight - values.targetWeight);
            } else {
                // t  = 70 c = 80 gain
                setGoalType('Gain Weight');
                setGoalWeight(values.targetWeight - formik.values.currentWeight)
            }
            setProcess2(true);
            let g = goal.values;
            let f = formik.values;
            let userId = localStorage.getItem('id');
            let combinedGoal = { ...g, ...f, goalType, goalWeight, userId };
            await createGoal(combinedGoal).then((d) => {
                setProcess2(false);
                setShowSuccess(true);
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }).catch((e) => {
                setProcess2(false);
                setShowSuccess(false);
                console.log("Unable to created goal");
            })
        },
    })
    const calory = useFormik({
        initialValues: {
            calory: "",
        },
        validationSchema: Yup.object({
            calory: Yup.string().required("Calory is required"),
        }),
        onSubmit: async (values) => {
            let userId = localStorage.getItem('id');
            let userCalory = calory.values.calory;
            setProcess3(true);
            if (caloryExits) {
                await updateCalory({ userId, calory: userCalory }).then((d) => {
                    setProcess3(false);
                    window.location.reload();
                }).catch((e) => {
                    setProcess3(false);
                    console.log("Unable to set calory for today");
                })
            } else {
                await createCalory({ userId, calory: userCalory }).then((d) => {
                    setProcess3(false);
                    window.location.reload();
                }).catch((e) => {
                    setProcess3(false);
                    console.log("Unable to set calory for today");
                })
            }

        },
    })

    const [process1, setProcess1] = useState(false);
    const [process2, setProcess2] = useState(false);
    const [process3, setProcess3] = useState(false);
    const [isLoad, setIsLoad] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [userGoal, setUserGoal] = useState({});


    const [isData, setIsData] = useState(false);
    const [status, setStatus] = useState(false);
    const [caloryList, setCaloryList] = useState(false);


    const [xAxisData, setXAxisData] = useState(['']);
    const [seriesData, setSeriesData] = useState([0]);

    const [goalExits, setgoalExits] = useState(false);
    const [caloryExits, setCaloryExits] = useState(false);
    const [goalWeight, setGoalWeight] = useState(false);
    const [goalType, setGoalType] = useState(false);
    const [bmi, setBmi] = useState('');
    const [wtype, setWtype] = useState('');
    const [avgBmi, setAvgBmi] = useState('');

    const feetToCm = (height) => {
        const cmInOneFoot = 30.48; // 1 foot = 30.48 cm
        const cm = height * cmInOneFoot;
        return cm;
    }

    const getBmiStatus = () => {
        const xhr = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ba113b20afmshd0aba5b38edb2a6p1422c1jsnc85a57c3ce40',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
            , async: false
        };

        let url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${formik.values.age}&weight=${formik.values.currentWeight}&height=${feetToCm(formik.values.height)}`;
        setProcess1(true);
        fetch(url, xhr)
            .then(d => d.json()).then(d => {
                setIsData(true)
                setProcess1(false);
                if (d.data.health == 'Mild Thinness') {
                    setStatus(1);
                } else if (d.data.health == 'Normal') {
                    setStatus(2);
                }
                else {
                    setStatus(2);
                }
                setBmi(d.data.bmi);
                setWtype(d.data.health);
                setAvgBmi(d.data.healthy_bmi_range);
            })
            .catch(err => {
                console.error(err);
                setProcess1(false);
            });
    }

    const workoutList = [{
        name: 'Running (8 mph/12.8 km/h)',
        minute: 1,
        calory: 14,
        image: 'directions_run'
    }, {
        name: ' Jumping rope',
        minute: 1,
        calory: 12,
        image: 'switch_access_shortcut_add'
    },

    {
        name: 'Cycling',
        minute: 1,
        calory: 8,
        image: 'directions_bike'
    },

    {
        name: 'Yoga (power vinyasa)',
        minute: 1,
        calory: 6,
        image: 'self_improvement'
    }]
    return (
        <div>
            <div><NavBar /></div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className="container">
                <h4 className="mt-2" >&nbsp;  <DirectionsRunIcon /> <a>Calorie Counter</a></h4>
                {isLoad ?
                    <>
                        <div className='row' >
                            <div className='col-12 text-center '>
                                <span className="spinner-border my-5 text-center spinner-border-sm text-success  " style={{ fontSize: '22px' }} >  </span>
                            </div>
                        </div>
                    </>
                    : <>
                        {!goalExits ?
                            <>
                                <div className="row">
                                    <div className="col-12" variant="outlined" >
                                        <form onSubmit={formik.handleSubmit}>
                                            <h6 className="mt-2 ms-3 " >&nbsp;  <ContactEmergencyIcon /> <a>Calulate BMI</a></h6>
                                            <div className="row ms-3">
                                                <div className="col-3 col-md-3">
                                                    <TextField
                                                        label="Age" variant="outlined" fullWidth
                                                        {...formik.getFieldProps("age")}
                                                        error={formik.touched.age && Boolean(formik.errors.age)}
                                                        helperText={formik.touched.age && formik.errors.age}
                                                        margin="normal"
                                                    />
                                                </div>
                                                <div className="col-3 col-md-3">
                                                    <FormControl fullWidth variant="outlined" margin="normal">
                                                        <InputLabel htmlFor="gender">Gender required</InputLabel>
                                                        <Select {...formik.getFieldProps("gender")} label="Gender required">
                                                            <MenuItem value="M">Male</MenuItem>
                                                            <MenuItem value="F">Female</MenuItem>
                                                        </Select>
                                                        {formik.touched.gender && formik.errors.gender && (
                                                            <FormHelperText error>{formik.errors.gender}</FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </div>
                                                <div className="col-3 col-md-3 ">
                                                    <TextField
                                                        label="Height" variant="outlined" fullWidth
                                                        {...formik.getFieldProps("height")}
                                                        error={formik.touched.height && Boolean(formik.errors.height)}
                                                        helperText={formik.touched.height && formik.errors.height}
                                                        margin="normal"
                                                    />
                                                </div>
                                                <div className="col-3 col-md-3">
                                                    <TextField
                                                        label="Current weight" variant="outlined" fullWidth
                                                        {...formik.getFieldProps("currentWeight")}
                                                        error={formik.touched.currentWeight && Boolean(formik.errors.currentWeight)}
                                                        helperText={formik.touched.currentWeight && formik.errors.currentWeight}
                                                        margin="normal"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                        <Button variant="contained" type='submit' disableElevation onClick={formik.handleSubmit}>
                                            {process1 ? <> &nbsp;<span className="spinner-border text-center spinner-border-sm text-white  ">  </span> </> : <>  Calculate BMI </>}
                                        </Button>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Body Mass : {wtype} &nbsp; Your BMI: {bmi} &nbsp; Average BMI: {avgBmi}
                                            </Typography>
                                        </CardContent>
                                        <form onSubmit={goal.handleSubmit}>
                                            <h6 className="mt-2 ms-3 " >&nbsp;  <ContactEmergencyIcon /> <a>Create Goal</a></h6>
                                            <div className="row ms-3">
                                                <div className="col-3 col-md-3">
                                                    <TextField
                                                        label="Achieve weight" variant="outlined" fullWidth
                                                        {...goal.getFieldProps("targetWeight")}
                                                        error={goal.touched.targetWeight && Boolean(goal.errors.targetWeight)}
                                                        helperText={goal.touched.targetWeight && goal.errors.targetWeight}
                                                        margin="normal"
                                                    />
                                                </div>
                                                <div className="col-3 col-md-3">
                                                    <TextField
                                                        label="Achieve days" variant="outlined" fullWidth
                                                        {...goal.getFieldProps("targetDays")}
                                                        error={goal.touched.targetDays && Boolean(goal.errors.targetDays)}
                                                        helperText={goal.touched.targetDays && goal.errors.targetDays}
                                                        margin="normal"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                        <Button variant="contained" type='submit' disableElevation onClick={goal.handleSubmit}>
                                            {process2 ? <> &nbsp;<span className="spinner-border text-center spinner-border-sm text-white  ">  </span> </> : <> Create Goal </>}
                                        </Button>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Your Goal : {goalType} &nbsp; Target Days: {goal.values.targetDays}
                                            </Typography>
                                        </CardContent>
                                        {showSuccess && (
                                            <Alert severity="success" className="mt-2">
                                                Goal created successfully!
                                            </Alert>
                                        )}
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="row">
                                    <div className="col-8">
                                        {/* <span className="heading" >Calories Gain Per Today, 856</span><br /> */}
                                        <span className="heading" >Workout Today</span><br />
                                        <span className="heading" >{userGoal.goalType}&nbsp;{userGoal.goalWeight}&nbsp;kg. </span><br />

                                    </div>
                                    {/* {!caloryExits ? */}
                                    <>
                                        <div className="col-4">
                                            <form onSubmit={calory.handleSubmit}>
                                                <div className="row ms-3">
                                                    <div className="col-6">
                                                        <TextField
                                                            label="Today calorie" variant="outlined" fullWidth
                                                            {...calory.getFieldProps("calory")}
                                                            error={calory.touched.calory && Boolean(calory.errors.calory)}
                                                            helperText={calory.touched.calory && calory.errors.calory}
                                                            margin="normal"
                                                        />
                                                    </div>
                                                    <Button variant="contained" type='submit' className='h-50 mt-4' disableElevation onClick={calory.handleSubmit}>
                                                        {process3 ? <> &nbsp;<span className="spinner-border text-center  spinner-border-sm text-white  ">  </span> </> : <> Update Calorie </>}
                                                    </Button>
                                                </div>
                                            </form>

                                        </div>
                                    </>
                                    {/* :
                                        <>
                                        </>
                                    } */}
                                </div>
                                <div className="row">
                                    <div className="col-5" >
                                        {workoutList.map((item, index) => (
                                            <div key={index} className="col-8">
                                                <div className="p-1">
                                                    <span className="heading"> {item.name} </span><br />
                                                    <span className="heading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minute:
                                                        {item.minute} </span><br />
                                                    <span className="heading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Calories:
                                                        {item.calory} </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* <div className="col-7" >
                                <BarChart
                                    xAxis={[
                                        {
                                            id: 'barCategories',
                                            data: xAxisData,
                                            scaleType: 'band',
                                        },
                                    ]}
                                    series={[
                                        {
                                            data: seriesData,
                                        },
                                    ]}
                                    width={500}
                                    height={300}
                                />
                            </div> */}
                                    <div className="col-7">
                                        <BarChart
                                            xAxis={[
                                                {
                                                    id: 'barCategories',
                                                    data: xAxisData,
                                                    scaleType: 'band',
                                                },
                                            ]}
                                            series={[
                                                {
                                                    data: seriesData,
                                                },
                                            ]}
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </>}
            </div>
            <div><Footer /></div>
        </div>
    );
};
const html = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Calories Counter</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="#">Calories Counter</a></span> <span></span></p>
    </div>
  </div>
</div>
</section>`;

export default CalorieCounter;

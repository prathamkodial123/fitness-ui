
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack'; 
import { Button, Card, CardContent, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { formSize, genders, logoColor, backgroundColor } from '../constants/form';
import { createUser, exitsEmail, exitsMobileNo, exitsUsername } from '../services/user.service';

function CreateAccount() {
    const [emailError, setEmailError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            fName: '',
            lName: '',
            email: '',
            gender: '',
            mobileNo: '',
            address: '',
        },
        validate: async (values) => {
            const errors = {};
            if (!values.username) {
                errors.username = 'Username is required';
            } else if (values.username.length < 8) {
                errors.username = 'Username must be at least 8 characters';
            }
            if (!errors.username) {
                try {
                    const response = await exitsUsername(values.username);
                    if (response.data && response.data.exists) {
                        errors.username = 'Username address already exists';
                    }
                } catch (error) {
                    console.error("Error checking duplicate username ", error);
                }
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            }

            if (!values.fName) {
                errors.fName = 'First Name is required';
            }

            if (!values.lName) {
                errors.lName = 'Last Name is required';
            }

            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!errors.email) {
                try {
                    const response = await exitsEmail(values.email);
                    if (response.data && response.data.exists) {
                        errors.email = 'Email address already exists';
                    }
                } catch (error) {
                    console.error("Error checking duplicate email", error);
                }
            }

            if (!values.mobileNo) {
                errors.mobileNo = 'Mobile number is required';
            } else if (!/^\d{10}$/.test(values.mobileNo)) {
                errors.mobileNo = 'Invalid mobile number';
            }

            if (values.mobileNo === values.emergencyMobileNo) {
                errors.emergencyMobileNo = 'Emergency Mobile No cannot be the same as Mobile No';
            }

            if (!errors.mobileNo) {
                try {
                    const response = await exitsMobileNo(values.mobileNo);
                    if (response.data && response.data.exists) {
                        errors.mobileNo = 'Mobile no already exists';
                    }
                } catch (error) {
                    console.error("Error checking duplicate Mobile no", error);
                }
            }

            if (!values.gender) {
                errors.gender = 'Gender is required';
            }
            if (!values.address) {
                errors.address = 'Address is required';
            }
            return errors;
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                await createUser(values);
                setShowSuccess(true);
                resetForm();
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            } catch (error) {
                console.error("Error creating user:", error);
                setShowSuccess(false);
            }
        }
    });

    return (
        // <Container maxWidth="md" className='mt-4'  style={{backgroundColor:'#e9edf7'}} >
        <div className="container-fluid" style={{ backgroundColor: '#e9edf7' }} >
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center pb-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex justify-content-center py-4">
                                <span className="navbar-brand w-100" style={{ color: logoColor }}  >
                                    Fitness
                                </span>
                            </div>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" align="center">Create Your Account</Typography>
                                    <form onSubmit={formik.handleSubmit} className='mt-3' >
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    {/* <InputLabel>Username</InputLabel> */}
                                                    <TextField size={formSize}
                                                        label="Username"
                                                        variant="outlined"
                                                        {...formik.getFieldProps('username')}
                                                    />
                                                    {formik.touched.username && formik.errors.username && (
                                                        <FormHelperText error>{formik.errors.username}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <TextField size={formSize}
                                                        label="Password"
                                                        variant="outlined"
                                                        type="password"
                                                        {...formik.getFieldProps('password')}
                                                    />
                                                    {formik.touched.password && formik.errors.password && (
                                                        <FormHelperText error>{formik.errors.password}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <TextField size={formSize}
                                                        label="First Name"
                                                        variant="outlined"
                                                        {...formik.getFieldProps('fName')}
                                                    />
                                                    {formik.touched.fName && formik.errors.fName && (
                                                        <FormHelperText error>{formik.errors.fName}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <TextField size={formSize}
                                                        label="Last Name"
                                                        variant="outlined"
                                                        {...formik.getFieldProps('lName')}
                                                    />
                                                    {formik.touched.lName && formik.errors.lName && (
                                                        <FormHelperText error>{formik.errors.lName}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <TextField size={formSize}
                                                        label="Email"
                                                        variant="outlined"
                                                        {...formik.getFieldProps('email')}
                                                    />
                                                    {formik.touched.email && formik.errors.email && (
                                                        <FormHelperText error>{formik.errors.email}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <TextField size={formSize}
                                                        label="Mobile"
                                                        variant="outlined"
                                                        {...formik.getFieldProps('mobileNo')}
                                                    />
                                                    {formik.touched.mobileNo && formik.errors.mobileNo && (
                                                        <FormHelperText error>{formik.errors.mobileNo}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel htmlFor="gender">Gender</InputLabel>
                                                    <Select size={formSize}
                                                        label="Gender"
                                                        {...formik.getFieldProps('gender')} >
                                                        {genders.map((gender) => (
                                                            <MenuItem key={gender.value} value={gender.value}>
                                                                {gender.viewValue}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                    {formik.touched.gender && formik.errors.gender && (
                                                        <FormHelperText error>{formik.errors.gender}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <TextField
                                                        label='Address'
                                                        multiline
                                                        minRows={2}
                                                        {...formik.getFieldProps('address')}
                                                    />
                                                    {formik.touched.address && formik.errors.address && (
                                                        <FormHelperText error>{formik.errors.address}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                                    Create Account
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2" align="center">
                                                Have an account? <Link to="/login">Login</Link>
                                                    {/*  <a href="/login">Login</a> */}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Card>
                            {showSuccess && (
                                <Alert severity="success" className="mt-2">
                                    Account created successfully!
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // </Container>
    );
}

export default CreateAccount;

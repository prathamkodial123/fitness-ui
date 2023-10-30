import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formSize } from '../constants/form';
import CartService from '../services/cart.service';
import { loadResources } from "../services/menu/resourceLoader";
import TrainingService from "../services/training.service";
import Footer from "./Footer";
import NavBar from "./Navbar";



const ClassDetails = () => {
  useEffect(() => {
    loadResources();
  }, []);
  const cs = new CartService();
  const ts = new TrainingService();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      planType: '',
    },
    validate: async (values) => {
      const errors = {};
      if (!values.planType) {
        errors.planType = 'Plan Type is required';
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        cs.addToCart({ userId: localStorage.getItem('id'), planType: values.planType, itemId: item._id }).then((d) => {
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/cart");
          }, 1500)
        }).catch((e) => {
          setShowError(true);
          console.error("Unable to buy", e);
        })

      } catch (error) {
        setShowError(true);
        console.error("Unable to buy", error);
      }
    }
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      ts.get(id)
        .then((data) => {
          setItem(data.data);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      navigate('/class')
    }
  }, []);

  const marginStyle = {
    marginLeft: '16px',
  };
  return (
    <div>
      <NavBar />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="items-list">
              {
                item ?
                  (
                    <>
                      <div className="item">
                        <div className="row">
                          <div className="col">
                            <img src={`/images/${item.image}`} className="img w-100 mb-3" alt={item.title} style={{ height: 'auto', width: 'auto', borderRadius: '4px' }} />
                          </div>
                          <div className="col">
                            <div style={marginStyle}>
                              <h4><a>{item.title}</a></h4>
                              <p><a> {item.description}</a></p>
                              <div>
                                Time:&nbsp;{item.startTime} to {item.endTime}
                              </div>
                              <p>Monthly:&nbsp;&#8377;{item.price}</p>
                              <form onSubmit={formik.handleSubmit} >
                                <FormControl fullWidth variant="outlined">
                                  <InputLabel htmlFor="Plan Type">Plan Type</InputLabel>
                                  <Select size={formSize} label="Plan Type" className="w-50"  {...formik.getFieldProps('planType')} >
                                    <MenuItem value="1">1 Month</MenuItem>
                                    <MenuItem value="2">3 Month</MenuItem>
                                    <MenuItem value="3">6 Month</MenuItem>
                                    <MenuItem value="4">1 Year</MenuItem>
                                  </Select>
                                  {formik.touched.planType && formik.errors.planType && (
                                    <FormHelperText error>{formik.errors.planType}</FormHelperText>
                                  )}
                                </FormControl>
                                <Button variant="contained" className='mt-2' type='submit' disableElevation >
                                  add to cart
                                </Button>
                              </form>
                              {showSuccess && (
                                <Alert severity="success" className="mt-2 w-50 ">
                                  Added to cart
                                </Alert>
                              )}
                              {showError && (
                                <Alert severity="error" className="mt-2">
                                  Unable to add
                                </Alert>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                  : (<></>)
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClassDetails;

const html = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Class Details</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="#"></a></span> <span>Buy </span></p>
    </div>
  </div>
</div>
</section>`;


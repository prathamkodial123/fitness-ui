import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartService from '../services/cart.service';
import { loadResources } from "../services/menu/resourceLoader";
import TrainingService from "../services/training.service";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Classes = () => {
  const ts = new TrainingService();
  const cs = new CartService();

  const [trainingClass, setTrainingClass] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadResources();
    ts.getList()
      .then((data) => {
        setTrainingClass(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error('Error fetching trainingClass:', error);
      });
  }, []);
  const navigate = useNavigate();
  const goToClassDetails = (id) => {
    navigate(`/class-details?id=${id}`);
  }
  return (
    <div>
      <NavBar />
      <div dangerouslySetInnerHTML={{ __html: classBody }} />
      <div className="container mt-4">
        <div className="row">
          {trainingClass.map((item, index) => (
            <div className="col-md-4" key={index} onClick={() => goToClassDetails(item._id)}  >
              <div className="classes w-100 h-75 ftco-animate">
                <a className="img w-100 mb-3" style={{ backgroundImage: `url(images/${item.image})`, borderRadius: '5px' }}></a>
                <div className="text w-100 text-center">
                  <h4><a>{item.title}</a></h4>
                  <p className="description">{item.description}</p>
                  <p className="description"> Time:&nbsp;{item.startTime} to {item.endTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Classes;

const html = `
<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Class Program</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Classes</span></p>
    </div>
  </div>
</div>
</section>
`;

const classBody = `
<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Class Program</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Classes</span></p>
    </div>
  </div>
</div>
</section>`;

import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import NavBar from "./Navbar";

import { loadResources } from "../services/menu/resourceLoader";

const Contact = () => {
  useEffect(() => {
    loadResources();
  });
  return (
    <div>
      <div><NavBar></NavBar> </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div><Footer></Footer> </div>
    </div>
  )
}

export default Contact;
const html = ` 


<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Contact Us</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="#">Home</a></span> <span>Contact</span></p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section contact-section ftco-no-pt ftco-no-pb">
<div class="container">
  <div class="row block-9">
              <div class="col-md-4 contact-info ftco-animate p-4 w-100 py-md-5">
                  <div class="row">
                      <div class="col-md-12 mb-4">
            <h2>Contact Information</h2>
          </div>
          <div class="col-md-12 mb-3">
            <p><span>Address:</span> 203 Dadar Circle. Mountain View, Mumbai, India</p>
          </div>
          <div class="col-md-12 mb-3">
            <p><span>Phone:</span> + 1235 2355 98</p>
          </div>
          <div class="col-md-12 mb-3">
            <p><span>Email:</span>  info@yoursite.com</p>
          </div>
          <div class="col-md-12 mb-3">
            <p><span>Website:</span>yoursite.com</p>
          </div>
                  </div>
              </div>
              <div class="col-md-1 py-4 py-md-5"></div>
    <div class="col-md-6 ftco-animate py-md-5">
      <form action="#" class="contact-form">
          <div class="row">
              <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name">
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email">
              </div>
              </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Subject">
        </div>
        <div class="form-group">
          <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
        </div>
        <div class="form-group">
          <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
        </div>
      </form>
    </div>
  </div>
</div>
</section>

<div id="map" class="map"></div>`;

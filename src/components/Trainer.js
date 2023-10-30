import React, { useEffect } from "react";
import { loadResources } from "../services/menu/resourceLoader";
import Footer from "./Footer";
import NavBar from "./Navbar";


const Trainer = () => {
    useEffect(() => {
        loadResources();
    }, []);

    return (
        <div>
            <div><NavBar></NavBar> </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div><Footer></Footer> </div>
        </div>
    )
}

export default Trainer;

const html = ` 
<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Our Professional Trainer</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="#">Home</a></span> <span>Trainer</span></p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section">
  <div class="container">
      <div class="row">
          <div class="col-lg-3 d-flex ftco-animate">
              <div class="coach align-items-stretch">
                  <div class="img" style="background-image: url(images/trainer-1.jpg);"></div>
                  <div class="text bg-white p-4 ftco-animate">
                      <span class="subheading">Owner / Head Coach</span>
                      <h3><a href="#">Elizabeth Nelson</a></h3>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <ul class="ftco-social-media d-flex mt-4">
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a></li>
            </ul>
                      <p></p>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 d-flex ftco-animate">
              <div class="coach align-items-stretch">
                  <div class="img" style="background-image: url(images/trainer-2.jpg);"></div>
                  <div class="text bg-white p-4 ftco-animate">
                      <span class="subheading">Owner / Head Coach</span>
                      <h3><a href="#">Scarlett Torres</a></h3>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <ul class="ftco-social-media d-flex mt-4">
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a></li>
            </ul>
                      <p></p>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 d-flex ftco-animate">
              <div class="coach align-items-stretch">
                  <div class="img" style="background-image: url(images/trainer-3.jpg);"></div>
                  <div class="text bg-white p-4 ftco-animate">
                      <span class="subheading">Owner / Head Coach</span>
                      <h3><a href="#">Victoria Wright</a></h3>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <ul class="ftco-social-media d-flex mt-4">
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a></li>
            </ul>
                      <p></p>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 d-flex ftco-animate">
              <div class="coach align-items-stretch">
                  <div class="img" style="background-image: url(images/trainer-4.jpg);"></div>
                  <div class="text bg-white p-4 ftco-animate">
                      <span class="subheading">Owner / Head Coach</span>
                      <h3><a href="#">Stella Perry</a></h3>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <ul class="ftco-social-media d-flex mt-4">
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#" class="mr-2 d-flex justify-content-center align-items-center"><span class="icon-instagram"></span></a></li>
            </ul>
                      <p></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
 `;
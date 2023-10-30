
import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { loadResources } from "../services/menu/resourceLoader";
const Blog = () => {

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

export default Blog;
const html = ` 
<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Our Blog</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="#">Home</a></span> <span>Blog</span></p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section">
<div class="container">
  <div class="row">
    <div class="col-lg-8 ftco-animate">
        <div class="row">
            <div class="col-md-12 d-flex ftco-animate">
                <div class="blog-entry blog-entry-2 justify-content-end d-md-flex w-100">
                <Link to="/blog-single" class="block-20" style="background-image: url('images/image_1.jpg');">
                </Link>
                <div class="text pl-md-4 ml-md-2 pt-4">
                    <div class="meta">
                    <div><a href="#">Sept. 28, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                  </div>
                  <h3 class="heading mt-2"><Link href="#">Is wellness the new luxury</Link></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="#" class="btn btn-outline-primary">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-12 d-flex ftco-animate">
                <div class="blog-entry blog-entry-2 justify-content-end d-md-flex w-100">
                <Link to="/blog-single" class="block-20" style="background-image: url('images/image_2.jpg');">
                </Link>
                <div class="text pl-md-4 ml-md-2 pt-4">
                    <div class="meta">
                    <div><a href="#">Sept. 28, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                  </div>
                  <h3 class="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="#" class="btn btn-outline-primary">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-12 d-flex ftco-animate">
                <div class="blog-entry blog-entry-2 justify-content-end d-md-flex w-100">
                <Link to="/blog-single" class="block-20" style="background-image: url('images/image_3.jpg');">
                </Link>
                <div class="text pl-md-4 ml-md-2 pt-4">
                    <div class="meta">
                    <div><a href="#">Sept. 28, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                  </div>
                  <h3 class="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="#" class="btn btn-outline-primary">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-12 d-flex ftco-animate">
                <div class="blog-entry blog-entry-2 justify-content-end d-md-flex w-100">
                <Link to="/blog-single" class="block-20" style="background-image: url('images/image_4.jpg');">
                </Link>
                <div class="text pl-md-4 ml-md-2 pt-4">
                    <div class="meta">
                    <div><a href="#">Sept. 28, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                  </div>
                  <h3 class="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="#" class="btn btn-outline-primary">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="col-md-12 d-flex ftco-animate">
                <div class="blog-entry blog-entry-2 justify-content-end d-md-flex w-100">
                <Link to="/blog-single" class="block-20" style="background-image: url('images/image_5.jpg');">
                </Link>
                <div class="text pl-md-4 ml-md-2 pt-4">
                    <div class="meta">
                    <div><a href="#">Sept. 28, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                  </div>
                  <h3 class="heading mt-2"><a href="#">Is wellness the new luxury</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="#" class="btn btn-outline-primary">Learn more</a></p>
                </div>
              </div>
            </div>
                  </div>
                  <div class="row mt-5">
              <div class="col">
                <div class="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
    </div> <!-- .col-md-8 -->
    <div class="col-lg-4 sidebar ftco-animate">
      <div class="sidebar-box">
        <form action="#" class="search-form">
          <div class="form-group">
              <div class="icon">
                <span class="icon-search"></span>
              </div>
            <input type="text" class="form-control" placeholder="Type a keyword and hit enter">
          </div>
        </form>
      </div>
      <div class="sidebar-box ftco-animate">
        <div class="categories">
          <h3 class="heading-2">Categories</h3>
          <li><a href="#">Workout <span>(12)</span></a></li>
          <li><a href="#">Gym <span>(22)</span></a></li>
          <li><a href="#">Crossfit <span>(37)</span></a></li>
          <li><a href="#">Body Fit <span>(42)</span></a></li>
          <li><a href="#">Fitness <span>(14)</span></a></li>
          <li><a href="#">Yoga <span>(140)</span></a></li>
        </div>
      </div>

      <div class="sidebar-box ftco-animate">
        <h3 class="heading-2">Recent Blog</h3>
        <div class="block-21 mb-4 d-flex">
          <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
          <div class="text">
            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            <div class="meta">
              <div><a href="#"><span class="icon-calendar"></span> Sept. 25, 2019</a></div>
              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
            </div>
          </div>
        </div>
        <div class="block-21 mb-4 d-flex">
          <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a>
          <div class="text">
            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            <div class="meta">
              <div><a href="#"><span class="icon-calendar"></span> Sept. 25, 2019</a></div>
              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
            </div>
          </div>
        </div>
        <div class="block-21 mb-4 d-flex">
          <a class="blog-img mr-4" style="background-image: url(images/image_3.jpg);"></a>
          <div class="text">
            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
            <div class="meta">
              <div><a href="#"><span class="icon-calendar"></span> Sept. 25, 2019</a></div>
              <div><a href="#"><span class="icon-person"></span> Admin</a></div>
              <div><a href="#"><span class="icon-chat"></span> 19</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar-box ftco-animate">
        <h3 class="heading-2">Tag Cloud</h3>
        <div class="tagcloud">
          <a href="#" class="tag-cloud-link">dish</a>
          <a href="#" class="tag-cloud-link">menu</a>
          <a href="#" class="tag-cloud-link">food</a>
          <a href="#" class="tag-cloud-link">sweet</a>
          <a href="#" class="tag-cloud-link">tasty</a>
          <a href="#" class="tag-cloud-link">delicious</a>
          <a href="#" class="tag-cloud-link">desserts</a>
          <a href="#" class="tag-cloud-link">drinks</a>
        </div>
      </div>

      <div class="sidebar-box ftco-animate">
        <h3 class="heading-2">Paragraph</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
      </div>
    </div>

  </div>
</div>
</section> 
 `;

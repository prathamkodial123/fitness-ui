import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { loadResources } from "../services/menu/resourceLoader";
import SubscriptionService from '../services/subscription.service';
import Footer from './Footer';
import NavBar from './Navbar';
const Subscription = () => {
  const ss = new SubscriptionService();
  const [subList, setSubList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const marginStyle = {
    marginLeft: '16px',
  };

  const activeSub = (id) => {
    ss.activePlan(id).then((d) => {
      if (d.data && d.data.exists) {
        alert('Already same subscription is activated');
      } else if (d.data && !d.data.exists) {
        window.location.reload();
      }
    }).catch((e) => {
      console.log(e);
    })
  };
  // function isActivated(subId) {
  //   ss.isActivePlan(subId).then((d) => {
  //     if (d.data.exists) {
  //       return true
  //     } else {
  //       return false;
  //     }
  //   }).catch((e) => {
  //     console.warn("Unable to get data", e);
  //     return false;
  //   })
  //   return false;
  // }
  useEffect(() => {
    loadResources();
    ss.getList()
      .then((data) => {
        setIsLoad(false);
        setSubList(data.data);
      })
      .catch((e) => {
        setIsLoad(false);
        console.error(e);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div dangerouslySetInnerHTML={{ __html: classBody }} />
      <div className="container mt-4">

        {isLoad ?
          <>
            <div className='row' >
              <div className='col-12 text-center '>
                <span className="spinner-border my-5 text-center spinner-border-sm text-success  " style={{ fontSize: '22px' }} >  </span>
              </div>
            </div>
          </>
          :
          <>
            <div className="row  ">
              {subList.length > 0 ?
                <div className="col-md-8">
                  <div className="items-list">
                    {subList.map((item, index) => (
                      <div key={index} className="item">
                        <div className="row">
                          <div className="col">
                            <img
                              src={`/images/${item.image}`}
                              className="img w-100 mb-3"
                              alt={item.title}
                              style={{ height: 'auto', width: 'auto', borderRadius: '4px' }}
                            />
                          </div>
                          <div className="col">
                            <div style={marginStyle}>
                              <h4>
                                <a>{item.title}</a>
                              </h4>
                              <p>
                                <a> {item.description}</a>
                              </p>
                              <div>
                                Plan {item.planName}
                                <br />
                                Time {item.startTime} to {item.endTime}
                              </div>
                              <div>&#8377;{item.price}</div>
                              {item.active ?
                                <>
                                  <div>
                                    Actived<br />
                                    From {item.startDate} to {item.endDate}
                                  </div>
                                </> :
                                <>
                                  <div>
                                    <Button variant="contained" disableElevation onClick={() => activeSub(item._id)}>
                                      Active Subscription
                                    </Button>
                                  </div>
                                </>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                :
                <>
                  <div className="col-md-12 my-5 ">
                    <h4 className='text-center' >  <a> Subscription is empty </a></h4>
                  </div>
                </>
              }
            </div>
          </>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;

const classBody = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Subscription</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="index.html"></a></span> <span>Classes</span></p>
    </div>
  </div>
</div>
</section>`;

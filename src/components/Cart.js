import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import CartService from "../services/cart.service";
import { loadResources } from "../services/menu/resourceLoader";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Cart = () => {
  useEffect(() => {
    loadResources();
  }, []);
  const ts = new CartService();
  const [cartList, setCartList] = useState([]);
  const [open, setOpen] = useState(false);

  const calculateTotal = () => {
    return cartList.reduce((acc, item) => acc + item.price, 0);
  };
  const [isLoad, setIsLoad] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBuy = () => {
    const buyList = [];
    let order = {};
    for (let i = 0; i < cartList.length; i++) {
      const element = cartList[i];
      let ob =
      {
        _id: element._id,
        userId: localStorage.getItem('id')
      }
      buyList.push(ob);
    }
    order = { userId: localStorage.getItem('id'), payAmount: calculateTotal(), orderList: buyList }
    ts.buyFromCart(order).then((d) => {
      ts.getList()
        .then((data) => {
          setCartList(data.data);
          setOpen(false);
        })
        .catch((e) => {
          setOpen(false);
          console.log("Unable to buy");
        });
    }).catch((e) => {
      alert("Unable to buy")
      setOpen(false);
    })

  };

  useEffect(() => {
    ts.getList()
      .then((data) => {
        setIsLoad(false);
        setCartList(data.data);
      })
      .catch((e) => {
        setIsLoad(false);
        console.error(e);
      });
  }, []);

  const removeToCart = (id) => {
    ts.removeToCart(localStorage.getItem('id'), id).then((d) => {
      ts.getList()
        .then((data) => {
          setCartList(data.data);
        })
        .catch((e) => {
          console.log("Unable to delete");
        });
    }).catch((e) => {
      console.log("Unable to delete");
    })
  };

  const marginStyle = {
    marginLeft: '16px',
  };


  return (
    <div>
      <NavBar />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="container mt-4">
        <div className="row">
          {!isLoad ? <>
            {cartList.length > 0 ?
              <>
                <div className="col-md-8">
                  <div className="items-list">
                    {
                      cartList.map((item, index) => (
                        <div key={item.id || index} className="item">
                          <div className="row">
                            <div className="col">
                              <img src={`/images/${item.image}`} className="img w-100 mb-3" alt={item.title} style={{ height: 'auto', width: 'auto', borderRadius: '4px' }} />
                            </div>
                            <div className="col">
                              <div style={marginStyle}>
                                <h4><a>{item.title}</a></h4>
                                <p><a> {item.description}</a></p>
                                <div>
                                  Plan {item.planName}
                                  <br />
                                  Time {item.startTime} to {item.endTime}
                                </div>
                                <p>&#8377;{item.price}</p>
                                <div>
                                  <Button variant="contained" disableElevation onClick={() => removeToCart(item._id)}>
                                    remove from cart
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-md-4">
                  <h4><a>Subtotal {cartList.length} items </a></h4>
                  <p> Total &#8377;{calculateTotal()}</p>
                  <div>
                    <Button variant="contained" disableElevation onClick={handleOpen}>
                      Proceed to Buy
                    </Button>
                  </div>
                </div>
              </>
              :
              <>
                <div className="col-md-12 my-5 ">
                  <h4 className='text-center' >  <a> Cart is empty </a></h4>
                </div>
              </>
            } </> : <>
            {/* <div className='row' > */}
            <div className='col-12 text-center '>
              <span className="spinner-border my-5 text-center spinner-border-sm text-success  " style={{ fontSize: '22px' }} >  </span>
            </div>
            {/* </div> */}
          </>}
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Paytm QR Code"}</DialogTitle>
        <DialogContent>
          <img src={`/images/paytm.png`} className="img w-100 mb-3" alt={'Paytm'} style={{ height: '30%', width: 'auto', borderRadius: '4px' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleBuy} autoFocus>
            Paid
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </div>
  );
}

export default Cart;

const html = `<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
  <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
    <div class="col-md-9 ftco-animate text-center">
      <h1 class="mb-3 bread">Cart</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="#"></a></span> <span>Classes</span></p>
    </div>
  </div>
</div>
</section>`;


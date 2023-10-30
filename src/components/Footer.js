import React from "react";
const Footer = () => {
    return (
        <>
            <footer className="ftco-footer ftco-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Fitness</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-lft mt-3">
                                    <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Popular Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#">Yoga for Beginners</a></li>
                                    <li><a href="#">Yoga for Pregnant</a></li>
                                    <li><a href="#">Yoga Barre</a></li>
                                    <li><a href="#">Yoga Advance</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Quick Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Schedule</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">203 Dadar Circle. Mountain View, Mumbai, India</span></li>
                                        <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91	 912 3929 210</span></a></li>
                                        <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <p className="text-center text-md-end text-xl-start">
                                All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px">
                <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
                <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10"
                    stroke="#F96D00" />
            </svg></div>

        </>
    )
}


export default Footer;

import React, { Component } from "react";
import AuthService from "../services/auth.service";
import SubscriptionService from "../services/subscription.service";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { useEffect } from "react";
import { loadResources } from "../services/menu/resourceLoader";
import { Scheduler } from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.light.css'; // You may need to adjust the CSS path

class Schedule extends Component {
  ts = new SubscriptionService();
  constructor(props) {
    super(props)
    loadResources();
    this.state = {
      appointmentsData: [],
      currentView: 'month',
      views: ['day', 'week', 'month'],
      currentView: 'month',
      startDayHour: 9,
      height: 600,
    }
  }


  getDateDifference(startDate, endDate) {
    if (endDate == undefined || startDate == undefined) {
      return 0;
    }
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  componentDidMount() {
    this.ts.getShortList()
      .then((data) => {
        let appointmentsData2 = [];
        let classList = data.data;
        for (let i = 0; i < classList.length; i++) {
          let startDate = new Date(classList[i][0]);
          let endDate = new Date(classList[i][1]);
          let title = (classList[i][2]);
          let desc = (classList[i][3]);
          let stime = new String(classList[i][4]).split(':');
          let etime = new String(classList[i][5]).split(':');
          let dayCount = this.getDateDifference(startDate, endDate);
          for (let j = 0; j < dayCount; j++) {
            let sdTemp = new Date(classList[i][0]);
            let edTemp = new Date(classList[i][0]);
            sdTemp.setDate(sdTemp.getDate() + j);
            edTemp.setDate(edTemp.getDate() + j);

            sdTemp.setHours(parseInt(stime[0]))
            sdTemp.setMinutes(parseInt(stime[0]));


            edTemp.setHours(parseInt(etime[0]))
            edTemp.setMinutes(parseInt(etime[0]));

            let ob = {
              subject: desc,
              text: title,
              startDate: sdTemp.toISOString(),
              endDate: edTemp.toISOString(),
            };
            appointmentsData2.push(ob);
          }
        }
        this.setState({ appointmentsData: appointmentsData2 });
      })
      .catch((e) => {
        console.error('Error fetching Schedule:', e);
      });
  }

  render() {
    return (
      <div>
        <div><NavBar></NavBar> </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="container-fluid py-4 p-0 m-0 ">
          <div className="row justify-content-center  ftco-animate m-0 p-0 ">
            <div className="col-md-12 p-0 m-0 ">
              <Scheduler timeZone="America/Los_Angeles"
                dataSource={this.state.appointmentsData}
                currentView={this.state.currentView}
                views={this.state.views}
                height={this.state.height}
              />
            </div>
          </div>
        </div>
        <div><Footer></Footer> </div>
      </div>
    )
  }
}


export default Schedule;
const html = `
 <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');" data-stellar-background-ratio="0.5">
  <div class="overlay"></div>
  <div class="container">
    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
      <div class="col-md-9 ftco-animate text-center">
        <h1 class="mb-3 bread">Classes Schedule</h1>
        <p class="breadcrumbs"><span class="mr-2"><a href="#">Classes</a></span> <span>Schedule</span></p>
      </div>
    </div>
  </div>
</section>

 `;

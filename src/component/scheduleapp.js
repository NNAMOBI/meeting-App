import React from 'react'
import '../component/schedule.css'
// import Alarm from '@material-ui/core/Alarm';
// import Diamond from '../../assets/linux_logo.jpg';
import Appimage from '../component/appimage.jpg';




const Scheduleapp = () => {
    
    
    return (
        <div id="login-box">
            <div className="leftbox">
                <img src={Appimage} alt="" />
                <p>Joanne</p>

                <h3 id="paragraph">Upcoming meetings</h3>
                <div className="whitespace">
                    <div id="">
                        <p id="time">10.30 - 11.30</p>
                        <p id="meeting">Meeting with Tom</p>
                        <p id="agenda">View agenda <i class="material-icons arrow1">
                            keyboard_arrow_down
                     </i></p>
                    </div>
                    <div id="redspace">
                        <p>Urgent</p>
                        

                    </div>

                    
                    
                </div>
                <div className="whitespace2">
                    <div>
                        <p id="time2">10.45 - 12.30</p>
                        <p id="meeting">Design review</p>
                        <p id="agenda">View agenda <i class="material-icons arrow2">
                            keyboard_arrow_down
</i></p>
                    </div>
                    <div id="greenspace">
                 <p>Due in 20mins</p>

                    </div>


                </div>

               
                
            </div>

            <div className="rightbox">
                <i class="material-icons">alarm</i>
                <div className="signin-with"><span className="setup">Set up a meeting</span><br/>
                    <br/><span className="email">We'll email your colleagues and remind them <br />closer to the time</span>
        
                </div>
                <form>

                    <input type="text" name="username" placeholder="To: joan" required />
                        <input type="text" name="email" placeholder="Subject" required />
                    <input type="password" name="password" placeholder="Location" required />
                    <i class="material-icons  location">
                        location_on
</i>

                </form>
                
                {/* <div class="d-inline p-2 bg-primary ">30min</div>
                <div class="d-inline p-2 bg-dark ">45hour</div> */}
                <div class="container my-container">
                    <div class="row justify-content-around ">
                        <div class="col-2 my-col">
                            30mins
                </div>
                        <div class="col-2 my-row">

                         45hour
                 </div>
                        <div class="col-2 my-row">
                            2hour
                  </div>
                        <div class="col-2 my-row">
                            2hour
                  </div>
                        </div>
                    <div class="row justify-content-around  ">
                        <div class="col-2 my-row">
                            2hour
                  </div>
                        <div class="col-2 my-row">
                            1hour
                  </div>
                        <div class="col-2 my-row">
                            2hour
                  </div>
                        <div class="col-2 my-row">
                            10mins
                  </div>


                    </div>
                    <div class="row justify-content-around">
                        <div class="col-2 my-row ">
                            3hour
                  </div>
                        <div class="col-2 my-row ">
                            1.5hour
                  </div>
                        <div class="col-2 my-row ">
                            1hour
                  </div>
                        <div class="col-2 my-row ">
                            4.5hour
                  </div>


                    </div>

                </div>
               

                    
        </div>

        </div>
    )
}


export default Scheduleapp;
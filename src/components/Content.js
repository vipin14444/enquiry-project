import React from 'react'
import './Content.scss'

const Content = props => {
    return (
        <main>
            <img src={`${process.env.PUBLIC_URL}/main.jpg`} alt="main" />
            <div className="bread-crumbs">
                <div className="item"><i>Contact Us</i></div>
                <div className="separator"><i>{'»'}</i></div>
                <div className="item"><i>Enquiry Form</i></div>
            </div>

            <div className="form-main">
                <div className="form-nav">
                    <div className="header">Contact Us</div>
                    <div className="body-item">India</div>
                    <div className="body-item">USA</div>
                    <div className="footer">Enquiry Form</div>
                </div>

                <div className="form-container">
                    <div className="title">Enquiry Form</div>

                    <div className="form-wrapper">
                        <form action="#">

                            <label className='required' htmlFor="firstName">First Name</label>
                            <input id='firstName' name='firstName' type="text" />

                            <label className='required' htmlFor="lastName">Last Name</label>
                            <input id='lastName' name='lastName' type="text" />

                            <label className='required' htmlFor="contactNumber">Contact Number</label>
                            <input id='contactNumber' name='contactNumber' type="text" />

                            <label htmlFor="email">Email</label>
                            <input id='email' name='email' type="text" />

                            <label htmlFor="designation">Designation</label>
                            <input id='designation' name='designation' type="text" />

                            <label htmlFor="company">Company</label>
                            <input id='company' name='company' type="text" />

                            <label htmlFor="company">Location</label>
                            <input id='location' name='location' type="text" />

                            <label htmlFor="company">Country</label>
                            <select name="country" id="country">
                                {/* Add more options here */}
                                <option value="India">India</option>
                            </select>

                            <label htmlFor="services">Services</label>
                            <select name="services" id="services">
                                {/* Add more options here */}
                                <option value="Cloud Services">Cloud Services</option>
                            </select>

                            <div className='clear'></div>
                            <div className='clear'></div>

                            <label htmlFor="yourmessage">Your Message</label>
                            <textarea name="yourmessage" id="yourmessage" cols="30" rows="3"></textarea>

                        </form>

                        <div className="actions">
                            <button>Submit</button>
                            <button>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content


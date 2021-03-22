import React from 'react'
import './Landing.scss'
import card1 from '../assets/images/_card1.png'
import card2 from '../assets/images/_card2.png'
import card3 from '../assets/images/_card3.png'
import HeaderMain from '../components/HeaderMain'

const Landing = () => {
    return (
        <div className='landing-container'>

            <HeaderMain />

            <main>

                <div className="cards-container">
                    <div className="card">
                        <img src={card1} alt="card1" />
                        <div className="title">Focused & Flexible</div>
                        <div className="content">
                            We mould our delivery methods to ensure minimum adjustments to our customers and provide personalized services, thereby ensuring 'customer delight' at all times.
                        </div>
                    </div>
                    <div className="card">
                        <img src={card2} alt="card2" />
                        <div className="title">Testimonials</div>
                        <div className="content">
                            More than 80% of our business comes from repeat customes who hae grown their business with our services - Read what some of them have to say about us.
                        </div>
                    </div>
                    <div className="card">
                        <img src={card3} alt="card3" />
                        <div className="title">Alliances</div>
                        <div className="content">
                            We partner with market leaders in various technologies, and complement their products with our technical capabilites to provide appropriate solutions to our customers.
                        </div>
                    </div>
                </div>

                <div className="hero">
                    <div><span>Welcome</span> to DCM Employee Portal.</div>
                    <p>Manage your leaves, conveyance voucher, and check company related policies.</p>
                </div>

            </main>

        </div >
    )
}

export default Landing

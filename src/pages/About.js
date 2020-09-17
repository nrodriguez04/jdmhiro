import React from 'react';
import Layout from '../core/Layout';
import Footer from '../components/Footer';

//styles
import '../styles/_about.scss';

const About = () => {
    return (
        <>
        <Layout title="About" description="About JDMHiro">
            <div className="info">
            <h4>JDMHiro</h4>
            <p>
                We are one of the largest and most respected DIRECT JDM importers in the USA. We only buy premium quality. We take pride in what we do at JDMHiro Inc.  Rest assured you are buying premium quality parts from a reputable company.

                Buying an engine or a transmission online can be nerve-racking if it is your first time. We understand how important your vehicle is whether it is a daily driver, a rally car or even your 'winter beater'.

                At JDMHiro we pride ourselves on great customer relations. We import high quality JDM products.  Our clients know us for high quality EJ207 STi engines, WRX Impreza EJ205 turbo motors, complete 5-speed transmission packages and STi 6-speed transmission packages among an assortment of many other products and brands.

                With our vast experience when it comes to your project we can help you find a solution that matches your needs. If there is something we don't know; we'll do our best and find out.

                When you put your trust in JDMHiro; you're putting your trust in a JDM company that puts your satisfaction above all else.

                Please browse through our website trough any category or section that might lead you to a product of your choice. If you have any questions about inventory please give us a call on our toll-free number 1-866-683-3747 or send us email to sales@jdmhiro.com

                Since we can't capture our complete inventory online; we welcome all inquiries and are happy to assist you as best we can!

                JDMHiro is a trusted name in automotive forums. We encourage all visitors to read client testimonials and reviews prior to purchase. To help you get started; take a look at our "Client Projects" page by clicking the link in the footer.
            </p>

            <h4>Why JDMHiro?</h4>
            <p>
                Often, buying an imported JDM vehicle is as much of a gamble for the buyer as it is for the importers bringing these cars to the USA. With many importers selling cars as-is from Japan, a buyer has every right to be skeptical when examining a car for purchase. That’s why we exist to put your concerns to rest and give you the smoothest, most hassle-free buying experience in the USA! Our cars are NOT bought sight-unseen. Our team in Japan searches tirelessly to find only the best, most mechanically sound examples of the classic JDM vehicles you know and love.
            </p>

            <h4>What makes us unique?</h4>
            <ul className="unique">
                <li>After we receive them here at our showroom, our vehicles receive a thorough multi point inspection and tune up by our experienced technicians while our office staff straightens out the tedious import paperwork so the vehicles are 100% legal.</li>
                <li>Our technicians own GTR’s and are JDM enthusiasts themselves, so you can be confident knowing that your vehicle is cared for the same way they would maintain their own.</li>
                <li>All cars are taken to Flawless Finish VA, where they are detailed back to showroom condition.</li>
                <li>To make the buying experience even easier, EVERY vehicle is then taken for a full Virginia state inspection, so you can get on the road as soon as we give you the keys! </li>
                <p>Unable to make the trip to see us in person? We’ll send you extensive videos, underbody pictures, as well of photos of any maintenance performed to ensure you that you are truly getting the best of the best. </p>
            </ul>
            <Footer/>
            </div>
        </Layout>
        </>
    )
};

export default About;
import React from 'react';

//styles
import '../styles/_footer.scss';

function Footer() {
    return(
        <div className="footer">
            <ul className="footer-list">
                <li><i className="fas fa-map-marker" require/>5222 36th Ave S Tampa, FL 33619 USA</li>
                <li><i className="fas fa-phone" require></i>(813) 555 5555</li>
                <li><i className="fas fa-envelope" require></i>contact@jdmhiro.com</li>
                <li className="time"><i className="far fa-clock" require></i>
                    <ul>
                        <li>
                            <span>Monday-Friday</span>
                            <div>9am-5pm</div>
                        </li>
                    <li>
                        <span>Saturday</span>
                        <div>10am-3pm</div>
                    </li>
                    <li>
                        <span>Sunday</span>
                        <div>Closed</div>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default Footer;
import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return(
        <footer>
            <hr/>
            <h3>&copy; Ayush</h3>
            <div className="fotDiv">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="fotDiv">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="fotDiv noBorder">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            
            <div className="socialDiv">
                <hr/>
                <center>
                    <a href="https://www.facebook.com/profile.php?id=100008443149564" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="socialImg"/>
                    </a>
                    <a href="https://www.instagram.com/_ayush.khadgi_/" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="socialImg"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCMlqCztvjev9hEDQMHcs5lg" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="socialImg"/>
                    </a>
                </center>
            </div>
            
        </footer>
    )
}

export default Footer;
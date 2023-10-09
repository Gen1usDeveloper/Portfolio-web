import "./footer.css";
import Logo from "../../images/abc.png";
import Github from "../../images/icons8-github-24.png";
import linkedin from "../../images/icons8-linkedin-logo-48.png";
import facebook from "../../images/icons8-facebook-logo-48.png";
import fiver from "../../images/icons8-fiverr-48.png";

const footer =()=>{
    return (
        <>
        <footer className="footer">
            <div className="footer-container global-max-width">
                <div className="footer-des">
                    <img src={Logo} alt="Portfolio Logo"/>
                    <div className="contact">
                        <h5>Contact Me</h5>
                        <ul>
                            <li>Tel: 12345679</li>
                            <li>Email: jawadkhankhichi582@gmail.com</li>
                        </ul>
                    </div>
                    <div className="locations">
                        <h5>Locations</h5>
                        <ul>
                            <li>100 Blv, Los Angeles MA</li>
                            <li><a href=" "><img id="github" src={Github} alt="github account"></img></a>
                            <a href=" "><img id="" src={linkedin} alt="linkedin profile"></img></a>
                            <a href=" "><img id="" src={facebook} alt="facebook profile"></img></a>
                            <a href=" "><img id="" src={fiver} alt="fiver profile"></img></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        <div className="Copyright">
            <p>@ 2023| All rights are reserved | Muhammad Jawad Khan</p>
        </div>
        </footer>
        </>
    );
};
export default footer;
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";
import About from "../components/About/about";
import Projects from "../components/projects/projects";
import Services from "../components/services/Services";
import Certifications from "../components/certifications/Certifications";
import Contact from "../components/contact/contact";

const Homepage =()=> {
    return (
        <>
        <Header />
        <Main />
        <Services />
        <Certifications />
        <Projects />
        <About />
        <Contact />
        <Footer />
        </>
    );
};
export default Homepage;
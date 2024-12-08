import AppNav from "../components/app-nav.jsx";
import Footer from "../components/Footer.jsx";

const Layout = (props) => {
    return (
        <>
            <AppNav/>

            {props.children}

            <Footer/>
        </>
    );
};

export default Layout;
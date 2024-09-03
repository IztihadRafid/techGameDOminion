import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightSideNav from "../Components/RightSideNav";

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
            
                <div className="col-span-3">
                    
                    <Banner></Banner>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
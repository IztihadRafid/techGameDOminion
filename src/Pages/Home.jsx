import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightSideNav from "../Components/RightSideNav";
import GameCard from "./GameCard";

const Home = () => {
    const games = useLoaderData()
    console.log(games);
    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid gird-cols-1 md:grid-cols-4">
                <div className="col-span-3"> 
                    <Banner></Banner>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                games.map(game=> <GameCard key={game.id} game={game}></GameCard>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
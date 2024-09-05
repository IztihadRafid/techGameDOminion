import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const GameDetails = () => {
    const gameDetails = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const gameDetail = gameDetails.find(gameDetail => gameDetail.id === idInt);
    const handlePlayToast =()=>{
        toast("You have bought the Game! Now Enjoy the Game")
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl">
                <img className="p-3 max-w-6xl" src={gameDetail.image} alt="" />
                <h2 className="text-4xl text-red-500 font-bold">{gameDetail.name}</h2>
                <p className="text-2xl p-3 font-semibold">{gameDetail.description}</p>
                
                <div className="mt-5 mb-5 flex">
                <p className="text-2xl p-3 font-bold text-pink-500">Price: $ <span >{gameDetail.price}</span></p>
                <button className="px-6 py-3 bg-pink-500 text-white font-semibold text-lg rounded-xl"  onClick={handlePlayToast}>Play</button>
                <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
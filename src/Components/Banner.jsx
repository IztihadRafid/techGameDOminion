import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero max-h-fit "
            style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/man-wearing-vr-glasses-gaming_23-2151138370.jpg?t=st=1725350320~exp=1725353920~hmac=c20816baadcd3f2f6c9c512448d72ce47263f3e5352ad1426d479a75a45c6598&w=1380)",
            }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content text-right">
                <div className="max-w-lg text-white">
                    <h1 className="mb-5 text-6xl font-bold">Explore Yourself</h1>
                    <p className="mb-5 text-xl">
                    Ultimate Gaming Arena 2024 is the premier gaming event of the year, bringing together top players and teams from across the globe to compete in the most thrilling and intense esports titles. 
                    </p>
                    <button className="btn bg-pink-600 text-white font-semibold mr-6">Join Now</button>
                    <Link to='/login'><button className="btn btn-primary">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className="p-4 mb-4">
                <h2 className="text-3xl">Find Us On</h2>
                <a className="p-4 flex text-lg items-center rounded-t-lg border" href="">
                    <FaFacebookF className="mr-3"></FaFacebookF>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center rounded-lg border" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a><a className="p-4 flex text-lg items-center rounded-b-lg border" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instaram</span>
                </a>
            </div>
        </div>
     
    );
};

export default RightSideNav;
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className=" max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
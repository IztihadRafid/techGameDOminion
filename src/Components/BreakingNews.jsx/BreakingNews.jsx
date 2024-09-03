import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="my-4">
               <Marquee speed={100} className="text-lg font-semibold p-3">
               <h2 className="font-semibold texl-lg ml-5"> "CSGO Finals: Epic Showdown at 8 PM Tonight!" </h2>
               <h2 className="font-semibold texl-lg ml-5"> "VALORANT Semi-Finals: Don`t Miss the Action!" </h2>
               <h2 className="font-semibold texl-lg ml-5"> "Last Chance to Register for the Ultimate Esports Battle!" </h2>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
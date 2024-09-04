
const GameCard = ({ game }) => {
    const { id, name, price, description, image, btn_specific } = game
    return (
        <div className="card card-compact  bg-base-100  shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                {
                    description.length > 50 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>
                }
                </div>
                <div className="card-actions justify-end">
                    <button className='px-6 py-3  rounded-md w-full font-serif font-semibold text-lg'  style={{ color: btn_specific.text_color, backgroundColor: btn_specific.btn_color }}  >Details</button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
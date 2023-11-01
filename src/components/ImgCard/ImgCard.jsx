
const ImgCard = ({ item }) => {
    return (
        <div className=" border-solid border-2 rounded-lg hover:bg-slate-400 galleryImg">
            <input className="scale-125 absolute ml-4 mt-4" type="checkbox" name="" id="" />
            <img className="rounded-lg" src={item.img} alt="" />
        </div>
    );
};

export default ImgCard;
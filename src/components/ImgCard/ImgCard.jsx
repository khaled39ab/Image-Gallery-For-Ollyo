
const ImgCard = (props) => {
    
    const {index, image, handleChecked} = props;
    const inlineStyles = {
        // transformOrigin: "0% 0%",
        height: `${index === 0 ? "350px" : "200px"}`,
        width: `${index === 0 ? "350px" : "200px"}`,
        // borderRadius: "12px",
        gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
        gridRow: `${index === 0 ? "1 / span 2" : ""}`,
        // backgroundColor: "#ffffff",
        // display: "flex",
        // justifyContent: "center",
        // touchAction: 'none',
        // alignItems: "center"
    };
    // console.log(index);

    return (
        <div style={inlineStyles}>
            {/* <input className={`scale-125 absolute ml-4 mt-4  imgCheck `} type="checkbox" value={item.id} onChange={handleChecked} />
            <img className="rounded-lg" src={item.img} alt={`image${item.id}`} /> */}
            {/* {hovered && (
                <div className={`absolute ${index === 0 ? "hidden" : ""} rounded-[10px] inset-0 bg-black bg-opacity-50 pointer-events-none z-10`}></div>
            )} */}
            <input className={`scale-125 absolute ml-4 mt-4  imgCheck `} type="checkbox" value={image.id} onChange={handleChecked} />
            <img className="rounded-lg" src={image.img} alt={`image${image.id}`} />
            <div className={`absolute transition-opacity ease-in-out bg-black bg-opacity-50 hover:opacity-80`}></div>
        </div>
    );
};

export default ImgCard;
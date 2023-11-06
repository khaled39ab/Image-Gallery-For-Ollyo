import { Checkbox } from "@nextui-org/react";

const ImgCard = ({ index, image, handleChecked }) => {

    const inlineStyles = {
        height: `${index === 0 ? "350px" : "200px"}`,
        width: `${index === 0 ? "350px" : "200px"}`,
        gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
        gridRow: `${index === 0 ? "1 / span 2" : ""}`,
    };

    return (
        <div style={inlineStyles}>
            <Checkbox  className={`scale-125 absolute ml-4 mt-4  imgCheck `}  onChange={handleChecked} name={image.id}
            id={image.id} size="md"></Checkbox>
            {/* <input className={`scale-125 absolute ml-4 mt-4  imgCheck `} type="checkbox" value={image.id} onChange={handleChecked} /> */}
            <img className="rounded-lg" src={image.img} alt={`image${image.id}`} />
        </div>
    );
};

export default ImgCard;

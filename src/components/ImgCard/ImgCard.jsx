import { useState } from "react";

const ImgCard = ({ item }) => {

    const [checkedValue, setCheckedValue] = useState([]);

    const handleChecked =(e) =>{
        const {value, checked} = e.target;
        // console.log(value, checked);

        if(checked){
            setCheckedValue(pre => [...pre, value])
        } else{
            setCheckedValue(pre => [...pre.filter(i => i !== value)])
        }
    }

    console.log(checkedValue);

    return (
        <div className=" border-solid border-2 rounded-lg hover:bg-slate-300">
            <input className="scale-125 absolute ml-4 mt-4" type="checkbox" value={item._id} onChange={handleChecked} name="" id="" />
            <img className="rounded-lg" src={item.img} alt="" />
        </div>
    );
};

export default ImgCard;
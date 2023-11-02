import { useState } from 'react';
import './Gallery.css';

const Gallery = ({ imageInfo }) => {
    
    const [checkedValue, setCheckedValue] = useState([]);

    const handleChecked = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCheckedValue(pre => [...pre, value])
        } else {
            setCheckedValue(pre => [...pre.filter(i => i !== value)])
        }
    }

    console.log(checkedValue);

    return (
        <div className="m-5">
            <div>
                
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8">
                {
                    imageInfo && imageInfo.map(item => <div
                        key={item._id}
                        className=" border-solid border-2 rounded-lg hover:bg-slate-300"
                    >
                        <input className="scale-125 absolute ml-4 mt-4" type="checkbox" value={item._id} onChange={handleChecked} name="" id="" />
                        <img className="rounded-lg" src={item.img} alt={`image${item._id}`} />
                    </div>)
                }
            </div>
        </div >
    );
};

export default Gallery;
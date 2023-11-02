import { useState } from 'react';
import './Gallery.css';

const Gallery = ({ imageInfo }) => {

    const [images, setImages] = useState(imageInfo);
    const [checkedValue, setCheckedValue] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const handleChecked = (e) => {
        const { value, checked } = e.target;

        const getValue = images.find(data=> data._id == value)
        
        if (checked) {
            setCheckedValue(pre => [...pre, getValue])
            setItemCount(checkedValue.length + 1)
        } else {
            setCheckedValue(pre => [...pre.filter(i => i !== getValue)])
            setItemCount(checkedValue.length - 1)
        }
    }


    const handleDelete = () => {
        const updatedImages = images.filter((image) => !checkedValue.includes(image));
        setImages(updatedImages);
        setItemCount(0)
    }; 


    return (
        <div className="m-5">
            <div className='my-5 py-2 px-5 border border-solid flex justify-between'>
                <div className='mt-1'>
                    <h4 className='text-xl font-bold'>{itemCount} Files Selected</h4>
                </div>
                <button onClick={handleDelete}  disabled={checkedValue.length === 0} className='px-6 py-2 bg-red-500 rounded-md text-white'>Delete</button>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8">
                {
                    images && images.map(item => <div
                        key={item._id}
                        className=" border-solid border-2 rounded-lg hover:bg-slate-300"
                    >
                        <input className="scale-125 absolute ml-4 mt-4" type="checkbox" value={item._id} onChange={handleChecked}/>
                        <img className="rounded-lg" src={item.img} alt={`image${item._id}`} />
                    </div>)
                }
            </div>
        </div >
    );
};

export default Gallery;
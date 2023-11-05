import { useState } from 'react';
import './Gallery.css';
import addImg from '../../assets/images/addImg.png';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableImage from '../SortableImage';

const Gallery = ({ imageInfo }) => {

    const [images, setImages] = useState(imageInfo);
    const [checkedValue, setCheckedValue] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    // const [hovered, setHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);



    const handleChecked = (e) => {
        const { value, checked } = e.target;

        const getValue = images.find(data => data.id == value)

        if (checked) {
            setCheckedValue(pre => [...pre, getValue])
            setItemCount(itemCount + 1);
            setIsSelected(true);
        } else {
            setCheckedValue(pre => [...pre.filter(i => i !== getValue)])
            setItemCount(itemCount - 1);
            setIsSelected(false);
        }
    }


    const handleDelete = () => {
        const updatedImages = images.filter((image) => !checkedValue.includes(image));
        setImages(updatedImages);
        setItemCount(0)
    };


    const handleDragStart = e => {
        console.log(e);
    }

    const handleDragEnd = e => {
        const { active, over } = e;
        console.log('active:', active, 'over:', over);

        if (active.id !== over?.id) {
            setImages((items) => {
                const oldIndex = items.indexOf(active?.id);
                const newIndex = items.indexOf(over?.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <div className="m-5 shadow-2xl p-5">
            <div className='my-5 py-2 px-5 border border-solid flex justify-between'>
                <div className='mt-1'>
                    <h4 className='text-xl font-bold'>{itemCount} Files Selected</h4>
                </div>
                <button onClick={handleDelete} disabled={checkedValue.length === 0} className='px-6 py-2 bg-red-500 rounded-md text-white'>Delete</button>
            </div>
            <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={images} strategy={rectSortingStrategy} >
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8 ">
                        {
                            images && images.map((image, index) => <div
                                key={image.id}
                                className={`rounded-lg hover:bg-slate-300 imgCard ${isSelected ? 'border-solid border-2 border-indigo-400' : ''} ${index === 0 ? "md:col-span-2" : ""} ${index === 0 ? "md:row-span-2" : ""} `}
                            // onMouseEnter={() => setHovered(true)}
                            // onMouseLeave={() => setHovered(false)}
                            >
                                <SortableImage
                                    key={image.id}
                                    image={image}
                                    handleChecked={handleChecked}
                                    index={index}
                                ></SortableImage>
                                {/* <input className={`scale-125 absolute ml-4 mt-4  imgCheck `} type="checkbox" value={item.id} onChange={handleChecked} />
                                <img className="rounded-lg" src={item.img} alt={`image${item.id}`} />
                                <div className={`absolute transition-opacity ease-in-out bg-black bg-opacity-50 hover:opacity-80`}></div> */}
                            </div>)
                        }
                        <div className="flex flex-col gap-2 rounded-lg cursor-pointer border-2 border-dashed border-slate-500 justify-center items-center bg-slate-300">
                            <img className="w-12 h-12" src={addImg} alt="" />
                            <h4>Add Images</h4>
                        </div>
                    </div>
                </SortableContext>
            </DndContext>

        </div >
    );
}


export default Gallery;
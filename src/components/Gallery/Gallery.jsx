import { useState } from 'react';
import './Gallery.css';
import addImg from '../../assets/images/addImg.png';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableImage from './SortableImage';

const Gallery = ({ imageInfo }) => {

    const [images, setImages] = useState(imageInfo);
    const [checkedValue, setCheckedValue] = useState([]);
    const [itemCount, setItemCount] = useState(0);


    const handleChecked = (e) => {
        const { value, checked } = e.target;
        
        const getValue = images.find(data => data.id == value)

        if (checked) {
            setCheckedValue(pre => [...pre, getValue])
            setItemCount(itemCount + 1);
        } else {
            setCheckedValue(pre => [...pre.filter(i => i !== getValue)])
            setItemCount(itemCount - 1);
        }
    }


    const handleDelete = () => {
        const updatedImages = images.filter((image) => !checkedValue.includes(image));
        setImages(updatedImages);
        setItemCount(0)
    };


    const handleDragEnd = e => {
        const { active, over } = e;
        // console.log('active:', active, 'over:', over);

        if (active.id !== over.id) {
            setImages((items) => {
                const oldIndex = items.findIndex(item=>item.id === active.id);
                const newIndex = items.findIndex(item=>item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <div className="m-5 shadow-2xl rounded-md p-5">
            <div className='my-5 py-2 px-5 border border-solid flex justify-between'>
                <div className='mt-1'>
                    <h4 className='text-xl font-bold'>{itemCount} Files Selected</h4>
                </div>
                <button onClick={handleDelete} disabled={checkedValue.length === 0} className='px-6 py-2 bg-red-500 rounded-md text-white'>Delete</button>
            </div>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={images} strategy={rectSortingStrategy}>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 w-max mx-auto">
                        {
                            images && images.map((image, index) => (
                                <SortableImage
                                    key={image.id}
                                    image={image}
                                    handleChecked={handleChecked}
                                    index={index}
                                ></SortableImage>
                            )
                            )
                        }
                        <div className="flex flex-col gap-2 rounded-lg cursor-pointer border-2 border-dashed border-slate-500 justify-center items-center bg-slate-300 min-h-[200px]">
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
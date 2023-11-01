import ImgCard from '../ImgCard/ImgCard';
import './Gallery.css';

const Gallery = ({ imageInfo }) => {
    // console.log(imageInfo);

    return (
        <div className="m-5">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8">
                {
                    imageInfo && imageInfo.map(item => <ImgCard
                        key={item.id}
                        item={item}
                    ></ImgCard>)
                }
        </div>
        </div >
    );
};

export default Gallery;
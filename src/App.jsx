import './App.css'
import img1 from '../src/assets/images/image-1.png';
import img2 from '../src/assets/images/image-2.png';
import img3 from '../src/assets/images/image-3.png';
import img4 from '../src/assets/images/image-4.png';
import img5 from '../src/assets/images/image-5.png';
import img6 from '../src/assets/images/image-6.png';
import img7 from '../src/assets/images/image-7.webp';
import img8 from '../src/assets/images/image-8.webp';
import img9 from '../src/assets/images/image-9.webp';
import img10 from '../src/assets/images/image-10.jpeg';
import img11 from '../src/assets/images/image-11.jpeg';
import Gallery from './components/Gallery/Gallery';

function App() {

  const imageInfo = [
    {
      _id: 1,
      img: img1
    },
    {
      _id: 2,
      img: img2
    },
    {
      _id: 3,
      img: img3
    },
    {
      _id: 4,
      img: img4
    },
    {
      _id: 5,
      img: img5
    },
    {
      _id: 6,
      img: img6
    },
    {
      _id: 7,
      img: img7
    },
    {
      _id: 8,
      img: img8
    },
    {
      _id: 9,
      img: img9
    },
    {
      _id: 10,
      img: img10
    },
    {
      _id: 11,
      img: img11
    },
  ]

  return (

    <>
      <div className='max-w-screen-xl mx-auto bg-white'>
        <h1 className="text-4xl font-bold text-center">
          Image Gallery
        </h1>
        <Gallery imageInfo={imageInfo} />
      </div>
    </>
  )
}

export default App

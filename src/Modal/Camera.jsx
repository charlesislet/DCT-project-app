import React from 'react';
import camera from '../Image/camera.jpg'

const Camera = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='fixed w-full h-full z-20 top-1/2'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='max-w-[600px] w-full fixed top-[40%] left-[50%] flex bg-white shadow-2xl -translate-y-1/2 -translate-x-1/2 rounded-xl'
      >
        <img src={camera} className="md:w-[250px] w-[150px] object-cover" />
        <div className='w-full'>
          <p className='fixed md:top-8 md:right-8 top-2 right-2 cursor-pointer' onClick={onClose}>
            X
          </p>
          <div className='flex flex-col justify-center text-center mt-[3rem] py-[1rem] md:px-[2rem]'>
            <p className='md:text-2xl font-noto-sans'>裝設於天花板上的相機即時捕捉觀展者的身體位置(參見技術)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
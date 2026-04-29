import PhotoCard from '@/component/PhotoCard';
import React from 'react';

const AllPhotos =async () => {
   const res = await fetch ('https://pixgen-project-one.vercel.app/data.json');
  const photos =await res.json();
  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>All photos</h1>
       <div className='grid grid-cols-4 justify-center items-center gap-8'>
              {photos.map(photo=><PhotoCard 
              key={photo.id}
              photo={photo}
              ></PhotoCard>)}
            </div>
    </div>
  );
};

export default AllPhotos;
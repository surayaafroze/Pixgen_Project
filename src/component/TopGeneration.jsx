import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration =async () => {
  const res = await fetch ('https://pixgen-project-one.vercel.app/data.json');
  const photos =await res.json();
  const topPhotos = photos.slice(0,8)
  
 
  return (
    <div className='p-5'>
      <h2 className='text-2xl mt-5 font-bold'>Top Photos</h2>
      <div className='grid grid-cols-4 justify-center items-center gap-8'>
        {topPhotos.map(photo=><PhotoCard 
        key={photo.id}
        photo={photo}
        ></PhotoCard>)}
      </div>
    </div>
  );
};

export default TopGeneration;
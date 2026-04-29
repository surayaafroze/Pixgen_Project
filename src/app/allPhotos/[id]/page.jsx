import Image from 'next/image';
import React from 'react';

const photoDetails =async ({params}) => {
  const {id} =await params
  const res = await fetch ('https://pixgen-project-one.vercel.app/data.json');
  const photos =await res.json();
  const photo=photos.find(p=>p.id==id)
  console.log(photo)
  return (
    <div>
      <div>
         <Image
                 className='rounded-2xl '
                src={photo.imageUrl}
               
                alt={photo.title}
                width={300}
                height={300}
                >
        
                </Image>
      </div>

    </div>
  );
};

export default photoDetails;
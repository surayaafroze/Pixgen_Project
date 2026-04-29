import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcLike } from 'react-icons/fc';
import { MdDownloadForOffline } from 'react-icons/md';

const PhotoCard = ({photo}) => {
  const {title,imageUrl,category,likes,downloads} =photo
  return (
    <div className='shadow'>
      <div className='p-5 space-y-5'>
       <div className='flex justify-center items-center relative w-full aspect-square'>
         <Image
         className='rounded-2xl object-cover'
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={title}
        
        >

        </Image>
        <Chip className='absolute  -top-2 bg-purple-500 text-white'>{category}</Chip>
       </div>
        <div>
          <h2 className='font-light'>{title}</h2>
  
    <div className='flex items-center gap-2'>
      <FcLike></FcLike>
      <p >{likes}</p>
    </div>
 
  
   <div className='flex gap-2  items-center '>
    <MdDownloadForOffline></MdDownloadForOffline>
     <p >{downloads}</p>
   </div>
   <Link href={`/allPhotos/${photo.id}`}><Button variant='outline' className={'w-full bg-purple-500 text-white'}>view details</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
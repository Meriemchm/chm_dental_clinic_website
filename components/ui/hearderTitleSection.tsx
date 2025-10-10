import React from 'react'

interface hearderTitleProps {
    title: string;
    url: string;
}

const HearderTitle: React.FC<hearderTitleProps> = ({title, url}) => {
  return (
    <div className='flex flex-col items-center justify-center p-24 bg-neutral-100'>
        <h1 className='md:text-5xl text-3xl capitalize text-black font-semibold my-12 '>{title}</h1>
        <p className=' capitalize text-neutral-500'>Home / {url} </p>
    </div>
  )
}

export default HearderTitle

import Image from 'next/image'
import React from 'react'

const Avatar = ({size}) => {
  let width = 'w-12';
  let height = 'h-12';

  if(size === 'lg'){
    width= "w-32"
  }

  if(size === 'lg'){
    height= "h-32"
  }
  return (
    <div className={`overflow-hidden ${width} ${height} rounded-full relative`}>
    <Image
      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
      alt=""
      fill
      className="object-cover rounded-full"
    />
  </div>
  )
}

export default Avatar
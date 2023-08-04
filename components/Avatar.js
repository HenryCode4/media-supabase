import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div className="overflow-hidden w-12 h-12 rounded-full">
    <Image
      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
      alt=""
      width={60}
        height={60}
      className="object-cover rounded-full"
    />
  </div>
  )
}

export default Avatar
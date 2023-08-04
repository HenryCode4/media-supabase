import Avatar from '@/components/Avatar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <Layout>
        <Card noPadding={true}>
            <div className="relative overflow-hidden rounded-md">
                <div className='h-48 overflow-hidden flex justify-center items-center relative'>
            <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" 
            alt=''
            fill
            className='object-cover'
            />
            </div>
            <div className='absolute top-36 left-4'>
                <Avatar size={"lg"} />
            </div>

            <div className='p-4 pb-24'>
                <div className='ml-40'>
                    <h1 className=' text-3xl font-bold'>Chima Nnamani </h1>
                <div className='text-gray-400 leading-4'>
                    Stockhole, Sweden
                </div>
                </div>
                
            </div>
            </div>
            

            
            
            
            
            
        </Card>
    </Layout>
  )
}

export default ProfilePage
import Avatar from '@/components/Avatar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <Layout>
        <Card noPadding={true}>
            <div className='h-48 overflow-hidden flex justify-center items-center'>
                <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" 
            alt=''
            height={192}
            width={700}
            className='object-cover'
            />
            </div>
            
            <div className='p-4'>
                <Avatar />
                Chima Nnamani
            </div>
            
        </Card>
    </Layout>
  )
}

export default ProfilePage
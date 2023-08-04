import React from 'react'
 
  import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'
import PostFormCard from '@/components/PostFormCard'

const Home = () => {
  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  )
}

export default Home
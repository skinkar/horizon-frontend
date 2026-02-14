import React from 'react'
import BlogCategories from './components/BlogCategories'
import RecentBlogs from './components/RecentBlogs'

const BlogPage = () => {
    return (
        <main className=''>
            <BlogCategories />
            <RecentBlogs />
            <div
                className="pointer-events-none fixed bottom-0 left-0 z-50 h-32 w-full
  backdrop-blur-md
  [mask-image:linear-gradient(to_top,black,transparent)]"
            />
        </main>
    )
}

export default BlogPage
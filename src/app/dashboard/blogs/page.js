import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Blogs | Dashboard | Practice NextJS',
    description: 'Practice NextJS',
}

const blogs = [
    {
        title: "Blog 1",
        id: 1
    },
    {
        title: "Blog 2",
        id: 2
    },
    {
        title: "Blog 3",
        id: 3
    },
    {
        title: "Blog 4",
        id: 4
    }
]

const DashboardBlogs = () => {
    return (
        <div>
            <h2>This is dashboard blogs page</h2>
            <div className='mt-4 flex flex-col gap-5'>
                {
                    blogs.map((blog) => {
                        return (
                            <Link href={`/dashboard/blogs/${blog.id}`} className='border-2 p-5 cursor-pointer' key={blog.id}>{blog.title}</Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DashboardBlogs;
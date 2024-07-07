import Link from 'next/link';
import React from 'react'

export default async function Page() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();
  return (
    <section className="text-center pt-16 px-5">
    <h1 className="text-4xl md:text-5xl font-bold">Todos os posts</h1>

    <ul className='py-4'>
      {
        data.posts.map((post) => (
          <li key={post.id} className="py-1 mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
    </ul>
  </section>
  )
}


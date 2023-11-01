'use client';

import { useState } from 'react';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const create = async() => {
    await fetch('http://127.0.0.1:8090/api/collections/notes/records/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={create} className='flex flex-col md:w-[300px]'>
      <h3 className='text-xl font-bold mb-2'>Create a new note!</h3>
      <div className='grid grid-cols-1 gap-x-4 gap-y-5'>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
        />
        <textarea
          placeholder='Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
        />
        <button type='submit' className='rounded-full border border-solid bg-neutral-900 hover:bg-gradient-to-b hover:from-slate-800 hover:to-slate-900'>
          Create note
        </button>
      </div>
    </form>
  )
}
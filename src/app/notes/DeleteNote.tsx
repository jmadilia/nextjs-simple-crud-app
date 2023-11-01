'use client';

import { useRouter } from 'next/navigation';
import { FaRegTrashCan } from 'react-icons/fa6';

export default function DeleteNote({ id }: any) {
  const router = useRouter()

  const handleDelete = async() => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
        const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (res.ok) {
          router.push("/notes");
        }
    }
    
  }

  return (
    <button onClick={handleDelete} className='text-red-400'>
      <FaRegTrashCan size={24}/>
    </button>
  )
}
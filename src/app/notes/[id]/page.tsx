import DeleteNote from "../DeleteNote";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate : 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  const createdDate = new Date(note.created).toLocaleString();

  return (
    <div className="w-full space-y-5">
      <h1 className="flex flex-wrap mb-4 text-4xl font-extrabold truncate">Notes/{note.id}</h1>
      <div className="flex flex-col bg-yellow-400 shadow-md shadow-slate-400 dark:shadow-white space-y-3 p-3 w-full md:w-[300px]">
          <h2 className="font-bold text-2xl">{note.title}</h2>
          <h5>{note.content}</h5>
          <p>{createdDate}</p>
        </div>
      <DeleteNote id={params.id}/>
    </div>
  )
}
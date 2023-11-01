import Link from "next/link";
import CreateNote from "./CreateNote";

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getNotes() {
  const res = await fetch(
      'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
      { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="flex flex-col w-full flex-wrap space-y-5">
      <h1 className="text-4xl font-extrabold">Notes</h1>
      <div className="flex flex-wrap space-y-4 p-1 md:w-[300px] md:flex-row md:wra">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  const createdDate = new Date(created).toLocaleString();

  return (
    <div className="flex flex-col bg-yellow-400 shadow-md shadow-slate-400 p-3 w-full">
      <Link href={`/notes/${id}`}>
        <div className="space-y-3">
          <h2 className="font-bold text-2xl">{title}</h2>
          <h5>{content}</h5>
          <p>{createdDate}</p>
        </div>
      </Link>
    </div>
  )
}
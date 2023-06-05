import {TodoItem} from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, done: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { done } })
}

async function deleteTodo(id: string){
  "use server"

  await prisma.todo.delete({where: {id}})
}

export default async function Home() {
  // const results = await prisma.todo.create({data: {title:'test',done:false}})
  // const result = await prisma.todo.deleteMany()
  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul className='pl-4'>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </main>
    </>
  )
}

import Image from 'next/image'
import { getTodos } from '@/lib/todos'
import TodoForm from './component/TodoForm'
import { SignOutButton, currentUser } from "@clerk/nextjs";
import SignIn from './component/SignIn'
import Navbar from './component/Navbar';
import Todo from './component/Todo';



export default async function Home() {
  const user = await currentUser()
  const emailId = user?.primaryEmailAddressId || ''; 
  const { todos } = await getTodos(emailId)
  if(!user) return <SignIn  />
  console.log(user?.primaryEmailAddressId)
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <TodoForm />
      {
        todos?.map(todo =>(
          <Todo key={todo.id} props={todo} />
        ))
      }
    </main>
  )
}

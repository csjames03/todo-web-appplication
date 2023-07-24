"use server"
import { createTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache"
import { currentUser } from "@clerk/nextjs";

export async function createTodoAction(title: string){
    const user = await currentUser()
    const emailId = user?.primaryEmailAddressId
    await createTodo(title, emailId)
    revalidatePath('/')
}
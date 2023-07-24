"use server"
import { createTodo, modifyIsComplete, deleteTodo} from "@/lib/todos"
import { revalidatePath } from "next/cache"
import { currentUser } from "@clerk/nextjs";

export async function createTodoAction(title: string){
    const user = await currentUser();
    const emailId = user?.primaryEmailAddressId || ''; // Provide a default value of an empty string if emailId is null or undefined
    await createTodo(title, emailId);
    revalidatePath('/');
}

export async function modifyIsCompleteAction(id: string,isCompleted: boolean){ 
    await modifyIsComplete(id, isCompleted);
    revalidatePath('/');
}

export async function deleteTodoAction(id: string){ 
    await deleteTodo(id);
    revalidatePath('/');
}
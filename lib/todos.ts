import prisma from "./prisma";

export async function getTodos(emailId: string){
    try{
        const todos = await prisma.todo.findMany()
        return {todos}
    }catch(error){
        return {error}
    }
}

export async function createTodo(title: string, emailId: string){
    try{
        const todo = await prisma.todo.create({ data: {
            title: title,
            email: emailId
        } });
        return {todo}
    }catch(error){
        return {error}
    }
}
import prisma from "./prisma";

export async function getTodos(emailId?: string | null){
    try{
        const todos = await prisma.todo.findMany({
            where: {
              email: emailId,
            },
          })
        return {todos}
    }catch(error){
        return {error}
    }
}

export async function createTodo(title: string, emailId?: string | null) {
    try {
        const todo = await prisma.todo.create({
            data: {
                title: title,
                email: emailId,
            },
        });
        return { todo };
    } catch (error) {
        return { error };
    }
}
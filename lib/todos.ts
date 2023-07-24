import prisma from "./prisma";

export async function getTodos(emailId: string){
    try{
        const todos = await prisma.todo.findMany({
            where: {
                email: emailId
            }
        })
        return {todos}
    }catch(error){
        return {error}
    }
}

export async function modifyIsComplete(id:string, isCompleted: boolean){
    try{
        const todos = await prisma.todo.update({
            where: {
              id: id,
            },
            data: {
              isCompleted: isCompleted,
            },
          })
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

export async function deleteTodo(id:string){
    try{
        const todo = await prisma.todo.deleteMany({
            where: {
              id: id,
            },
          });
        return {todo}
    }catch(error){
        return {error}
    }
}

'use client'
import { useRef } from "react"
import { createTodoAction } from "../_actions"


function TodoForm() {
    const formRef = useRef<HTMLFormElement>(null)
    async function action(data: FormData) {
        const title = data.get('title')
        if(!title || typeof title !== 'string') return 

        //call a server action 
        await createTodoAction(title)
        //reset the form
        formRef.current?.reset()
    }

    return (
        <form ref={formRef} action={action} className="flex mb-6" >
            <input 
            type="text" 
            placeholder="Enter a Task"
            name="title"
            className="shadow appearance-none outline-none border bg-transparent py-2 px-3 text-grey-darker border-slate-600"
            />
            <button type="submit" className="px-2 py-1 bg-slate-600">
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm
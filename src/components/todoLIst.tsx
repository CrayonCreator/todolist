import { useTodoStore } from "../../store"

export default function TodoList() {
    const todos = useTodoStore(state => state.todos);
    const removeTodo = useTodoStore(state => state.removeTodo);
    const toggleTodo = useTodoStore(state => state.toggleTodo);
    return (
        <div className="flex flex-col border-2 border-blue-100 rounded-2xl mt-3 p-3 w-full h-full overflow-y-auto ">
            {todos.map(todo =>{
                return (
                    <div 
                        key={todo.id} 
                        className="flex justify-between p-3 text-2xl"
                        >
                        <div 
                            className="flex items-center">
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={() => toggleTodo(todo.id)} 
                                className="mr-2" />
                            <span 
                                className={` ${todo.completed ? 'line-through' : ''}`}
                                >{todo.text}
                            </span>
                        </div>
                        <button 
                            onClick={() => removeTodo(todo.id)} 
                            className="border-1 p-1 rounded-lg border-blue-400 cursor-pointer hover:bg-blue-100"
                            >Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

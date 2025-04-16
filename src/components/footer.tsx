import { useTodoStore } from "../../store"
export default function Footer() {
    // @ts-expect-error look in my eyes tell me why 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const todos = useTodoStore(state=>state.todos);
    const clearCompleted = useTodoStore(state => state.clearCompleted);
    const getAllDoneNum = useTodoStore(state => state.getAllDoneNum);
    const getAllNum = useTodoStore(state => state.getAllNum);
    
    return (
        <div>
            <div 
                className="border-1 p-4 mt-4 rounded-2xl border-blue-400 text-2xl flex justify-between "
            >
                <span
                    className="text-blue-900"
                    >had done {getAllDoneNum()} / all todos {getAllNum()} 
                </span>
                <button
                    className="border-1 pl-1 pr-1 rounded-2xl text-[#6210a5] bg-blue-100 cursor-pointer"
                    onClick={clearCompleted}
                >
                    Clear all completed
                </button>
            </div>
        </div>
    )
}
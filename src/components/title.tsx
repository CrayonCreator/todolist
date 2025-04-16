// TodoList的大标题
export default function Title() {
    return (
        <div className="flex flex-col items-center py-8 mb-6 rounded-lg shadow-sm">
            <h1 className="text-4xl font-bold text-gray-600 mb-2 ">Todo List</h1>
            <span className="text-gray-400 text-lg">This is a simple todolist based on React19 and Zustand</span>
        </div>
    )
}
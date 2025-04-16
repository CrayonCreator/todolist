import { create } from 'zustand';
import { persist , createJSONStorage } from 'zustand/middleware';
type Todo = {
    id: number;
    text: string;
    completed: boolean;
} 

type TodoStore = {
    todos :Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    clearCompleted: () => void;
    getAllDoneNum: () => number;
    getAllNum: () => number;
}

export const useTodoStore = create<TodoStore>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodo: (text: string) => {
                set((state) => {
                    const newTodo = { id: Date.now(), text, completed: false };
                    return { todos: [...state.todos, newTodo] };
                });
            },
            removeTodo: (id: number) => {
                set((state) => {
                    const newTodos = state.todos.filter(todo => todo.id !== id);
                    return { todos: newTodos };
                });
            },
            toggleTodo: (id: number) => {
                set((state) => {
                    const newTodos = state.todos.map(todo => {
                        if (todo.id === id) {
                            return { ...todo, completed: !todo.completed };
                        }
                        return todo;
                    });
                    return { todos: newTodos };
                });
            },
            clearCompleted: () => {
                set((state) => {
                    const newTodos = state.todos.filter(todo => !todo.completed);
                    return { todos: newTodos };
                });
            },
            getAllDoneNum: (): number => {
                return get().todos.filter(todo => todo.completed).length;
            },
            getAllNum: (): number => {
                return get().todos.length;
            }
        }),
        {
            name: 'todo-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
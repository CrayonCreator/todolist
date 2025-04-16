import {useTodoStore} from "../../store/index";
import { useState } from "react";

export default function TodoInput() {
    const addTodo = useTodoStore(state => state.addTodo);
    const [inputValue, setInputValue] = useState<string>("");
    const handleAddClick = ()=>{
        if(inputValue.trim() !== ""){
            addTodo(inputValue);
            setInputValue("");
        }
    }
    return (
        <div className = "flex p-1.5 border-1 rounded-2xl border-blue-400 h-20">
            <input 
                type="text" 
                placeholder="Please input your todo here" 
                className="w-4/5 outline-0 text-2xl text-gray-500 p-3" 
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        handleAddClick();
                    }
                }}
            />
            <button 
                className="hover:bg-blue-100 rounded-2xl w-1/5 cursor-pointer text-2xl relative before:content-[''] before:absolute before:left-0 before:top-0 before:translate-y-1/2 before:w-0.5 before:h-1/2 before:bg-blue-100 before:block"
                onClick={handleAddClick}
                onMouseDown={(e)=>{e.preventDefault()}}
            >
                添加
            </button>
        </div>
    )
}
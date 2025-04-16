import './App.css'
import Title from "./components/title.tsx"
import TodoInput from "./components/todoInput.tsx"
import TodoList from './components/todoLIst.tsx'
import Footer from './components/footer.tsx'
function App() {
  return (
    <div className="w-1/2 min-w-2xl h-screen shadow-xl p-5 flex flex-col">
      <Title />
      <TodoInput />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App

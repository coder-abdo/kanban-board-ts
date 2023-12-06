import { Column } from "@/components/column"
import { ThemeSwitcher } from "@/components/themeSwitcher"
import { modalStore } from "@/store/modalStore"
import { AddModal } from "@/components/addTask"

function App() {
  const isOpen = modalStore(state => state.isOpen)
  const openModal = modalStore((state) => state.openModal)
  return (
    <>
      {isOpen && <AddModal />}
      <div className="transition h-screen bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mb-5 py-2 items-center">
          <h1 className='text-2xl text-black dark:text-white'>Kanban</h1>
          <ThemeSwitcher />
        </div>
        <div className="pl-4 mb-4">
          <button className="btn" onClick={openModal}>add task</button>
        </div>
        <div className="flex gap-4 justify-center px-4">
          <Column state="todo" />
          <Column state="doing" />
          <Column state="done" />
        </div>

      </div>
    </>
  )
}

export default App

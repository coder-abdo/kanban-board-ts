import { useStore } from "@/store"
import { modalStore } from "@/store/modalStore"
import { ChangeEvent, FormEvent, useState } from "react"

export const useTaskModal = () => {
  const closeModal = modalStore((state) => state.closeModal)
  const isOpen = modalStore((state) => state.isOpen)
  const add = useStore((state) => state.add)
  const [taskTitle, setTaskTitle] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const task = {
      id: `${crypto.randomUUID()}`,
      title: taskTitle,
      status: "todo" as const
    }
    add(task)
    closeModal()
  }
  return { isOpen, handleChange, handleSubmit, taskTitle, closeModal }
}

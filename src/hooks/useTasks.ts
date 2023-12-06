import { useMemo, useState } from "react"
import type { DragEvent } from 'react'
import { Status } from "@/types"
import { useStore } from "@/store"

export const useTasks = (state: Status) => {
  const [isDropped, setIsDropped] = useState(false)
  const tasks = useStore((state) => state.tasks)
  const filteredTasks = useMemo(() => tasks.filter((task) => task.status === state), [
    tasks,
    state
  ])
  const draggableTask = useStore((state) => state.draggableTask);
  const setDraggableTask = useStore((state) => state.setDraggableTask);
  const moveTask = useStore((state) => state.moveTask);
  const deleteTask = useStore((state) => state.deleteTask);
  const handleDragStart = (taskTitle: string) => {
    setIsDropped(true)
    setDraggableTask(taskTitle)
  }
  const handleDragLeave = () => {
    setIsDropped(false)
  }
  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId)
  }
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  const handleDrop = () => {
    moveTask(draggableTask as string, state);
    setDraggableTask(null);
  }
  return { filteredTasks, handleDragStart, handleDragLeave, handleDragOver, handleDrop, isDropped, handleDeleteTask }
}

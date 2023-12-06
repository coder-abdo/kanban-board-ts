import { IAction, IState } from "@/types"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"


export const useStore = create<IState & IAction>()(
  immer((set) => {
    return ({
      tasks: [],
      draggableTask: null,
      add: task => set(state => {
        state.tasks.push(task)
      }),
      deleteTask: taskId => set(state => { state.tasks = state.tasks.filter(task => task.id !== taskId) }),
      setDraggableTask: taskTitle => set(state => {
        state.draggableTask = taskTitle
      }),
      moveTask: (taskTitle, status) => set(state => {
        state.tasks = state.tasks.map(task => {
          return task.title === taskTitle ? { id: task.id, title: taskTitle, status } : task
        })
      })
    })
  })
)

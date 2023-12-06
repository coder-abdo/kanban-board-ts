import type { FC } from 'react'
import { clsx } from 'clsx'
import { Task } from "@/components/task"
import { Status } from "@/types"
import { useTasks } from "@/hooks/useTasks"

type Props = {
  state: Status
}
export const Column: FC<Props> = ({ state }) => {
  const { filteredTasks, handleDragStart, handleDragLeave, handleDragOver, handleDrop, handleDeleteTask } = useTasks(state)
  return (
    <div
      className="min-w-[250px] p-2 rounded min-h-[200px] bg-slate-50 border border-gray-500 dark:bg-gray-200 dark:border-gray-200"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <h2
        className={clsx("text-xl capitalize mb-2", state === "doing" && "text-teal-600", state === "todo" && "text-yellow-400", state === "done" && "text-green-500")}
      >{state}
        <span className='ml-2 badge badge-accent'>{filteredTasks.length} todo</span>
      </h2>
      <div className="flex flex-col gap-2">
        {
          filteredTasks.length > 0 ? filteredTasks.map(task => <Task
            key={task.id}
            taskTitle={task.title}
            onDraggingStar={() => handleDragStart(task.title)}
            deleteTask={() => handleDeleteTask(task.id)}

          />) : <h2>no taks yet</h2>
        }
      </div>

    </div >
  )
}

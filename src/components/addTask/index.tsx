import clsx from "clsx"
import { useTaskModal } from "@/hooks/useTaskModal"
export const AddModal = () => {
  const { handleChange, taskTitle, handleSubmit, isOpen, closeModal } = useTaskModal()
  return (
    <dialog className={clsx("modal", isOpen && "modal-open", "modal-middle")}>
      <div className="modal-box">
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg capitalize mb-2">add task:</h3>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={taskTitle}
            onChange={handleChange}
            placeholder="Add Task"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn">Add Task</button>
        </form>
      </div>
    </dialog>
  )
}

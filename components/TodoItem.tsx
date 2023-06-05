"use client"

type TodoItemProps = {
    id: string
    title: string
    done: boolean
    toggleTodo: (id: string, done: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoItem({ id, title, done, toggleTodo, deleteTodo }: TodoItemProps) {
    return (
        <>
            <li className="flex gap-1 items-center">
                <input
                    id={id}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={done}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <label
                    htmlFor={id}
                    className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
                >
                    {title}
                </label>
                <label>
                    {/* delete icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer peer-checked:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => deleteTodo(id)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </label>
            </li>
        </>
    )
}
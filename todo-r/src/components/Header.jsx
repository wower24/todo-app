export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    const isTasksPlural = todosLength != 1

    return (
        <header>
            <h1 className="text-gradient">
                You have {todosLength} {isTasksPlural ? 'tasks' : 'task'} left.
            </h1>
        </header>
    )
}
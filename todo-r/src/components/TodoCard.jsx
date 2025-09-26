export function TodoCard(props) {
    const { onDeleteClick, onDoneClick, todo, todoIndex } = props

    return (
        <div className="card todo-item">
            <p> { todo.input } </p>
            <div className="todo-buttons">
                <button 
                disabled={todo.completed}
                onClick={()=>{
                    onDoneClick(todoIndex)
                }}>
                    <h6>Done</h6>
                </button>
                <button onClick={()=>{
                    onDeleteClick(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}
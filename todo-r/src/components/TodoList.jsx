import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { selectedTab, onDeleteClick, onDoneClick, todos } = props;
    const filteredTodos = selectedTab === 'All' ? todos
        : selectedTab === 'Active' ? todos.filter(todo => !todo.completed)
        : todos.filter(todo => todo.completed)

    return (
        <>
            {
                filteredTodos.map((todo, todoIndex) => {
                    return (
                        <TodoCard 
                        key={todoIndex} 
                        todoIndex={todos.findIndex(val => val.input === todo.input)}
                        {...props}
                        todo={todo}
                        />
                    )
                })
            }
        </>
    )
}
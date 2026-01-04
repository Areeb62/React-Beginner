import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider
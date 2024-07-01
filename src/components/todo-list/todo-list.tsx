import { component$, useStore } from "@builder.io/qwik";

export const TodoList = component$(() => {
    const todos = useStore([
        { title: 'Learn Qwik', isDone: true },
        { title: 'Build a Qwik app', isDone: false },
        { title: 'Deploy the app', isDone: false },
    ]);
    return (
        <div>
            <h2>TODO List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <strong>{todo.title}</strong> : {JSON.stringify(todo.isDone)}
                    </li>
                ))}
            </ul>
        </div>
    );
});
import { component$ } from "@builder.io/qwik";

interface TodoItemProps {
    title: string;
    isDone: boolean;
}

export const TodoItem = component$<{todo: TodoItemProps}>((props) => {
    return (
            <span>
                <strong>{props.todo.title}</strong> : {props.todo.isDone ? 'Done' : 'Not Done'}
            </span>
    );
});
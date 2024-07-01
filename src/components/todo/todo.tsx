import { component$, useComputed$, useSignal } from "@builder.io/qwik";

export const Todo = component$(() => {
    const title = 'Learn Qwik';
    const isDone = useSignal(true);
    const classDone = useComputed$(() => {
        return isDone.value ? { text: 'Done', id: 'done' } : { text: 'Not done', id: 'not-done' };
      });
    return (
        <div>
            <strong>{title} : {JSON.stringify(isDone.value)}</strong><br />
            <input type="checkbox" bind:checked={isDone} />
            <input type="checkbox" 
            checked={isDone.value} 
            onClick$={() => isDone.value = !isDone.value} />
            <p>
            {isDone.value ? <span class="done">Done</span> : <span class="notdone">Not Done</span>}
            </p>
            <p>
            <span class={classDone.value.id}>{classDone.value.text}</span>
            </p>
        </div>
    );
});
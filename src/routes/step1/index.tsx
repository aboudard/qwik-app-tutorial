import { component$, useStore } from '@builder.io/qwik';
import { TodoItem } from '~/components/todo-item/todo-item';
 
export default component$(() => {
    const todos = useStore([
        { title: 'Learn Qwik', isDone: true },
        { title: 'Build a Qwik app', isDone: false },
        { title: 'Deploy the app', isDone: false },
    ]);
  return (
  <section>
    <h2>Step 1 - props</h2>
    <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
  </section>
  );
});
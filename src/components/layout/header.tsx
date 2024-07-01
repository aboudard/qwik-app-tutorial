import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
    return (
        <header>
        <h1>Qwik</h1>
        <nav>
            <a href="/">Home</a>&nbsp;-&nbsp;
            <a href="/step1">Step 1</a>
        </nav>
        </header>
    );
    });
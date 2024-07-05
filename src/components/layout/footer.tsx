import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
    return (
        <footer>
            <p>
                <a href="">About</a>&nbsp;-&nbsp;
                <a href="">Contact</a>
            </p>
        </footer>
    );
});
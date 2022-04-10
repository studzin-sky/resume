import { Education } from "./boxes/Education";
import { Experience } from "./boxes/Experience";
import { Component } from "../../../styled/styled";
import { Skills } from "./boxes/Skills";

export const Prompter = () => {
    return (
        <Component>
            <Education />
            <Skills />
            <Experience />
        </Component>
    )
}
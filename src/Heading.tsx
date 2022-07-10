import React from "react";

type HeadingProps = {lang?: string}

export function Heading({lang = "Typescript"}: HeadingProps) {
    return <h1>React Testing Library using {lang}</h1>
}
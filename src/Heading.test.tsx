import { render, screen } from '@testing-library/react';
import {Heading} from "./Heading";

test('default heading language is Typescript', () => {
    render(<Heading />);
    const headingElement = screen.getByText(`React Testing Library using Typescript`)
    expect(headingElement).toBeInTheDocument();
})

test('renders page heading with language as prop', () => {
    const lang = 'Javascript'
    render(<Heading lang={lang}/>);
    const headingElement = screen.getByText(`React Testing Library using ${lang}`)
    expect(headingElement).toBeInTheDocument();
})
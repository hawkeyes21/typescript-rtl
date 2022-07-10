import { render, screen } from '@testing-library/react';
import {Heading} from "./Heading";

test('renders page heading', () => {
    render(<Heading />);
    const headingElement = screen.getByText(/React Testing Library using Typescript/i)
    expect(headingElement).toBeInTheDocument();
})
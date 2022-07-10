import React from 'react';
import { render } from '@testing-library/react';
import {Heading} from "./Heading";

test('heading component is rendered', () => {
  expect(render(<Heading />)).toBeDefined();
})
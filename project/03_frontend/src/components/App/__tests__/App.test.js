// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import App from '../App';


test('renders App with React + Django', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/App with React \+ Django/i);
    expect(headerElement).toBeInTheDocument();
});

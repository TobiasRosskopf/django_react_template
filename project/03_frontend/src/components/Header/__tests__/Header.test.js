// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import Header from '../Header';


test('renders App with React + Django', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText(/App with React \+ Django/i);
    expect(headerElement).toBeInTheDocument();
});

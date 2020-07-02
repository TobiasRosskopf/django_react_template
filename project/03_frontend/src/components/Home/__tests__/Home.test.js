// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import Home from '../Home';


test('renders keine Eintraege', () => {
    const { getByText } = render(<Home />);
    const listElement = getByText(/keine Einträge/i);
    expect(listElement).toBeInTheDocument();
});

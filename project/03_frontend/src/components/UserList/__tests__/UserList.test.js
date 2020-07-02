// Import modules
import React from 'react';
import { render } from '@testing-library/react';

// Import components
import UserList from '../UserList';


test('renders keine Eintraege', () => {
    const { getByText } = render(<UserList />);
    const listElement = getByText(/keine Einträge/i);
    expect(listElement).toBeInTheDocument();
});


test('renders Benutzer', () => {
    const { getByText } = render(<UserList />);
    const listElement = getByText(/Benutzer/i);
    expect(listElement).toBeInTheDocument();
});

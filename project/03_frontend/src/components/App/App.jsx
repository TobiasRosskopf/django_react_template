// Import modules
import React from 'react';

// Import styles
import './App.scss';

// Import components
import { Container } from 'reactstrap';
import Header from 'components/Header';
import Home from 'components/Home';


// Create App component
function App() {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Header />
            <Home />
        </Container>
    );
}

export default App;

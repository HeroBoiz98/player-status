const express = require('express');
const app = express();

// Store the button press status
let player1Pressed = false;
let player2Pressed = false;

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint for player 1 button press
app.get('/player1', (req, res) => {
    player1Pressed = true;
    player2Pressed = false;
    res.send('Player 1 has pressed');
});

// Endpoint for player 2 button press
app.get('/player2', (req, res) => {
    player1Pressed = false;
    player2Pressed = true;
    res.send('Player 2 has pressed');
});

// Endpoint to check which player has pressed
app.get('/status', (req, res) => {
    let status = '';
    if (player1Pressed) {
        status = 'Player 1 has pressed';
    } else if (player2Pressed) {
        status = 'Player 2 has pressed';
    } else {
        status = 'No player has pressed';
    }
    res.send(status);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

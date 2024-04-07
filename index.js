const express = require('express');
const app = express();

// Store the playing status
let player1Playing = false;
let player2Playing = false;
let player3Playing = false; // New player

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint for player 1 playing
app.get('/player1', (req, res) => {
    player1Playing = true;
    if (player2Playing || player3Playing) { // Check if other players are playing
        res.send('Player 1 and others playing together');
    } else {
        res.send('Player 1 playing');
    }
});

// Endpoint for player 2 playing
app.get('/player2', (req, res) => {
    player2Playing = true;
    if (player1Playing || player3Playing) { // Check if other players are playing
        res.send('Player 2 and others playing together');
    } else {
        res.send('Player 2 playing');
    }
});

// Endpoint for player 3 playing
app.get('/player3', (req, res) => {
    player3Playing = true;
    if (player1Playing || player2Playing) { // Check if other players are playing
        res.send('Player 3 and others playing together');
    } else {
        res.send('Player 3 playing');
    }
});

// Endpoint to reset the status
app.get('/reset', (req, res) => {
    player1Playing = false;
    player2Playing = false;
    player3Playing = false;
    res.send('No one playing');
});

// Endpoint to check who is playing
app.get('/status', (req, res) => {
    let status = '';
    if (player1Playing && player2Playing && player3Playing) {
        status = 'All players playing together';
    } else if (player1Playing && player2Playing) {
        status = 'Player 1 and Player 2 playing together';
    } else if (player1Playing && player3Playing) {
        status = 'Player 1 and Player 3 playing together';
    } else if (player2Playing && player3Playing) {
        status = 'Player 2 and Player 3 playing together';
    } else if (player1Playing) {
        status = 'Player 1 playing';
    } else if (player2Playing) {
        status = 'Player 2 playing';
    } else if (player3Playing) {
        status = 'Player 3 playing';
    } else {
        status = 'No one playing';
    }
    res.send(status);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

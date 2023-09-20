const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define a route handler for the root URL ("/") to serve the 'index.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Send the HTML file
});

// Define your dynamic endpoint and use a separate function
app.get('/api/your_endpoint', (req, res) => {
    // Handle the request and generate a JSON response based on the argument
    const argument = req.query.argument; // Get the argument from the query parameters

    // Use a separate function to process the argument and generate a JSON response
    const jsonResponse = generateResponse(argument);

    res.json(jsonResponse);
});

// Your separate function
function generateResponse(argument) {
    let response;
    switch (argument) {
        case 'value1':
            response = "Knock, knock. Who's there? It's the server!";
            break;
        case 'value2':
            response = "Why did the server go to therapy? It had too many requests!";
            break;
        default:
            response = "I'm just a server, but I love a good argument!";
    }

    return { result: response };
}


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

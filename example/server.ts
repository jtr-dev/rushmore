const express = require('express'),
    app = express()

    
    require('./route')(app) // initialize API routes
    require('./client')

const server = app.listen(process.env.port || 3000, () => {
    console.log('Listening on port %s...', server.address().port);
});
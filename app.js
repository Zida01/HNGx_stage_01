const express = require('express');
const router = require('./routes/route');


const app = express();

app.use(router)


// app.get('/', (req, res) => {
//     res.send(welcome)
//     console.log("hello");

// })


app.listen(3000, (req, res) => {
    console.log('  APP IS STARTED 👱‍♀️')
})
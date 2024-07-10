// const express = require("express")

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Server is ready");
});

// get a list of five jokes 
app.get('/api/jokes',(req, res)=>{
      const jokes = [
        {
            id:1,
            tittle:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            tittle:'Two joke',
            content:'This is Two joke'
        },
        {
            id:3,
            tittle:'Three joke',
            content:'This is Three joke'
        },

        {
            id:4,
            tittle:'Four joke',
            content:'This is Four joke'
        },
        {
            id:5,
            tittle:'Five joke',
            content:'This is Five joke'
        }
      ];

      res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})

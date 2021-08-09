const express = require('express');
const pool = require('../db/connection');
const router = express.Router();


//Get all records
router.get('/', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from chef', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})



//Get a record by ID
router.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err


        connection.query('SELECT * from chef WHERE chefID = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

//Delete a records
router.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err


        connection.query('DELETE from chef WHERE chefID = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Chef with the  ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})



// Add a record 
router.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        const params = req.body

        connection.query('INSERT INTO chef SET ?', params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Chef with the name: ${params.ChefID} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


module.exports =  router;
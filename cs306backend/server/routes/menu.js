const express = require('express');
const pool = require('../db/connection');
const router = express.Router();

//Get all records
router.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from menu', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
                console.log(rows)
            } else {
                console.log(err)
            }

        })
    })
})


// Get a record by ID
router.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from menu WHERE MenuID = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records
router.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        var sql = 'DELETE from customer WHERE MenuID = ?'

        connection.query(sql, [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Menu with the  ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

//Add a record 
router.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        const params = req.body;
        var sql = 'INSERT INTO menu SET ?';
       
        connection.query(sql, params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Menu with the name: ${req.body.MenuName} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    });
});


module.exports =  router;
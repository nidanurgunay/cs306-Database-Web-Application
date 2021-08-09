const express = require('express');
const pool = require('../db/connection');
const router = express.Router();

//Get all records
router.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from makes', (err, rows) => {
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

        connection.query('SELECT * from makes WHERE ssn = ?', [req.params.id], (err, rows) => {
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

        connection.query('DELETE from makes WHERE ssn = ? ', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Food with the  ID: ${[req.params.id]} has been removed.`)
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
        var sql = 'INSERT INTO makes SET ?';
       
        connection.query(sql, params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Food with the name: ${req.body.ssn} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    });
});


module.exports =  router;
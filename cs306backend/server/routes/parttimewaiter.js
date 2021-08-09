const express = require('express');
const pool = require('../db/connection');
const router = express.Router();

//Get all records
router.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from part_time_waiter', (err, rows) => {
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

        connection.query('SELECT * from part_time_waiter WHERE PartID = ?', [req.params.id], (err, rows) => {
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

        connection.query('DELETE from part_time_waiter WHERE PartID = ? ', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Table with the  ID: ${[req.params.id]} has been removed.`)
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
        var sql = 'INSERT INTO part_time_waiter SET ?';
       
        connection.query(sql, params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Table with the id: ${req.body.TableID} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    });
});


module.exports =  router;
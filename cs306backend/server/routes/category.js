const express = require('express');
const pool = require('../db/connection');
const router = express.Router();

//Get all records
router.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from category', (err, rows) => {
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

        connection.query('SELECT * from category WHERE FoodID = ?', [req.params.id], (err, rows) => {
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
        var sql = 'DELETE category FROM includes INNER JOIN category WHERE category.CategoryID = includes.CategoryID'
        var sql1 = 'DELETE category FROM has INNER JOIN category WHERE category.CategoryID = has.CategoryID'
        var check= false;

        connection.query(sql, [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
               check = true;
            } else {
                console.log(err)
            }

        })
        connection.query(sql1, [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                if(check === true)
                res.send(`Category with the  ID: ${[req.params.id]} has been removed.`)
                else
                res.send("error")

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
        var sql = 'INSERT INTO category SET ?';
       
        connection.query(sql, params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Category with the name: ${req.body.CategoryName} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    });
});


module.exports =  router;
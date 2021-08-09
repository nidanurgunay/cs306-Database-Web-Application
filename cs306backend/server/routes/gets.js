const express = require('express');
const pool = require('../db/connection');
const router = express.Router();

//Get all records
router.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from gets', (err, rows) => {
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


router.get('/:cid/:tid/:iid', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from gets WHERE (CustomerID,TableID,InvoiceID) = (?,?,?)', [req.params.cid, req.params.tid, req.params.iid], (err, rows) => {
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
router.delete('/:cid/:tid/:iid', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('DELETE from gets WHERE CustomerID = ?', [req.params.cid, req.params.tid, req.params.iid], (err, rows) => {
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
        var sql = 'INSERT INTO gets SET ?';
       
        connection.query(sql, params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Food with the name: ${req.body.InvoiceID} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    });
});


module.exports =  router;
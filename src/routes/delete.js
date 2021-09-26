const express = require('express')
const app = express()
const conn = require('../config/data_base')

const deleteID = app.delete('/dqcmodel/:id', function (req, res) {
    const id = req.params.id;
    console.log(id)
    conn.query(
        `DELETE FROM dqcmodel WHERE ID = ${id}`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const deleteDQC84ID = app.delete('/dqc84/:id', function (req, res) {
    const id = req.params.id;
    console.log(id)
    conn.query(
        `DELETE FROM dqc84 WHERE ID = ${id}`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const deleteDQC841ID = app.delete('/dqc841/:id', function (req, res) {
    const id = req.params.id;
    console.log(id)
    conn.query(
        `DELETE FROM dqc841 WHERE ID = ${id}`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

module.exports = { 
    deleteID: deleteID,
    deleteDQC84ID: deleteDQC84ID,
    deleteDQC841ID: deleteDQC841ID,
};

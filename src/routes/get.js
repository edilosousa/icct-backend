const express = require('express')
const app = express()
const conn = require('../config/data_base')



const get = app.get('/dqcmodel', function (req, res) {
    conn.query(
        'SELECT * FROM dqcmodel',
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const getID = app.get('/dqcmodel/:id', function (req, res) {
    conn.query(
        `SELECT * FROM dqcmodel WHERE ID = ${req.params.id}`,
        function (err, results, fields) {
            console.log(results[0]);
            res.send(results[0])
        }
    );
});

const getDQC84 = app.get('/dqc84', function (req, res) {
    conn.query(
        'SELECT dqc84.ID id_dqc84, dqc84.MODEL id_model_dqc84,dqc84.FAT_PART_NO,dqc84.TOTAL_LOCATION,dqc84.CREATE_DT,dqc84.UPDATE_DT,dqcmodel.model desc_model  FROM dqc84 INNER JOIN dqcmodel on dqcmodel.ID = dqc84.MODEL',
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const getDQC84ID = app.get('/dqc84/:id', function (req, res) {
    conn.query(
        `SELECT dqc84.ID id_dqc84, dqc84.MODEL id_model_dqc84,dqc84.FAT_PART_NO,dqc84.TOTAL_LOCATION,dqc84.CREATE_DT,dqc84.UPDATE_DT  FROM dqc84 WHERE ID = ${req.params.id}`,
        function (err, results, fields) {
            console.log(results[0]);
            res.send(results[0])
        }
    );
});

const getDC841 = app.get('/dqc841', function (req, res) {
    conn.query(
        'SELECT *,dqc841.ID iddcq841, dqc84.ID iddcq84, dqc84.fat_part_no fatpart FROM dqc841 INNER JOIN dqc84 on dqc84.ID = dqc841.FAT_PART_NO',
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const getDQC841ID = app.get('/dqc841/:id', function (req, res) {
    conn.query(
        `SELECT * FROM dqc841 WHERE ID = ${req.params.id}`,
        function (err, results, fields) {
            console.log(results[0]);
            res.send(results[0])
        }
    );
});


module.exports = { 
    get: get,
    getID: getID,
    getDQC84: getDQC84,
    getDQC84ID: getDQC84ID,
    getDC841: getDC841,
    getDQC841ID: getDQC841ID,
};
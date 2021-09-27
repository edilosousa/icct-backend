const express = require('express')
const app = express()
const conn = require('../config/data_base')
var fs = require('fs');


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

const getDqcModelExcel = app.get('/dqcmodelexcel', function (req, res) {
    conn.query(
        'SELECT * FROM dqcmodel',
        function (err, results, fields) {
            var writeStream = fs.createWriteStream("dqcmodel.xls");
            var header = "ID" + "\t" + " MODEL" + "\n";
            writeStream.write(header);
            for(var i = 0; i < results.length; ++i) {
                var row1 = results[i].ID + "\t" + results[i].MODEL + "\n";
                writeStream.write(row1);
            }
            writeStream.close();

            res.send({'status':1});
        }
    );
});

const getDqc84Excel = app.get('/dqc84excel', function (req, res) {
    conn.query(
        'SELECT * FROM dqc84',
        function (err, results, fields) {
            var writeStream = fs.createWriteStream("dqc84.xls");
            var header = "FAT_PART_NO" + "\t" + " TOTAL_LOCATION" + "\n";
            writeStream.write(header);
            for(var i = 0; i < results.length; ++i) {
                var row1 = results[i].FAT_PART_NO + "\t" + results[i].TOTAL_LOCATION + "\n";
                writeStream.write(row1);
            }
            writeStream.close();

            res.send({'status':1});
        }
    );
});

const getDqc841Excel = app.get('/dqc841excel', function (req, res) {
    conn.query(
        'SELECT * FROM dqc841',
        function (err, results, fields) {
            var writeStream = fs.createWriteStream("dqc841.xls");
            var header = "PARTS_NO" + "\t" + " UNT_USG" + "\t" + " DESCRIPTION" + "\t" + " REF_DESIGNATOR" + "\n";
            writeStream.write(header);
            for(var i = 0; i < results.length; ++i) {
                var row1 = results[i].PARTS_NO + "\t" + results[i].UNT_USG + "\t" +results[i].DESCRIPTION + "\t" + results[i].REF_DESIGNATOR + "\n";
                writeStream.write(row1);
            }
            writeStream.close();

            res.send({'status':1});
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
    getDqcModelExcel: getDqcModelExcel
};
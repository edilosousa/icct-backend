const express = require('express')
const app = express()
const conn = require('../config/data_base')

const putID = app.put('/dqcmodel', function (req, res) {
    const id = req.body.id;
    const model = req.body.model;

    console.log(id+" - "+model)
    conn.query(
        `UPDATE dqcmodel SET MODEL = '${model}'  WHERE ID = ${id}`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const putDQC84 = app.put('/dqc84', function (req, res) {
    const id = req.body.id;
    const model = req.body.model;
    const fat_part_no = req.body.fat_part_no;
    const total_location = req.body.total_location;

    console.log(id+" - "+model)
    conn.query(
        `UPDATE dqc84 SET MODEL = '${model}', FAT_PART_NO = '${fat_part_no}', TOTAL_LOCATION = ${total_location}, UPDATE_DT = NOW() WHERE ID = ${id}`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const putDQC841 = app.put('/dqc841', function (req, res) {
    const id = req.body.id;
    const fat_part_no = req.body.fat_part_no;
    const parts_no = req.body.parts_no;
    const unt_usg = req.body.unt_usg;
    const description = req.body.description;
    const ref_designator = req.body.ref_designator;

    conn.query(
        `UPDATE dqc841 SET FAT_PART_NO = ${fat_part_no}, PARTS_NO = '${parts_no}', UNT_USG = ${unt_usg}, DESCRIPTION = '${description}', REF_DESIGNATOR = '${ref_designator}', UPDATE_DT = NOW() WHERE ID = ${id}`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
            console.log(err);
        }
    );
});

module.exports = { 
    putID: putID,
    putDQC84: putDQC84,
    putDQC841: putDQC841
};
const express = require('express')
const app = express()
const conn = require('../config/data_base')


const postID = app.post('/dqcmodel', function (req, res) {
    const model = req.body.modelo;
    
    conn.query(
        `INSERT INTO dqcmodel (MODEL) VALUES ('${model}')`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const postDqc84 = app.post('/dqc84', function (req, res) {
    const fat_part_no = req.body.fat_part_no;
    const model = req.body.modelo;
    const total_location = req.body.total_location;

    console.log(fat_part_no+" - "+model+" - "+total_location)
    conn.query(
        `INSERT INTO dqc84 (FAT_PART_NO,MODEL,TOTAL_LOCATION,CREATE_DT,UPDATE_DT) VALUES ('${fat_part_no}',${model},${total_location}, NOW(), NOW())`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
        }
    );
});

const postDqc841 = app.post('/dqc841', function (req, res) {
    const fat_part_no = req.body.fat_part_no;
    const parts_no = req.body.parts_no;
    const unt_sg = req.body.unt_sg;
    const description = req.body.description;
    const ref_designator = req.body.ref_designator;

    console.log(fat_part_no)
    conn.query(
        `INSERT INTO dqc841 (FAT_PART_NO, PARTS_NO, UNT_USG, DESCRIPTION, REF_DESIGNATOR, CREATE_DT, UPDATE_DT) VALUES (${fat_part_no},'${parts_no}','${unt_sg}','${description}','${ref_designator}', NOW(), NOW())`,
        function (err, results, fields) {
            console.log(results);
            res.send(results)
            console.log(err)
        }
    );
});

module.exports = { 
    postID: postID,
    postDqc84: postDqc84,
    postDqc841:postDqc841
};
const fs = require("fs");
const pool = require("../config.js")
const seedingQuery = fs.readFileSync("./seeding.sql", "utf-8");
console.log(seedingQuery);
pool.query(seedingQuery, (err, result) =>{
    if (err) throw err 

    console.log("seeding successfully" )
    pool.end()
}) 
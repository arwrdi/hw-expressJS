const pool = require("./config.js");
const express = require ('express');
const router = express.Router()
// console.log(pool) 

router.get("/film", (req, res)=>{
    const query =
    `SELECT * FROM film`

    pool.query (query, (err, response) =>{
        if(err) throw err
        res.status(200).json(response.rows)
    })
})
router.get("/film/:id", (req, res)=>{
    const {id} = req.params;
    // console.log(id)
    const findQuery = `
    SELECT 
    *
    FROM film
        WHERE film_id = $1`

    pool.query(findQuery, [id], (err, response) =>{
        if (err) throw err
         res.status(200).json(response.rows)
    })
    
})

router.get("/category", (req, res) =>{
    const query = `
    SELECT * FROM category`

    pool.query (query, (err, response) =>{
        if(err) throw err
        res.status(200).json(response.rows)
    })
})
router.get("/category/film", (req, res) =>{
    const query = `
    SELECT 
        film.film_id AS film_id,
        film.title AS title,
        category.name AS category
    FROM film
        INNER JOIN film_category AS film_category
        ON film.film_id = film_category.film_id
        INNER JOIN category AS category
        on film.film_id = category.category_id`

    pool.query (query, (err, response) =>{
        if(err) throw err
        res.status(200).json(response.rows)
    })
})
module.exports =  router;
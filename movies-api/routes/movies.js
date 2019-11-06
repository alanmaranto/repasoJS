const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app){
    const router = express.Router();
    app.use("/api/movies", router);

    router.get('/', async (req,res, next) => {
        try{
            const getAllMovies = await Promise.resolve(moviesMock);

            res.status(200).json({
                data: getAllMovies,
                message: 'movies listed',
            })
        } catch(err) {
            next(err)
        }
    })

    router.get("/:movieId", async function (req, res, next) {
        try {
            const getMovie = await Promise.resolve(moviesMock[0]);

            res.status(200).json({
                data: getMovie,
                message: 'movie selected',
            })
        } catch(err) {
            next(err)
        }
    })

    router.post("/", async (req, res ,next) => {
        try {
            const createMovieId = await Promise.resolve(moviesMock[0].id)
            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            })
        } catch(err) {
            next(err)
        }
    })
}

module.exports = moviesApi;
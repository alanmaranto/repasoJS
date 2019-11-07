const express = require('express');
const MoviesService = require('../services/movies')

function moviesApi(app){
    const router = express.Router();
    app.use("/api/movies", router);

    const moviesService = new MoviesService()

    router.get('/', async (req,res, next) => {
        const { tags } = req.query
        try{
            const getAllMovies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: getAllMovies,
                message: 'movies listed',
            })
        } catch(err) {
            next(err)
        }
    })

    router.get("/:movieId", async function (req, res, next) {
        const { movieId } = req.params
        try {
            const getMovie = await moviesService.getMovie({ movieId });

            res.status(200).json({
                data: getMovie,
                message: 'movie selected',
            })
        } catch(err) {
            next(err)
        }
    })

    router.post("/", async (req, res ,next) => {
        const { body: movie } = req;
        try {
            const createMovieId = await moviesService.createMovie({ movie })
            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            })
        } catch(err) {
            next(err)
        }
    })

    router.put("/:movieId", async function(req, res ,next) {
        const { movieId } = req.params
        const { body: movie } = req;
        try {
            const updatedMovieId = await moviesService.updateMovie({
                movieId,
                movie
            })
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated',
            })
        } catch(err) {
            next(err)
        }
    })

    router.delete("/movieId", async function(req, res ,next) {
        const { movieId } = req.params
        try{
            const deletedMovieId = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        }catch(err){
            next
        }
    });
}

module.exports = moviesApi;
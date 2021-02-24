const express = require("express");
const router = express.Router();

const { Song } = require("../../db/models");

const asyncHandler = require("express-async-handler");

//'./api/songs'

//get all songs
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
  })
);

//creating a song
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newSong = await Song.create(req.body);
    return res.redirect(`/home`);
  })
);

//updating a song
router.put(
  "/",
  asyncHandler(async (req, res) => {
    const id = await Song.update(req.body);
    const song = await Song.one(id);
    return res.json(song);
  })
);

//get one song
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const song = await Song.one(req.params.id); //telling me that one is not a function.
    return res.json(song);
  })
);

module.exports = router;

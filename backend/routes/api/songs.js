const express = require("express");
const router = express.Router();

const { Song } = require("../../db/models");
const { User } = require("../../db/models");

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
    res.json(newSong);
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
    const songId = parseInt(req.params.id);
    const songs = await Song.findAll({
      where: {
        id: songId,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    const singleSong = songs.map((song) => {
      return {
        songId: song.id,
        Artist: song.userId,
        Title: song.title,
        audiofile: song.audiofile,
      };
    });

    res.json(singleSong);
  })
);

module.exports = router;

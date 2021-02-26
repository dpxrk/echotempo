const express = require("express");
const router = express.Router();

const { Song } = require("../../db/models");
const { User } = require("../../db/models");
const { Comment } = require("../../db/models");

const asyncHandler = require("express-async-handler");

//'./api/songs'

//get all songs
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll({ include: { model: User } });
    return res.json(songs);
  })
);

//creating a song
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, title, audiofile } = req.body;
    const newSong = await Song.create({
      userId,
      title,
      audiofile,
    });
    res.json({ newSong });
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

//get one song with it's comments
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
          include: [
            {
              model: Comment,
            },
          ],
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

//posting a new comment on a song.
//userId, songId,content
router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const { userId, songId, content } = req.body;
    const newComment = await Comment.create({
      userId,
      songId,
      content,
    });
    res.json(newComment);
  })
);

module.exports = router;

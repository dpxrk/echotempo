const express = require("express");
const router = express.Router();

const { Song } = require("../../db/models");
const { User } = require("../../db/models");
const { Comment } = require("../../db/models");

const asyncHandler = require("express-async-handler");

//'./api/songs'

//get all songs based on Users Id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    // console.log("THIS IS USERID:", userId);
    const songList = await Song.findAll({
      where: {
        userId,
      },
      include: [{ model: User }],
    });
    const song = songList.map((song) => {
      // console.log("THIS iS SONG:", song);
      return {
        id: song.id,
        artist: song.Users[0].username,
        Title: song.title,
        audiofile: song.audiofile,
      };
    });

    // console.log("THIS iS SONG2:", song);
    return res.json(song);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const song = await Song.findAll({ include: { model: User } });
    const songList = song.map((song) => {
      // console.log("THIS IS WHAT SONG LOOKS LIKE", song);
      return {
        id: song.id,
        artist: song.Users[0].username,
        Title: song.title,
        audiofile: song.audiofile,
      };
    });

    // console.log("this is the songLIST", songList);
    return res.json(songList);
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

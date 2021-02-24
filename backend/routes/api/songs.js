const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

import { Songs } from "../../db/models/songs";

router.get(
  "/songs",
  asyncHandler(async (req, res) => {
    const songs = await Songs.list();
    console.log("THIS IS THE SONGS LIST:", songs);
    return res.json(song);
  })
);

router.post(
  "/home",
  asyncHandler(async (req, res) => {
    const newSong = await Songs.create(req.body);
    return res.redirect(`/home/user/${id}`);
  })
);

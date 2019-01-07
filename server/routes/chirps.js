const express = require("express");
const chirpsStore = require("../chirpstore");

let router = express.Router();

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpsStore.GetChirp(id));
  } else {
    res.send(chirpsStore.GetChirps());
  }
}); //get chirp by id else get chirps

router.post("/", (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
}); //create chirp

router.put("/", (req, res) => {
  chirpsStore.UpdateChirp(req.body);
  res.sendStatus(200);
}); //update chirp

router.delete("/", (req, res) => {
  chirpsStore.DeleteChirp(req.body);
  res.sendStatus(200);
}); //delete chirp

module.exports = router;

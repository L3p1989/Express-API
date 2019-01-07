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
  res.status(200).send("Chirp created!");
}); //create chirp

router.put("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.UpdateChirp(id, req.body);
  res.status(200).send(`Chirp #${id} edited`);
}); //update chirp

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.DeleteChirp(id, req.body);
  res.status(200).send(`Chirp #${id} deleted`);
}); //delete chirp

module.exports = router;

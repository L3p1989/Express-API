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
  res.status(200).send(chirpsStore.GetChirps());
}); //create chirp

router.put("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.UpdateChirp(id, req.body);
  res.status(200).send(chirpsStore.GetChirps());
}); //update chirp

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.DeleteChirp(id, req.body);
  res.status(200).send(chirpsStore.GetChirps());
}); //delete chirp

module.exports = router;

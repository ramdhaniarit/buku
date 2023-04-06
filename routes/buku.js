const express = require("express");
const router = express.Router();
const bukuController = require("../controller/bukucontroller.js")

router.get("/", bukuController.listbuku);
router.post("/buku", bukuController.create);
router.delete("/buku/:id", bukuController.destroy);

module.exports = router;

const express = require("express");
const router = express.Router();
const bukuRouter = require("./buku.js")

router.use("/buku", bukuRouter);

module.exports = router;
const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/cityController");

router.get("/city", list);
router.get("/city/:id", show);
router.post('/city', create);

module.exports = router;
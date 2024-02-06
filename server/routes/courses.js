const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send([
    { id: 1, title: "React" },
    { id: 2, title: "NextJS" },
    { id: 3, title: "Docker" },
  ]);
});

module.exports = router;

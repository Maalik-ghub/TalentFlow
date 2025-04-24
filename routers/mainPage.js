const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.render("mainPage", {
        title: "TalentFlow",
        styleFile: "mainPageStyle.css",
        scriptFile: "mainPageScript.js"
    });
})

module.exports = router;
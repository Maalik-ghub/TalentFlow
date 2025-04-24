const express = require("express");
const router = express.Router();

router.get("/about", (req, res)=> {
    res.render("aboutUs", {
        title: "TalentFlow",
        styleFile: "aboutUsStyle.css",
        scriptFile: "aboutUsScript.js"
    });
})

module.exports = router;
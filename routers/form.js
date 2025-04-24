const express = require("express");
const router = express.Router();

router.get("/form", (req, res)=> {
    res.render("form", {
        title: "TalentFlow",
        styleFile: "formStyle.css",
        scriptFile: "formScript.js"
    });
})

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/care", (req, res)=> {
    res.render("careSolutions", {
        title: "TalentFlow",
        styleFile: "careSolutionsStyle.css",
        scriptFile: "careSolutionsScript.js"
    });
})

module.exports = router;
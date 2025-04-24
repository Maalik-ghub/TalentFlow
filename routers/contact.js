const express = require("express");
const router = express.Router();

router.get("/contact", (req, res)=> {
    res.render("contact", {
        title: "TalentFlow",
        styleFile: "contactStyle.css",
        scriptFile: "contactScript.js"
    });
})

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/staffing", (req, res)=> {
    res.render("staffingSolutions", {
        title: "TalentFlow",
        styleFile: "staffingSolutionsStyle.css",
        scriptFile: "staffingSolutionsScript.js"
    });
});

module.exports = router;
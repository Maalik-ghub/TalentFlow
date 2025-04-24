const express = require("express");
const router = express.Router();

router.get("/business", (req, res)=> {
    res.render("businessEnquiry", {
        title: "TalentFlow",
        styleFile: "businessEnquiryStyle.css",
        scriptFile: "businessEnquiryScript.js"
    });
})

module.exports = router;
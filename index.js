const express = require("express");
const app = express();
port = 3000;
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const mainPageRouter = require("./routers/mainPage.js");
const aboutUsRouter = require("./routers/aboutUs.js");
const careSolutionsRouter = require("./routers/careSolutions.js");
const staffingSolutionsRouter = require("./routers/staffingSolutions.js");
const businessEnquiryRouter = require("./routers/businessEnquiry.js");
const contactRouter = require("./routers/contact.js");
const formRouter = require("./routers/form.js");
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "8a07bb002@smtp-brevo.com",
      pass: "JshUH7faTCL6ZGkz",
    },
});

app.set("view engine", "ejs")
app.set("views", "views");

app.post("/callme", (req, res) => {
    const { number } = req.body;
    res.status(200).send(number);
    transporter.sendMail({
        from: '"Call Back" <callback@talentflowltd.co.uk>', // sender address
        to: "nabeellatheef9@gmail.com", // list of receivers
        subject: "Call Back Request", // Subject line
        text: `Number: ${number}`, // plain text body
    })
})

app.post("/applyform", (req, res) => {
    const { nameData } = req.body;
    const { mobileData } = req.body;
    const { emailData } = req.body;
    const { locationData } = req.body;
    const { professionData } = req.body;
    const { experienceData } = req.body;
    const { cvURLData } = req.body;
    const { notesData } = req.body;
    res.status(200).send(nameData);
    transporter.sendMail({
        from: '"Job Application" <callback@talentflowltd.co.uk>', // sender address
        to: "nabeellatheef9@gmail.com", // list of receivers
        subject: `Job Application`, // Subject line
        html: `<p>Name: ${nameData}</p><br><p>Mobile: ${mobileData}</p><br><p>Email: ${emailData}</p><br><p>Location: ${locationData}</p><br><p>Profession: ${professionData}</p><br><p>Experience: ${experienceData}</p><br><p>CV: ${cvURLData}</p><br><p>Note: ${notesData}</p>` // plain text body
    })
});

app.post("/businessmail", (req, res) => {
    const { nameData } = req.body;
    const { mobileData } = req.body;
    const { emailData } = req.body;
    const { locationData } = req.body;
    const { serviceData } = req.body;
    const { notesData } = req.body;
    res.status(200).send(nameData);
    transporter.sendMail({
        from: '"Enquiry" <callback@talentflowltd.co.uk>', // sender address
        to: "nabeellatheef9@gmail.com", // list of receivers
        subject: `Business Enquiry - ${serviceData}`, // Subject line
        html: `<p>Name: ${nameData}</p><br><p>Mobile: ${mobileData}</p><br><p>Email: ${emailData}</p><br><p>Location: ${locationData}</p><br><p>Note: ${notesData}</p>` // plain text body
    })
});

app.post("/contact", (req, res) => {
    const { nameData } = req.body;
    const { emailData } = req.body;
    const { subjectData } = req.body;
    const { notesData } = req.body;
    res.status(200).send(nameData);
    transporter.sendMail({
        from: '"Contact" <callback@talentflowltd.co.uk>', // sender address
        to: "nabeellatheef9@gmail.com", // list of receivers
        subject: `${subjectData}`, // Subject line
        html: `<p>Name: ${nameData}</p><br><p>Email: ${emailData}</p><br><p>Note: ${notesData}</p>` // plain text body
    })
});

app.use(express.static("public"))
app.use("/", mainPageRouter);
app.use("/", aboutUsRouter);
app.use("/", careSolutionsRouter);
app.use("/", staffingSolutionsRouter);
app.use("/", businessEnquiryRouter);
app.use("/", contactRouter);
app.use("/", formRouter);


app.listen(3000, ()=> {
    console.log("running");
})
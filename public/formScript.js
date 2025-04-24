//fb x & insta 
const fb = document.querySelector(".v1-v1-h2-btn1");
const x = document.querySelector(".v1-v1-h2-btn2");
const insta = document.querySelector(".v1-v1-h2-btn3");

//navs
const nav1 = document.querySelector(".v1-v2-h2-nav1");
const nav2 = document.querySelector(".v1-v2-h2-nav2");
const nav3 = document.querySelector(".v1-v2-h2-nav3");
const nav4 = document.querySelector(".v1-v2-h2-nav4");
const nav5 = document.querySelector(".v1-v2-h2-nav5");
const nav6 = document.querySelector(".v1-v2-h2-nav6");

const v1absolute = document.querySelector(".v1-absolute");
const v1absolutenav1 = document.querySelector(".v1-absolute-nav1");
const v1absolutenav2 = document.querySelector(".v1-absolute-nav2");
const v1absolutenav3 = document.querySelector(".v1-absolute-nav3");
const v1absolutenav4 = document.querySelector(".v1-absolute-nav4");
const v1absolutenav5 = document.querySelector(".v1-absolute-nav5");
const v1absolutenav6 = document.querySelector(".v1-absolute-nav6");

const v3v1h2v2btn1 = document.querySelector(".v3-v1-h2-v2-btn1");
const v3v1h2v2btn2 = document.querySelector(".v3-v1-h2-v2-btn2");
const v3v1h2v2btn3 = document.querySelector(".v3-v1-h2-v2-btn3");
const v3v1h2v2btn4 = document.querySelector(".v3-v1-h2-v2-btn4");
const v3v1h2v2btn5 = document.querySelector(".v3-v1-h2-v2-btn5");
const v3v1h2v2btn6 = document.querySelector(".v3-v1-h2-v2-btn6");

const v3v1h2v3btn1 = document.querySelector(".v3-v1-h2-v3-btn1");
const v3v1h2v3btn2 = document.querySelector(".v3-v1-h2-v3-btn2");
const v3v1h2v3btn3 = document.querySelector(".v3-v1-h2-v3-btn3");

const v3v1h3v2inp1 = document.querySelector(".v3-v1-h3-v2-inp1");
const v3v1h3v3btn1 = document.querySelector(".v3-v1-h3-v3-btn1");

const nameInp = document.querySelector(".name")
const mobileInp = document.querySelector(".mobile")
const emailInp = document.querySelector(".email")
const locationInp = document.querySelector(".location")
const professionInp = document.querySelector(".profession");
const experienceInp = document.querySelector(".experience");
const notesInp = document.querySelector(".notes")
const submitBut = document.querySelector(".submit")
const cvURL = document.querySelector(".cvURL");


//fb x & insta redirect
fb.onclick = () => {
    document.location.href = "#facebook";
}
x.onclick = () => {
    document.location.href = "#x";
}
insta.onclick = () => {
    document.location.href = "#insta";
}


//navs redirect
nav1.addEventListener("click", ()=> {
    document.location.href = "/";
})
nav2.addEventListener("click", () => {
    document.location.href = "/about";
})
nav3.addEventListener("click", () => {
    document.location.href = "/care";
})
nav4.addEventListener("click", () => {
    document.location.href = "/staffing";
})
nav5.addEventListener("click", () => {
    document.location.href = "/business";
})

let touch = false;
nav6.addEventListener("touchstart", () => {
    touch = true;
    v1absolute.style.transform = "scaleX(1)";
    setTimeout(() => {
        touch = false;
    }, 500);
})

v1absolutenav1.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/";
})

v1absolutenav2.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/about";
})

v1absolutenav3.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/care";
})

v1absolutenav4.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/staffing";
})

v1absolutenav5.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/business";
})

v1absolutenav6.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/contact";
})

nav6.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/contact";
})


let methodType;
let url;
let fetchSubject;
let wrong;

///////////////////////////////////////////v3/////////////////////////////////

v3v1h2v2btn1.addEventListener("click", () => {
    document.location.href = "/"
})

v3v1h2v2btn2.addEventListener("click", () => {
    document.location.href = "/about"
})

v3v1h2v2btn3.addEventListener("click", () => {
    document.location.href = "/care"
})

v3v1h2v2btn4.addEventListener("click", () => {
    document.location.href = "/staffing"
})

v3v1h2v2btn5.addEventListener("click", () => {
    document.location.href = "/business"
})

v3v1h2v2btn6.addEventListener("click", () => {
    document.location.href = "/contact"
})

v3v1h2v3btn1.addEventListener("click", () => {
    document.location.href = "#facebook"
})

v3v1h2v3btn2.addEventListener("click", () => {
    document.location.href = "#x"
})

v3v1h2v3btn3.addEventListener("click", () => {
    document.location.href = "#insta"
})

submitBut.addEventListener("click", () => {
    if(nameInp.value.length < 3) {
       nameInp.value = null;
       nameInp.placeholder = "Name should contain more than 3 characters";
       submitBut.textContent = "Error - Name"
       nameInp.style.border = "2px solid crimson";
       submitBut.style.background = "crimson";
    } else {
        nameInp.style.border = "2px solid rgb(248, 207, 117)";
        if(isNaN(mobileInp.value) || mobileInp.value.length < 7 || mobileInp.value.length > 18) {
            mobileInp.value = null;
            mobileInp.placeholder = "Enter number with country code"
            submitBut.textContent = "Error - Mobile"
            mobileInp.style.border = "2px solid crimson";
            submitBut.style.background = "crimson";
        } else {
            mobileInp.style.border = "2px solid rgb(248, 207, 117)";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(emailInp.value)) {
                emailInp.style.border = "2px solid rgb(248, 207, 117)";
                if(locationInp.value.length < 6) {
                    locationInp.value = null;
                    locationInp.placeholder = "location should contain more than 6 characters";
                    submitBut.textContent = "Error - Location"
                    locationInp.style.border = "2px solid crimson";
                    submitBut.style.background = "crimson";
                 } else {
                    locationInp.style.border = "2px solid rgb(248, 207, 117)";
                        if(professionInp.value.length < 6) {
                            professionInp.value = null;
                            professionInp.placeholder = "profession should contain more than 6 characters";
                            submitBut.textContent = "Error - Profession"
                            professionInp.style.border = "2px solid crimson";
                            submitBut.style.background = "crimson";
                        } else {
                            if(experienceInp.value.length < 6) {
                                experienceInp.value = null;
                                experienceInp.placeholder = "Experience should contain more than 6 characters";
                                submitBut.textContent = "Error - Experience"
                                experienceInp.style.border = "2px solid crimson";
                                submitBut.style.background = "crimson";
                            } else {
                                experienceInp.style.border = "2px solid rgb(248, 207, 117)";
                                let urlRegex = /https?:\/\/ibb\.co\/[a-zA-Z0-9]+/;
                                if(urlRegex.test(cvURL.value)) {
                                    cvURL.style.border = "2px solid rgb(248, 207, 117)";
                                    if(notesInp.value.length < 20) {
                                        notesInp.value = null;
                                        notesInp.placeholder = "Note should contain more than 20 characters";
                                        submitBut.textContent = "Error - Notes"
                                        notesInp.style.border = "2px solid crimson";
                                        submitBut.style.background = "crimson";
                                     } else {
                                    notesInp.style.border = "2px solid rgb(248, 207, 117)";
                                    body = {
                                        nameData: nameInp.value,
                                        mobileData: mobileInp.value,
                                        emailData: emailInp.value,
                                        locationData: locationInp.value,
                                        professionData: professionInp.value,
                                        experienceData: experienceInp.value,
                                        cvURLData: cvURL.value,
                                        notesData: notesInp.value
                                    }
                                    requestUtils("POST", "/applyform", JSON.stringify(body))
                                    submitBut.textContent = "Sent!!"
                                    submitBut.style.background = "lightgreen";
                                    }
                                } else {
                                    cvURL.value = null;
                                    cvURL.placeholder = "Make sure the url is an imgbb url";
                                    submitBut.textContent = "Error - CV URL"
                                    cvURL.style.border = "2px solid crimson";
                                    submitBut.style.background = "crimson";
                                }
                            }
                        }
                     }
                 } else {
                emailInp.value = null;
                emailInp.placeholder = "Enter a valid email"; 
                submitBut.textContent = "Error - Email"
                emailInp.style.border = "2px solid crimson";
                submitBut.style.background = "crimson";
            }
        }
    }
})

v3v1h3v3btn1.addEventListener("click", () => {
    if(isNaN(v3v1h3v2inp1.value) || v3v1h3v2inp1.value.length < 7 || v3v1h3v2inp1.value > 18) {
        v3v1h3v2inp1.value = null;
        v3v1h3v2inp1.placeholder = "Unsent - Provide correct number";
    } else {
        body = {
            number: v3v1h3v2inp1.value
           }
        requestUtils("POST", "/apply", JSON.stringify(body))
        v3v1h3v2inp1.value = null;
        v3v1h3v2inp1.placeholder = "Successfully Sent";
    }
})

function requestUtils(methodType, url, fetchSubject) {
    fetch(url, {
        method: methodType,
        headers: {
          'Content-Type': 'application/json'
        },
        body: fetchSubject
      })
      .then(response => response.text())
      .catch(error => console.error('Error:', error));
}
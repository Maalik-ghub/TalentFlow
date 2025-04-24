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


//divs
const v1 = document.querySelector(".v1");

const v1absolute = document.querySelector(".v1-absolute");
const v1absolutenav1 = document.querySelector(".v1-absolute-nav1");
const v1absolutenav2 = document.querySelector(".v1-absolute-nav2");
const v1absolutenav3 = document.querySelector(".v1-absolute-nav3");
const v1absolutenav4 = document.querySelector(".v1-absolute-nav4");
const v1absolutenav5 = document.querySelector(".v1-absolute-nav5");
const v1absolutenav6 = document.querySelector(".v1-absolute-nav6");

const v1v3h1btn1 = document.querySelector(".v1-v3-h1-btn1");
const v1v3h2v1txt1 = document.querySelector(".v1-v3-h2-v1-txt1");
const v1v3h2v2txt1 = document.querySelector(".v1-v3-h2-v2-txt1");
const v1v3h2v2btn1 = document.querySelector(".v1-v3-h2-v2-btn1");
const v1v3h3btn1 = document.querySelector(".v1-v3-h3-btn1");
const v1v4btn1 = document.querySelector(".v1-v4-btn1");
const v1v4btn2 = document.querySelector(".v1-v4-btn2");
const v1v4btn3 = document.querySelector(".v1-v4-btn3");


const v2 = document.querySelector(".v2");
const v2h1v2v4btn1 = document.querySelector(".v2-h1-v2-v4-btn1");


const v3 = document.querySelector(".v3");
const v3h1btn1 = document.querySelector(".v3-h1-btn1");
const v3h2btn1 = document.querySelector(".v3-h2-btn1")


const v4 = document.querySelector(".v4");
const itmcaresolutionmiddlebtn1 = document.querySelectorAll(".itmcaresolutionmiddlebtn1");


const v5 = document.querySelector(".v5");
const v5v3h1txt1 = document.querySelector(".v5-v3-h1-txt1");
const v5v3h2txt1 = document.querySelector(".v5-v3-h2-txt1");


const v6 = document.querySelector(".v6");
const v6v3itm1v2btn1 = document.querySelector(".v6-v3-itm1-v2-btn1");
const v6v3itm2v2btn1 = document.querySelector(".v6-v3-itm2-v2-btn1");
const v6v3itm3v2btn1 = document.querySelector(".v6-v3-itm3-v2-btn1");


const v7 = document.querySelector(".v7");
const v7v1h2v2btn1 = document.querySelector(".v7-v1-h2-v2-btn1");
const v7v1h2v2btn2 = document.querySelector(".v7-v1-h2-v2-btn2");
const v7v1h2v2btn3 = document.querySelector(".v7-v1-h2-v2-btn3");
const v7v1h2v2btn4 = document.querySelector(".v7-v1-h2-v2-btn4");
const v7v1h2v2btn5 = document.querySelector(".v7-v1-h2-v2-btn5");
const v7v1h2v2btn6 = document.querySelector(".v7-v1-h2-v2-btn6");

const v7v1h2v3btn1 = document.querySelector(".v7-v1-h2-v3-btn1");
const v7v1h2v3btn2 = document.querySelector(".v7-v1-h2-v3-btn2");
const v7v1h2v3btn3 = document.querySelector(".v7-v1-h2-v3-btn3");

const v7v1h3 = document.querySelector(".v7-v1-h3");
const v7v1h3v2inp1 = document.querySelector(".v7-v1-h3-v2-inp1");
const v7v1h3v2inp1ph = document.querySelector(".v7-v1-h3-v2-inp1::placeholder");
const v7v1h3v3btn1 = document.querySelector(".v7-v1-h3-v3-btn1");

let firstV1 = {
    "text": "Quality Medical Care Delivered",
    "sub": "We bring quality medical care into our patient's homes and aim to make primary healthcare more accessible.",
    "image": "url('images/banners/qualitymed.jpg')"
}

let firstV2 = {
    "text": "A heritage in care, and reputation excellence Solutions",
    "sub": "Talentflow care solutions provide excellent services by prioritizing the safety and security of patients.",
    "image": "url('images/banners/heritage.jpg')"
}

let firstV3 = {
    "text": "Compassionate care for your loved one",
    "sub": "We are here to give you personalised information and advice to help you find and fund the care you deserve.",
    "image": "url('images/banners/compassionate.jpg')"
}



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



let i = -1;
let changebannerInterval;
let clickTimer = false;
function setChangeBannerInterval() {
    changebannerInterval = setInterval(()=> {
    if(i == 2) {
        v1.style.backgroundImage = firstV1.image;
        v1v3h2v1txt1.textContent = firstV1.text;
        v1v3h2v2txt1.textContent = firstV1.sub;
        v1v4btn1.style.background = "rgb(248, 207, 117)";
        v1v4btn3.style.background = "#1c1c1c";
        v1v4btn2.style.background = "#1c1c1c";
        i = -1;
    } else if(i == 0) {
        v1.style.backgroundImage = firstV2.image;
        v1v3h2v1txt1.textContent = firstV2.text;
        v1v3h2v2txt1.textContent = firstV2.sub;  
        v1v4btn2.style.background = "rgb(248, 207, 117)";
        v1v4btn1.style.background = "#1c1c1c";
        v1v4btn3.style.background = "#1c1c1c";
    } else if(i == 1) {
        v1.style.backgroundImage = firstV3.image;
        v1v3h2v1txt1.textContent = firstV3.text;
        v1v3h2v2txt1.textContent = firstV3.sub;
        v1v4btn3.style.background = "rgb(248, 207, 117)";
        v1v4btn2.style.background = "#1c1c1c";
        v1v4btn1.style.background = "#1c1c1c";
    }
    i++;
}, 8000)
}
setChangeBannerInterval();

v1v3h1btn1.addEventListener("click", () => {
    if(clickTimer == true) return;
    if(changebannerInterval) {
        clearInterval(changebannerInterval);
    }
    i--;
    if(i < 0) {
        i = 2;
    }
    if(i == 2) {
        v1.style.backgroundImage = firstV1.image;
        v1v3h2v1txt1.textContent = firstV1.text;
        v1v3h2v2txt1.textContent = firstV1.sub;
        v1v4btn1.style.background = "rgb(248, 207, 117)";
        v1v4btn3.style.background = "#1c1c1c";
        v1v4btn2.style.background = "#1c1c1c";
    } else if(i == 0) {
        v1.style.backgroundImage = firstV2.image;
        v1v3h2v1txt1.textContent = firstV2.text;
        v1v3h2v2txt1.textContent = firstV2.sub;  
        v1v4btn2.style.background = "rgb(248, 207, 117)";
        v1v4btn1.style.background = "#1c1c1c";
        v1v4btn3.style.background = "#1c1c1c";
    } else if(i == 1) {
        v1.style.backgroundImage = firstV3.image;
        v1v3h2v1txt1.textContent = firstV3.text;
        v1v3h2v2txt1.textContent = firstV3.sub;
        v1v4btn3.style.background = "rgb(248, 207, 117)";
        v1v4btn2.style.background = "#1c1c1c";
        v1v4btn1.style.background = "#1c1c1c";
    }
    clickTimer = true;
    setTimeout(()=> {
       clickTimer = false
    }, 1000)
    setChangeBannerInterval();
})

v1v3h3btn1.addEventListener("click", () => {
    if(clickTimer == true) return;
    if(changebannerInterval) {
        clearInterval(changebannerInterval);
    }
    i++;
    if(i > 2) {
        i = 0;
    }
    if(i == 2) {
        v1.style.backgroundImage = firstV1.image;
        v1v3h2v1txt1.textContent = firstV1.text;
        v1v3h2v2txt1.textContent = firstV1.sub;
        v1v4btn1.style.background = "rgb(248, 207, 117)";
        v1v4btn3.style.background = "#1c1c1c";
        v1v4btn2.style.background = "#1c1c1c";
    } else if(i == 0) {
        v1.style.backgroundImage = firstV2.image;
        v1v3h2v1txt1.textContent = firstV2.text;
        v1v3h2v2txt1.textContent = firstV2.sub;  
        v1v4btn2.style.background = "rgb(248, 207, 117)";
        v1v4btn1.style.background = "#1c1c1c";
        v1v4btn3.style.background = "#1c1c1c";
    } else if(i == 1) {
        v1.style.backgroundImage = firstV3.image;
        v1v3h2v1txt1.textContent = firstV3.text;
        v1v3h2v2txt1.textContent = firstV3.sub;
        v1v4btn3.style.background = "rgb(248, 207, 117)";
        v1v4btn2.style.background = "#1c1c1c";
        v1v4btn1.style.background = "#1c1c1c";
    }
    clickTimer = true;
    setTimeout(()=> {
       clickTimer = false
    }, 1000)
    setChangeBannerInterval();
})

v1v4btn1.addEventListener("click", () => {
    if(changebannerInterval) {
        clearInterval(changebannerInterval);
    }
    i = 2;
    v1.style.backgroundImage = firstV1.image;
    v1v3h2v1txt1.textContent = firstV1.text;
    v1v3h2v2txt1.textContent = firstV1.sub;
    v1v4btn1.style.background = "rgb(248, 207, 117)";
    v1v4btn3.style.background = "#1c1c1c";
    v1v4btn2.style.background = "#1c1c1c";
    setChangeBannerInterval();
})

v1v4btn2.addEventListener("click", () => {
    if(changebannerInterval) {
        clearInterval(changebannerInterval);
    }
    i = 0;
    v1.style.backgroundImage = firstV2.image;
    v1v3h2v1txt1.textContent = firstV2.text;
    v1v3h2v2txt1.textContent = firstV2.sub;  
    v1v4btn2.style.background = "rgb(248, 207, 117)";
    v1v4btn1.style.background = "#1c1c1c";
    v1v4btn3.style.background = "#1c1c1c";
    setChangeBannerInterval();
})

v1v4btn3.addEventListener("click", () => {
    if(changebannerInterval) {
        clearInterval(changebannerInterval);
    }
    i = 1;
    v1.style.backgroundImage = firstV3.image;
    v1v3h2v1txt1.textContent = firstV3.text;
    v1v3h2v2txt1.textContent = firstV3.sub;
    v1v4btn3.style.background = "rgb(248, 207, 117)";
    v1v4btn2.style.background = "#1c1c1c";
    v1v4btn1.style.background = "#1c1c1c";
    setChangeBannerInterval();
})

v1v3h2v2btn1.addEventListener("click", () => {
    document.location.href = "/contact"
})


///////////////////////////////////////////v2/////////////////////////////////

v2h1v2v4btn1.addEventListener("click", () => {
    document.location.href = "/about"
})

///////////////////////////////////////////v3/////////////////////////////////

v3h1btn1.addEventListener("click", () => {
    document.location.href = "/about"
})

v3h2btn1.addEventListener("click", () => {
    document.location.href = "/about"
})

///////////////////////////////////////////v4/////////////////////////////////

itmcaresolutionmiddlebtn1.forEach(itm => {
    itm.addEventListener("click", () => {
        document.location.href = "/about"
    })
})
a = 0;
ran = false
///////////////////////////////////////////v5/////////////////////////////////
window.addEventListener("scroll", () => {
    if(window.scrollY > document.querySelector(".v5").offsetTop - 100 && ran == false) {
        let count = setInterval(()=> {
            a++;
            if(a < 101) {
                v5v3h1txt1.textContent = `${a}%`;
                v5v3h2txt1.textContent = `${a}%`;
            } else {
                clearInterval(count);
            }
        }, 50)
        ran = true;
    }
})


///////////////////////////////////////////v6/////////////////////////////////

v6v3itm1v2btn1.addEventListener("click", () => {
    document.location.href = "/staffing"
})

v6v3itm2v2btn1.addEventListener("click", () => {
    document.location.href = "/staffing"
})

v6v3itm3v2btn1.addEventListener("click", () => {
    document.location.href = "/staffing"
})

///////////////////////////////////////////v7/////////////////////////////////

v7v1h2v2btn1.addEventListener("click", () => {
    document.location.href = "/"
})

v7v1h2v2btn2.addEventListener("click", () => {
    document.location.href = "/about"
})

v7v1h2v2btn3.addEventListener("click", () => {
    document.location.href = "/care"
})

v7v1h2v2btn4.addEventListener("click", () => {
    document.location.href = "/staffing"
})

v7v1h2v2btn5.addEventListener("click", () => {
    document.location.href = "/business"
})

v7v1h2v2btn6.addEventListener("click", () => {
    document.location.href = "/contact"
})

v7v1h2v3btn1.addEventListener("click", () => {
    document.location.href = "#facebook"
})

v7v1h2v3btn2.addEventListener("click", () => {
    document.location.href = "#x"
})

v7v1h2v3btn3.addEventListener("click", () => {
    document.location.href = "#insta"
})

let url;
let methodType;
let fetchSubject;

v7v1h3v3btn1.addEventListener("click", () => {
    if(isNaN(v7v1h3v2inp1.value) || v7v1h3v2inp1.value.length < 7 || v7v1h3v2inp1.value > 18) {
        v7v1h3v2inp1.value = null;
        v7v1h3v2inp1.placeholder = "Unsent - Provide phone number";
    } else {
        body = {
            number: v7v1h3v2inp1.value
           }
        requestUtils("POST", "/callme", JSON.stringify(body))
        v7v1h3v2inp1.value = null;
        v7v1h3v2inp1.placeholder = "Successfully Sent";
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
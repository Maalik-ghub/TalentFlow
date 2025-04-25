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

const enquire = document.querySelectorAll(".enquire");

const v8v1h2v2btn1 = document.querySelector(".v8-v1-h2-v2-btn1");
const v8v1h2v2btn2 = document.querySelector(".v8-v1-h2-v2-btn2");
const v8v1h2v2btn3 = document.querySelector(".v8-v1-h2-v2-btn3");
const v8v1h2v2btn4 = document.querySelector(".v8-v1-h2-v2-btn4");
const v8v1h2v2btn5 = document.querySelector(".v8-v1-h2-v2-btn5");
const v8v1h2v2btn6 = document.querySelector(".v8-v1-h2-v2-btn6");

const v8v1h2v3btn1 = document.querySelector(".v8-v1-h2-v3-btn1");
const v8v1h2v3btn2 = document.querySelector(".v8-v1-h2-v3-btn2");
const v8v1h2v3btn3 = document.querySelector(".v8-v1-h2-v3-btn3");

const v8v1h3v2inp1 = document.querySelector(".v8-v1-h3-v2-inp1");
const v8v1h3v3btn1 = document.querySelector(".v8-v1-h3-v3-btn1");


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
if(window.innerWidth < 780) {
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
} else {
nav6.addEventListener("click", () => {
    if(touch) return;
    document.location.href = "/contact";
})
}

enquire.forEach(item => {
    item.addEventListener("click", () => {
        document.location.href = "/business"
    })
});

let methodType;
let url;
let fetchSubject;

///////////////////////////////////////////v8/////////////////////////////////

v8v1h2v2btn1.addEventListener("click", () => {
    document.location.href = "/"
})

v8v1h2v2btn2.addEventListener("click", () => {
    document.location.href = "/about"
})

v8v1h2v2btn3.addEventListener("click", () => {
    document.location.href = "/care"
})

v8v1h2v2btn4.addEventListener("click", () => {
    document.location.href = "/staffing"
})

v8v1h2v2btn5.addEventListener("click", () => {
    document.location.href = "/business"
})

v8v1h2v2btn6.addEventListener("click", () => {
    document.location.href = "/contact"
})

v8v1h2v3btn1.addEventListener("click", () => {
    document.location.href = "#facebook"
})

v8v1h2v3btn2.addEventListener("click", () => {
    document.location.href = "#x"
})

v8v1h2v3btn3.addEventListener("click", () => {
    document.location.href = "#insta"
})

v8v1h3v3btn1.addEventListener("click", () => {
    if(isNaN(v8v1h3v2inp1.value) || v8v1h3v2inp1.value.length < 7 || v8v1h3v2inp1.value.length > 18) {
        v8v1h3v2inp1.value = null;
        v8v1h3v2inp1.placeholder = "Unsent - Provide correct number";
    } else {
        body = {
            number: v8v1h3v2inp1.value
           }
        requestUtils("POST", "/callme", JSON.stringify(body))
        v8v1h3v2inp1.value = null;
        v8v1h3v2inp1.placeholder = "Successfully Sent";
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


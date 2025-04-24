//fb x & insta 
const fb = document.querySelector(".v1-v1-h2-btn1");
const x = document.querySelector(".v1-v1-h2-btn2");
const insta = document.querySelector(".v1-v1-h2-btn3");

//navs
const v1absolute = document.querySelector(".v1-absolute");
const v1absolutenav1 = document.querySelector(".v1-absolute-nav1");
const v1absolutenav2 = document.querySelector(".v1-absolute-nav2");
const v1absolutenav3 = document.querySelector(".v1-absolute-nav3");
const v1absolutenav4 = document.querySelector(".v1-absolute-nav4");
const v1absolutenav5 = document.querySelector(".v1-absolute-nav5");
const v1absolutenav6 = document.querySelector(".v1-absolute-nav6");

const nav1 = document.querySelector(".v1-v2-h2-nav1");
const nav2 = document.querySelector(".v1-v2-h2-nav2");
const nav3 = document.querySelector(".v1-v2-h2-nav3");
const nav4 = document.querySelector(".v1-v2-h2-nav4");
const nav5 = document.querySelector(".v1-v2-h2-nav5");
const nav6 = document.querySelector(".v1-v2-h2-nav6");

const v4v1h2v2btn1 = document.querySelector(".v4-v1-h2-v2-btn1");
const v4v1h2v2btn2 = document.querySelector(".v4-v1-h2-v2-btn2");
const v4v1h2v2btn3 = document.querySelector(".v4-v1-h2-v2-btn3");
const v4v1h2v2btn4 = document.querySelector(".v4-v1-h2-v2-btn4");
const v4v1h2v2btn5 = document.querySelector(".v4-v1-h2-v2-btn5");
const v4v1h2v2btn6 = document.querySelector(".v4-v1-h2-v2-btn6");

const v4v1h2v3btn1 = document.querySelector(".v4-v1-h2-v3-btn1");
const v4v1h2v3btn2 = document.querySelector(".v4-v1-h2-v3-btn2");
const v4v1h2v3btn3 = document.querySelector(".v4-v1-h2-v3-btn3");

const v4v1h3v2inp1 = document.querySelector(".v4-v1-h3-v2-inp1");
const v4v1h3v3btn1 = document.querySelector(".v4-v1-h3-v3-btn1");

const nameInp = document.querySelector(".v2-h1-inp1");
const emailInp = document.querySelector(".v2-h1-inp2");
const subjectInp = document.querySelector(".v2-h1-inp3");
const notesInp = document.querySelector(".v2-h1-inp4");
const submitBut = document.querySelector(".v2-h1-btn1");


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

///////////////////////////////////////////v7/////////////////////////////////

v4v1h2v2btn1.addEventListener("click", () => {
    document.location.href = "/"
})

v4v1h2v2btn2.addEventListener("click", () => {
    document.location.href = "/about"
})

v4v1h2v2btn3.addEventListener("click", () => {
    document.location.href = "/care"
})

v4v1h2v2btn4.addEventListener("click", () => {
    document.location.href = "/staffing"
})

v4v1h2v2btn5.addEventListener("click", () => {
    document.location.href = "/business"
})

v4v1h2v2btn6.addEventListener("click", () => {
    document.location.href = "/contact"
})

v4v1h2v3btn1.addEventListener("click", () => {
    document.location.href = "#facebook"
})

v4v1h2v3btn2.addEventListener("click", () => {
    document.location.href = "#x"
})

v4v1h2v3btn3.addEventListener("click", () => {
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(emailInp.value)) {
                emailInp.style.border = "2px solid rgb(248, 207, 117)";
                if(subjectInp.value.length < 3 || subjectInp.value.length > 16) {
                    subjectInp.value = null;
                    subjectInp.placeholder = "Subject should be between 3-16 characters";
                    submitBut.textContent = "Error - Subject"
                    subjectInp.style.border = "2px solid crimson";
                    submitBut.style.background = "crimson";
                 } else {
                    subjectInp.style.border = "2px solid rgb(248, 207, 117)";
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
                            emailData: emailInp.value,
                            subjectData: subjectInp.value,
                            notesData: notesInp.value
                        }
                        requestUtils("POST", "/contact", JSON.stringify(body))
                        submitBut.textContent = "Sent!!"
                        submitBut.style.background = "lightgreen";
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
})

v4v1h3v3btn1.addEventListener("click", () => {
    if(isNaN(v4v1h3v2inp1.value) || v4v1h3v2inp1.value.length < 7 || v4v1h3v2inp1.value > 18) {
        v4v1h3v2inp1.value = null;
        v4v1h3v2inp1.placeholder = "Unsent - Provide phone number";
    } else {
        body = {
            number: v4v1h3v2inp1.value
           }
        requestUtils("POST", "/callme", JSON.stringify(body))
        v4v1h3v2inp1.value = null;
        v4v1h3v2inp1.placeholder = "Successfully Sent";
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
var map = L.map('map', {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([50.8271, 0.3231], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="/">Talent Flow Limited</a>'
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'images/icons/location.png',

    iconSize:     [50, 50], // size of the icon // size of the shadow
    iconAnchor:   [28, 100], // point of the icon which will correspond to marker's location // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var marker = L.marker([50.8271, 0.3231], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>Talent Flow Limited</b><br>168 Brighton Road Lancing BN158LL.", {
    className: 'stylePopup'
  }).openPopup();
/*
const header = document.querySelector(".header");
const headerCont = document.querySelector(".header-content");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {        
        header.style.background = "rgba(10, 13, 18,0.7)";
        header.style.borderWidth = "1px";
        header.style.top = "30px";
        header.style.width = "1280px";        
        header.style.marginInline = "auto";
        header.style.borderRadius = "10px";
        header.style.borderColor = "rgba(255,255,255,0.3)";
    } else {        
        header.style.background = "transparent"
        header.style.borderWidth = "0";
        header.style.borderRadius = "0";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.borderBottomWidth = "1px";      
        header.style.borderColor = "rgba(255,255,255,0.1)";
    }
})
*/
const navigation = document.getElementById("navigation");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navItems = document.querySelectorAll(".nav-item");

navigation.style.transition = "0.5s ease";

navOpen.addEventListener("click", () => {
  navigation.style.right = "0";
});
navClose.addEventListener("click", () => {
  navigation.style.right = "-100%";
});
navItems.forEach(links => {
  links.addEventListener("click", () => {
    navigation.style.right = "-100%";
  })
})

/*
------------
Background Hero
------------
*/

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let animationId;
let lastTime = 0;

const chars =
  '101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101';
  // '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzアイウエオカキクケコサシスセソタチツテト0123456789';

const charArray = chars.split('');

let drops = [];
let fontSize;
let isMobile;


// ----------------------------------------
// RESIZE
// ----------------------------------------

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  isMobile = window.innerWidth < 768;
  fontSize = isMobile ? 12 : 14;

  createDrops();
}


// ----------------------------------------
// CREATE DROPS
// ----------------------------------------

function createDrops() {

  const columns = Math.floor(canvas.width / fontSize);

  drops = [];

  for (let i = 0; i < columns; i++) {

    const length = Math.floor(Math.random() * 15 + 5);

    const dropChars = [];

    for (let j = 0; j < length; j++) {
      dropChars.push(
        charArray[Math.floor(Math.random() * charArray.length)]
      );
    }

    drops.push({
      x: i * fontSize,

      y: Math.random() * canvas.height * 2 - canvas.height,

      speed: Math.random() * 1.5 + 0.5,

      length: length,

      chars: dropChars,

      opacity: Math.random() * 0.5 + 0.3
    });
  }
}


// ----------------------------------------
// DRAW
// ----------------------------------------

function draw(time) {

  const delta = time - lastTime;

  // Limit animation to roughly 60 FPS
  if (delta < 16) {
    animationId = requestAnimationFrame(draw);
    return;
  }

  lastTime = time;


  // Fade previous frames
  ctx.fillStyle = '#0E1012';
  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  // Center of the screen
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const textRadius = isMobile ? 150 : 250;


  // Loop through every vertical drop
  drops.forEach((drop) => {

    // Draw every character in this drop
    drop.chars.forEach((char, j) => {

      const y = drop.y - j * fontSize;


      // Don't draw characters outside canvas
      if (
        y < -fontSize ||
        y > canvas.height + fontSize
      ) {
        return;
      }


      // Distance from center of screen
      const dist = Math.sqrt(
        Math.pow(drop.x - centerX, 2) +
        Math.pow(y - centerY, 2)
      );


      // Make characters near the center less visible
      const readabilityFactor =
        dist < textRadius
          ? 0.03 + (dist / textRadius) * 0.97
          : 1;


      const isHead = j === 0;

      const trail = 1 - j / drop.length;


      // --------------------------------
      // HEAD CHARACTER
      // --------------------------------

      if (isHead) {

        ctx.fillStyle =
          `rgba(
            255,
            255,
            255,
            ${0.8 * drop.opacity * readabilityFactor}
          )`;

        ctx.font =
          `bold ${fontSize}px "JetBrains Mono", monospace`;
      }


      // --------------------------------
      // TRAIL CHARACTERS
      // --------------------------------

      else {
        ctx.fillStyle = `rgba(
          229,
          9,
          20,
          ${trail * 0.6 * drop.opacity * readabilityFactor}
        )`;
      
        ctx.font =
          `${fontSize}px "JetBrains Mono", monospace`;
      }


      // Draw character
      ctx.fillText(
        char,
        drop.x,
        y
      );
    });


    // Move drop down
    drop.y += drop.speed;


    // --------------------------------
    // RESET DROP
    // --------------------------------

    if (
      drop.y - drop.length * fontSize >
      canvas.height
    ) {

      drop.y = -Math.random() * 200;

      drop.speed =
        Math.random() * 1.5 + 0.5;

      drop.length =
        Math.floor(Math.random() * 15 + 5);

      drop.opacity =
        Math.random() * 0.5 + 0.3;


      // Generate new characters
      drop.chars = [];

      for (let j = 0; j < drop.length; j++) {

        drop.chars.push(
          charArray[
            Math.floor(
              Math.random() * charArray.length
            )
          ]
        );
      }
    }
  });


  // Continue animation
  animationId =
    requestAnimationFrame(draw);
}


// ----------------------------------------
// START
// ----------------------------------------

resize();

animationId =
  requestAnimationFrame(draw);


// ----------------------------------------
// HANDLE RESIZE
// ----------------------------------------

window.addEventListener(
  'resize',
  resize
);


/*
 ----------------
 FAQ
 ----------------
*/

const faqAccordion = document.querySelectorAll(".faq-item-head");
const faqAnswer = document.querySelectorAll(".faq-item");

faqAccordion.forEach(question => {
  question.addEventListener("click", () => {
    const currentItem = question.parentElement;

    faqAnswer.forEach(item => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    })

    currentItem.classList.toggle("active");
    
  })
});


/*
 --------------
   Contact Form
 --------------
*/

const myForm = document.getElementById("contactForm");
const username = document.getElementById("user_name");
const email = document.getElementById("user_email");
const subject = document.getElementById("user_subject");
const message = document.getElementById("user_message");
const formMessage = document.getElementById("form-message");
const formBtn = document.getElementById("formBtn");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  formMessage.style.color = "white";
  formMessage.innerHTML = "Please wait...";
  const nameVal = username.value;
  const emailVal = email.value;
  const subjectVal = subject.value;
  const messageVal = message.value;

  const userData = {
    name: nameVal,
    email: emailVal,
    subject: subjectVal,
    message: messageVal

  }

  const sendData = async () => {    
    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        credentials: "include",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(userData)
      });
      const data = await res.json();

      if (!data.status) {
        formMessage.style.color = "red";
      } else {
        formMessage.style.color = "green";
      }
      formMessage.innerHTML = data.message;    

    } catch(err) {
      formMessage.style.color = "red";
      formMessage.innerHTML = data.message;
      console.log(err.message);
    }

    setTimeout(() => {
      username.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      formMessage.innerHTML = "";
    },2000)
  }

  sendData();

})
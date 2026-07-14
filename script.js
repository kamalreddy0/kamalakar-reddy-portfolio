/*=========================================
Portfolio JavaScript
=========================================*/

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// ===============================
// Sticky Navbar Effect
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.background = "rgba(15,23,42,0.9)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.background = "rgba(15,23,42,.65)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

".project-card,.skill-card,.certificate-card,.about-card"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s ease";

observer.observe(el);

});

// ===============================
// Smooth Button Hover
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

// ===============================
// Typing Effect
// ===============================

const subtitle=document.querySelector(".hero h2");

const words=[

"UI/UX Designer",

"Product Designer",

"Figma Designer"

];

let wordIndex=0;

let charIndex=0;

let isDeleting=false;

function typeEffect(){

const currentWord=words[wordIndex];

if(isDeleting){

subtitle.textContent=currentWord.substring(0,charIndex--);

}

else{

subtitle.textContent=currentWord.substring(0,charIndex++);

}

if(!isDeleting && charIndex===currentWord.length+1){

isDeleting=true;

setTimeout(typeEffect,1200);

return;

}

if(isDeleting && charIndex===0){

isDeleting=false;

wordIndex=(wordIndex+1)%words.length;

}

setTimeout(typeEffect,isDeleting?50:100);

}

typeEffect();

// ===============================
// Scroll Progress Bar
// ===============================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#38BDF8";
progress.style.zIndex="99999";
progress.style.width="0";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

const height=document.documentElement.scrollHeight-window.innerHeight;

progress.style.width=(scroll/height)*100+"%";

});

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563EB";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Footer Year
// ===============================

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} Kamalakar Reddy. Designed & Developed with ❤️`;

}

console.log("Portfolio Loaded Successfully 🚀");

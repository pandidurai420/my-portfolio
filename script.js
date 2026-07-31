// =========================
// Mobile Menu Toggle
// =========================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// =========================
// Close Menu on Click
// =========================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// =========================
// Reveal Animation
// =========================

const revealElements = document.querySelectorAll(".card,.project,.about-box,.skills div");

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

reveal();

window.addEventListener("scroll",reveal);

// Initial Style

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s";

});

// =========================
// Scroll To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="#000";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// Footer Year
// =========================

const footer=document.querySelector("footer p");

footer.innerHTML=`© ${new Date().getFullYear()} Pandidurai P | All Rights Reserved`;
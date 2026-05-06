/* =========================
   D-TECH SOLAR SCRIPT.JS
   ========================= */

/* =========================
   MOBILE NAV TOGGLE
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

/* Close menu when clicking a link (mobile UX improvement) */
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("show");
  });
});

/* =========================
   SCROLL REVEAL ANIMATION
   (Works with .container.show in CSS)
========================= */
const sections = document.querySelectorAll(".container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

/* =========================
   FORM SUBMISSION HANDLER
========================= */
function submitForm(e) {
  e.preventDefault();

  const btn = e.target.querySelector("button");

  // Loading state
  btn.innerText = "Sending...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    alert("✅ Thank you! Our solar team will contact you within 24 hours.");

    btn.innerText = "Send Message";
    btn.style.opacity = "1";

    e.target.reset();
  }, 1200);
}

/* =========================
   SMOOTH BUTTON FEEDBACK
========================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.97)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

/* =========================
   OPTIONAL: WHATSAPP PRE-FILL MESSAGE
========================= */
const whatsappBtn = document.querySelector(".whatsapp");

if (whatsappBtn) {
  const message = encodeURIComponent(
     "Hello D-Tech Solar, I am interested in your solar installation services. Please provide more details."
  );

  whatsappBtn.href = `https://wa.me/2348032815084?text=${message}`;
}
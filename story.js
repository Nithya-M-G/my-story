// ============================================================
//  EDIT THIS: your profile links (they are used in 2 places)
// ============================================================
const LINKS = {
  github: "https://github.com/Nithya-M-G",
  linkedin: "https://www.linkedin.com/in/nithya-m-g-2b1948344"
};

document.querySelectorAll("[data-link]").forEach((a) => {
  a.href = LINKS[a.dataset.link];
});

// ---------- 1. the red margin line fills as you scroll ----------
const fill = document.getElementById("marginFill");

function updateMargin() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  fill.style.height = progress * window.innerHeight + "px";
}
window.addEventListener("scroll", updateMargin);
window.addEventListener("resize", updateMargin);
updateMargin();

// ---------- 2. chapters fade in as you reach them ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".chapter").forEach((c) => observer.observe(c));

// ---------- 3. "open all / close all" for the moments ----------
const moments = Array.from(document.querySelectorAll(".moment"));
const toggleAll = document.getElementById("toggleAll");
let allOpen = false;

toggleAll.addEventListener("click", () => {
  allOpen = !allOpen;
  moments.forEach((m) => (m.open = allOpen));
  toggleAll.textContent = allOpen ? "close all" : "open all";
});

// ---------- 4. missing photo? show a placeholder, not a broken icon ----------
document.querySelectorAll(".polaroid img").forEach((img) => {
  img.addEventListener("error", () => {
    const box = document.createElement("div");
    box.className = "ph";
    box.textContent = "add photo: " + img.getAttribute("src");
    img.replaceWith(box);
  });
});

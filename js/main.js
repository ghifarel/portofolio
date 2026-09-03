(function () {
  // Mobile nav toggle
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Category overview strip (counts derived from PROJECTS in data.js)
  const strip = document.getElementById("categoryStrip");
  if (strip && typeof PROJECTS !== "undefined") {
    const counts = {};
    PROJECTS.forEach((p) => (counts[p.category] = (counts[p.category] || 0) + 1));
    CATEGORY_ORDER.forEach((cat) => {
      if (!counts[cat]) return;
      const a = document.createElement("a");
      a.href = `projects.html?cat=${encodeURIComponent(cat)}`;
      a.innerHTML = `<span class="n">${counts[cat]}</span><span class="label">${cat}</span>`;
      strip.appendChild(a);
    });
  }
})();

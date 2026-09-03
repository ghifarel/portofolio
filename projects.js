(function () {
  const grid = document.getElementById("projGrid");
  const filterRow = document.getElementById("filterRow");
  const searchInput = document.getElementById("searchInput");
  const resultCount = document.getElementById("resultCount");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const params = new URLSearchParams(window.location.search);
  let currentFilter = params.get("cat") || "all";
  let query = "";

  // Build filter buttons
  const counts = { all: PROJECTS.length };
  PROJECTS.forEach((p) => (counts[p.category] = (counts[p.category] || 0) + 1));

  const allCats = ["all", ...CATEGORY_ORDER.filter((c) => counts[c])];
  allCats.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === currentFilter ? " active" : "");
    btn.textContent = cat === "all" ? `Semua (${counts.all})` : `${cat} (${counts[cat]})`;
    btn.addEventListener("click", () => {
      currentFilter = cat;
      filterRow.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render();
    });
    filterRow.appendChild(btn);
  });

  function icon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';
  }

  function render() {
    const q = query.trim().toLowerCase();
    const filtered = PROJECTS.filter((p) => {
      const matchesCat = currentFilter === "all" || p.category === currentFilter;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });

    resultCount.textContent = `Menampilkan ${filtered.length} dari ${PROJECTS.length} proyek`;
    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">Tidak ada proyek yang cocok dengan pencarian "${query}".</div>`;
      return;
    }

    filtered.forEach((p) => {
      const card = document.createElement("article");
      card.className = "tick-panel proj-card";
      if (p.metric) {
        const badge = document.createElement("span");
        badge.className = "proj-metric";
        badge.textContent = p.metric;
        card.appendChild(badge);
      }
      card.innerHTML += `
        <div>
          <span class="cat">${p.category}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
        </div>
        <div class="proj-meta">
          <span class="proj-role">${p.role}</span>
          ${
            p.url
              ? `<a href="${p.url}" target="_blank" rel="noopener" class="proj-link">Kunjungi ${icon()}</a>`
              : `<span class="proj-internal">Dashboard internal</span>`
          }
        </div>`;
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", (e) => {
    query = e.target.value;
    render();
  });

  render();
})();

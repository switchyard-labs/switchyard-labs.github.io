(function () {
  "use strict";
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const nav = document.getElementById("fs-nav");
  const docs = document.getElementById("docs-drawer");
  if (docs && location.pathname.includes("/docs/")) docs.hidden = false;
  function markActive(root) {
    if (!root) return;
    const here = location.pathname.replace(/\/index\.html$/, "/");
    root.querySelectorAll("a[href]").forEach((a) => {
      try { const there = new URL(a.href, location.href).pathname.replace(/\/index\.html$/, "/"); if (there === here) a.setAttribute("aria-current", "page"); } catch (_) {}
    });
  }
  markActive(nav); markActive(docs);
  if (!nav) return;
  let lastFocus = null;
  function focusables() { return [...nav.querySelectorAll('a[href],button,summary')].filter((el) => !el.hasAttribute('disabled')); }
  function open() { lastFocus = document.activeElement; nav.classList.add("open"); nav.setAttribute("aria-hidden","false"); document.body.classList.add("menu-open"); if (openBtn) openBtn.setAttribute("aria-expanded", "true"); if (closeBtn) closeBtn.focus(); }
  function close() { nav.classList.remove("open"); nav.setAttribute("aria-hidden","true"); document.body.classList.remove("menu-open"); if (openBtn) openBtn.setAttribute("aria-expanded", "false"); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  function key(e) {
    if (!nav.classList.contains("open")) return;
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key === "Tab") { const list=focusables(); if (!list.length) return; const first=list[0], last=list[list.length-1]; if (e.shiftKey && document.activeElement===first) {e.preventDefault();last.focus();} else if (!e.shiftKey && document.activeElement===last) {e.preventDefault();first.focus();} }
  }
  if (openBtn) openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  nav.addEventListener("click", (e) => { if (e.target.closest("a[href]")) close(); });
  document.addEventListener("keydown", key);
})();

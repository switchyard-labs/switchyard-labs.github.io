(function () {
  "use strict";
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");
  var nav = document.getElementById("fs-nav");
  if (!nav) return;
  function open() { nav.classList.add("open"); if (openBtn) openBtn.setAttribute("aria-expanded", "true"); }
  function close() { nav.classList.remove("open"); if (openBtn) openBtn.setAttribute("aria-expanded", "false"); }
  if (openBtn) openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();
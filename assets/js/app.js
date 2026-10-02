(function () {
  "use strict";
  const hamburger = document.getElementById("hamburger");
  const mobileClose = document.getElementById("mobile-close");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener("click", () => { mobileMenu.hidden = false; });
  if (mobileClose) mobileClose.addEventListener("click", () => { mobileMenu.hidden = true; });
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mobileMenu.hidden = true;
  });
})();
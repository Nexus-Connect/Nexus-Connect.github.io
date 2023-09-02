document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
  const openbar = document.querySelector(".ri-menu-3-line");
  const closebar = document.querySelector(".fa-times");
  var sidebar = document.getElementById("side-bar");
   const hirebtn = document.querySelector(".lnd-hire-btn");
  function openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  hirebtn.addEventListener("click", function () {
    openInNewTab(
      "https://www.fiverr.com/nexus_connect/create-well-designed-and-fully-responsive-websites-for-you"
    );
  });
  function openMenu() {
    sidebar.style.right = "0%";
    openbar.style.opacity = "0";
    closebar.style.opacity = "1";
    openbar.style.pointerEvents = "none";
  }
  function closeMenu() {
    sidebar.style.right = "-40%";
    openbar.style.opacity = "1";
    closebar.style.opacity = "0";
    openbar.style.pointerEvents = "auto";
  }
  var originalTitle = document.title;
  var newTitle = "🥺 Come back!!!";
  function updateTitleOnFocus() {
    document.title = newTitle;
  }
  function restoreOriginalTitle() {
    document.title = originalTitle;
  }
  window.addEventListener("blur", updateTitleOnFocus);
  window.addEventListener("focus", restoreOriginalTitle);
  function isMobile() {
    const mobileRegex = /Android|iPhone|iPod|iPad|Windows Phone/i;
    return mobileRegex.test(navigator.userAgent);
  }
  console.log(isMobile());
  openbar.addEventListener("click", openMenu);
  sidebar.addEventListener("click", closeMenu);
});

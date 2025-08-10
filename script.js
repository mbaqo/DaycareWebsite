function initSidebar() {
  const sidebar  = document.querySelector(".sidebar");
  const openIcon = document.querySelector(".open-icon-li");

  if (!sidebar || !openIcon) {
    console.error("Sidebar or open icon not found");
    return;
  }

  // Open sidebar
  openIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent immediate close
    sidebar.classList.add("active");
  });

  // Close on outside click OR sidebar link click
  document.addEventListener("click", (e) => {
    if (!sidebar.classList.contains("active")) return;

    const clickedInside = sidebar.contains(e.target);
    const clickedLink = e.target.closest(".sideLink");

    if (!clickedInside || clickedLink) {
      console.log(12);
      sidebar.classList.remove("active");
    }
  });
}

// Call it once DOM is ready
document.addEventListener("DOMContentLoaded", initSidebar);

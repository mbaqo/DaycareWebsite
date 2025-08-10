function initSidebar() {
    const sidebar = document.querySelector(".sidebar");
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

function showDropDown() {
    const resourceLink = document.querySelector(".noborder");
    const dropDown = document.querySelector("#navbar-sub");

    let isOverResource = false;
    let isOverDrop = false;

    function checkIfOverBoth() {
        if (!isOverResource && !isOverDrop) {
            dropDown.classList.remove("active");
        } else {
            dropDown.classList.add("active");
        }
    }

    [resourceLink, dropDown].forEach((el, index) => {
        el.addEventListener("mouseenter", () => {
            if (index === 0) isOverResource = true;
            else isOverDrop = true;
            checkIfOverBoth();
        });

        el.addEventListener("mouseleave", () => {
            if (index === 0) isOverResource = false;
            else isOverDrop = false;
            checkIfOverBoth();
        });
    });
}

function updateActivePage() {
    const path = window.location.pathname;
    console.log(path);

    const navLinks = document.querySelectorAll('.nav-list li a');

    console.log(navLinks);

    navLinks.forEach((link) => {
        if(link.pathname == path) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
}

// Call it once DOM is ready
document.addEventListener("DOMContentLoaded", initSidebar);
document.addEventListener("DOMContentLoaded", showDropDown);
document.addEventListener("DOMContentLoaded", updateActivePage);

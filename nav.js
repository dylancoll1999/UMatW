document.addEventListener("DOMContentLoaded", function() {
    // 1. Inject Header HTML
    const headerHTML = `
    <header id="main-header">
        <div class="header-inner">
            <a href="index.html" class="logo">
                <img src="images/UMAT-e1673627924885.png" alt="UMAT Logo" style="height: 70px; width: auto; display: block;">
            </a>
            
            <button class="mobile-menu-btn" onclick="toggleMenu()" aria-label="Toggle Menu">☰</button>
            
            <nav class="main-nav" id="main-nav">
                <a href="index.html" class="nav-link">Home</a>
                <a href="events.html" class="nav-link">Events</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="contact.html" class="nav-link">Contact</a>
                <a href="https://www.justgiving.com/crowdfunding/umatcommunity" class="nav-donate">Donate</a>
            </nav>
        </div>
    </header>`;
    
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // 2. Highlight Active Page
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // 3. Sticky Scroll Effect
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (header) {
            if (window.scrollY > 50) header.classList.add("scrolled");
            else header.classList.remove("scrolled");
        }
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById("main-nav");
    if(nav) nav.classList.toggle("active");
}
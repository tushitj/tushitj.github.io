// Mobile menu toggle, auto-close on link click, and active-section highlighting.
// Smooth scrolling is handled in CSS (scroll-behavior).
(function () {
    "use strict";

    var toggler = document.querySelector("#sideNav .navbar-toggler");
    var menu = document.getElementById("navbarSupportedContent");
    var links = Array.prototype.slice.call(document.querySelectorAll("#sideNav .nav-link"));

    function setMenu(open) {
        menu.classList.toggle("show", open);
        toggler.setAttribute("aria-expanded", String(open));
    }

    toggler.addEventListener("click", function () {
        setMenu(!menu.classList.contains("show"));
    });

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            setMenu(false);
        });
    });
    document.querySelector("#sideNav .navbar-brand").addEventListener("click", function () {
        setMenu(false);
    });

    // Mirror the highlighted link in aria-current for assistive technologies.
    function markCurrent(current) {
        links.forEach(function (link) {
            link.setAttribute("aria-current", link === current ? "true" : "false");
        });
    }

    // Native scrollspy: CSS scroll-target-group + :target-current does the highlighting.
    if (window.CSS && CSS.supports && CSS.supports("scroll-target-group: auto")) {
        var syncAriaCurrent = function () {
            markCurrent(document.querySelector("#sideNav .nav-link:target-current"));
        };
        // :target-current resolves after layout, so sync once the page has rendered.
        window.addEventListener("load", function () {
            requestAnimationFrame(syncAriaCurrent);
        });
        document.addEventListener("scrollend", syncAriaCurrent);
        return;
    }

    // Fallback: IntersectionObserver toggles .active.
    if (!("IntersectionObserver" in window)) return;

    var byId = {};
    links.forEach(function (link) {
        byId[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var active = byId[entry.target.id];
            if (!active) return;
            links.forEach(function (l) {
                l.classList.toggle("active", l === active);
            });
            markCurrent(active);
        });
    }, {rootMargin: "-45% 0px -50% 0px"});

    Object.keys(byId).forEach(function (id) {
        var section = document.getElementById(id);
        if (section) observer.observe(section);
    });
})();

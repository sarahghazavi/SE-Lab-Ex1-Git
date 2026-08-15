const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealElements = document.querySelectorAll(
    ".feature-card, .stat-item, .workflow-step, .about-content, .about-highlight, .testimonial-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("devsync-theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function updateThemeIcon() {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (themeIcon) {
        themeIcon.textContent = currentTheme === "dark" ? "☀" : "☾";
    }
}

updateThemeIcon();

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const nextTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            nextTheme
        );

        localStorage.setItem("devsync-theme", nextTheme);

        updateThemeIcon();
    });
}

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;

            const target = parseFloat(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";
            const decimals = parseInt(
                counter.dataset.decimals || "0",
                10
            );

            const duration = 1400;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;

                const progress = Math.min(
                    elapsed / duration,
                    1
                );

                const easedProgress =
                    1 - Math.pow(1 - progress, 3);

                const currentValue =
                    target * easedProgress;

                counter.textContent =
                    currentValue.toFixed(decimals) + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent =
                        target.toFixed(decimals) + suffix;
                }
            }

            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);
        });
    },
    {
        threshold: 0.4
    }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});
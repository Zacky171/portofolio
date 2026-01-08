const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
    mobileMenu.classList.remove("hidden");
};

function closeMenu() {
    mobileMenu.classList.add("hidden");
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToJourney() {
    const journeySection = document.getElementById('journey');
    if (journeySection) {
        journeySection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToCertification() {
    const certificationSection = document.getElementById('certification');
    if (certificationSection) {
        certificationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Back to top functionality
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0');
        backToTop.classList.add('opacity-100');
        backToTop.classList.remove('pointer-events-none');
    } else {
        backToTop.classList.remove('opacity-100');
        backToTop.classList.add('opacity-0');
        backToTop.classList.add('pointer-events-none');
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let certifications = [
    {
        name: "AI",
        icon: "fa-solid fa-brain",
        image: "/Portofolio/images/belajar_ai.png",
        link: "https://www.dicoding.com/certificates/6RPNG4VR8Z2M",
    },
    {
        name: "Pemograman Web",
        icon: "fa-solid fa-code",
        image: "/images/pemograman_web.png",
        link: "https://www.dicoding.com/certificates/2VX3545JJPYQ",
    },
    {
        name: "JavaScript",
        icon: "fa-brands fa-js",
        image: "/images/java_script.png",
        link: "https://www.dicoding.com/certificates/98XWOOMY9ZM3",
    },
    {
        name: "Front-End Web",
        icon: "fa-solid fa-desktop",
        image: "/images/front_end.png",
        link: "https://www.dicoding.com/certificates/EYX4KMV86PDL",
    },
];

let education = [
    {
        title: "Smk Negeri Prigen",
        subtitle: "Multimedia",
        date: "July 2021 - May 2024",
    },
    {
        title: "Mocci Academy",
        subtitle: "3D Modeller, Lrc, Render Wrangler",
        date: "July 2022 - December 2022",
    },
    {
        title: "Mocca Studio",
        subtitle: "Render Wrangler",
        date: "January 2023 - December 2023",
    },
    {
        title: "Universitas Yudharta Pasuruan",
        subtitle: "Informatics Engineering",
        date: "September 2024 - Now",
    },
    {
        title: "ID Camp x Dicoding",
        subtitle: "Front-end",
        date: "September 2025 - November 2025",
    },
];

// Function to populate the journey section
function populateJourney() {
    const journeySection = document.getElementById('journey');
    if (!journeySection) return;

    const educationContainer = journeySection.querySelector('.education-container');
    if (!educationContainer) return;

    educationContainer.innerHTML = '';

    education.forEach(item => {
        const div = document.createElement('div');
        div.className = 'flex items-start gap-6 mb-8 relative';
        div.innerHTML = `
            <div class="w-8 h-8 bg-violet-400 rounded-full flex-shrink-0 mt-1"></div>
            <div class="flex-1">
                <h3 class="text-xl sm:text-2xl font-semibold">${item.title}</h3>
                <p class="text-violet-300 mb-2">${item.subtitle}</p>
                <div class="text-sm text-slate-400">${item.date}</div>
            </div>
        `;
        educationContainer.appendChild(div);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateJourney);

// Initialize particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


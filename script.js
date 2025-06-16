// Simple JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Phone number formatting
    const phoneInput = document.querySelector('input[type="tel"]')
    if (phoneInput) {
        phoneInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "")
            if (value.length > 0) {
                if (value.length <= 1) {
                    value = "+7 (" + value
                } else if (value.length <= 4) {
                    value = "+7 (" + value.substring(1)
                } else if (value.length <= 7) {
                    value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4)
                } else if (value.length <= 9) {
                    value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7)
                } else {
                    value =
                        "+7 (" +
                        value.substring(1, 4) +
                        ") " +
                        value.substring(4, 7) +
                        "-" +
                        value.substring(7, 9) +
                        "-" +
                        value.substring(9, 11)
                }
            }
            e.target.value = value
        })
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    // Button click handlers
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function () {
            const text = this.textContent.trim()

            if (text.includes("Рассчитать") || text.includes("консультация") || text.includes("Позвонить")) {
                // Here you would typically open a modal or redirect to a form
                alert("Спасибо за интерес! Наш менеджер свяжется с вами в ближайшее время.")
            }
        })
    })

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
            }
        })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll(".feature, .product-card, .benefit").forEach((el) => {
        el.style.opacity = "0"
        el.style.transform = "translateY(20px)"
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(el)
    })
})

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
})

// Problems Slider
let currentSlide = 0
const slides = document.querySelectorAll(".problem-slide")
const dots = document.querySelectorAll(".dot")
const track = document.querySelector(".problems-track")
const prevBtn = document.querySelector(".slider-btn.prev")
const nextBtn = document.querySelector(".slider-btn.next")

function updateSlider() {
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide)
        })

        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentSlide)
        })
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    updateSlider()
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    updateSlider()
}

// Event listeners for slider
if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide)
}

if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide)
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index
        updateSlider()
    })
})

// Auto-play slider
setInterval(nextSlide, 4000)

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot")
const cursorOutline = document.querySelector(".cursor-outline")

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`
})

// Show cursor on mouse enter
document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1"
    cursorOutline.style.opacity = "1"
})

// Hide cursor on mouse leave
document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0"
    cursorOutline.style.opacity = "0"
})

// Cursor hover effects
const hoverElements = document.querySelectorAll("a, button, .product-card, .advantage-card")

hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
    })

    element.addEventListener("mouseleave", () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
    })
})

// Header scroll effect
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.98)"
        header.style.boxShadow = "var(--shadow)"
    } else {
        header.style.background = "rgba(255, 255, 255, 0.95)"
        header.style.boxShadow = "var(--shadow-sm)"
    }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Phone number formatting
const phoneInputs = document.querySelectorAll('input[type="tel"]')

phoneInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "")

        if (value.length > 0) {
            if (value.length <= 1) {
                value = "+7 (" + value
            } else if (value.length <= 4) {
                value = "+7 (" + value.substring(1)
            } else if (value.length <= 7) {
                value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4)
            } else if (value.length <= 9) {
                value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4, 7) + "-" + value.substring(7)
            } else {
                value =
                    "+7 (" +
                    value.substring(1, 4) +
                    ") " +
                    value.substring(4, 7) +
                    "-" +
                    value.substring(7, 9) +
                    "-" +
                    value.substring(9, 11)
            }
        }

        e.target.value = value
    })
})

// Reviews slider
let currentReview = 0
const reviewsTrack = document.querySelector(".reviews-track")
const reviewDots = document.querySelectorAll(".review-dot")
const reviewPrev = document.querySelector(".review-prev")
const reviewNext = document.querySelector(".review-next")

function updateReviewSlider() {
    if (reviewsTrack) {
        reviewsTrack.style.transform = `translateX(-${currentReview * 100}%)`

        reviewDots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentReview)
        })
    }
}

if (reviewNext) {
    reviewNext.addEventListener("click", () => {
        currentReview = (currentReview + 1) % 3
        updateReviewSlider()
    })
}

if (reviewPrev) {
    reviewPrev.addEventListener("click", () => {
        currentReview = (currentReview - 1 + 3) % 3
        updateReviewSlider()
    })
}

reviewDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentReview = index
        updateReviewSlider()
    })
})

// Auto-play reviews slider
setInterval(() => {
    if (reviewsTrack) {
        currentReview = (currentReview + 1) % 3
        updateReviewSlider()
    }
}, 5000)

// Form submission
const forms = document.querySelectorAll("form")

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        // Get form data
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)

        // Validate required fields
        const requiredFields = form.querySelectorAll("[required]")
        let isValid = true

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false
                field.style.borderColor = "var(--danger)"
                field.focus()
            } else {
                field.style.borderColor = "var(--gray-300)"
            }
        })

        if (isValid) {
            // Show success message
            showNotification("Спасибо за заявку! Наш специалист свяжется с вами в течение 15 минут.", "success")

            // Reset form
            form.reset()
        } else {
            showNotification("Пожалуйста, заполните все обязательные поля", "error")
        }
    })
})

// Notification system
function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification")
    existingNotifications.forEach((notification) => notification.remove())

    // Create notification
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <i class="fas fa-times"></i>
    </button>
  `

    // Add styles
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success" ? "var(--success)" : type === "error" ? "var(--danger)" : "var(--primary)"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 400px;
    animation: slideIn 0.3s ease;
  `

    // Add animation styles
    const style = document.createElement("style")
    style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .notification-close {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 50%;
      transition: background 0.2s ease;
    }
    
    .notification-close:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `
    document.head.appendChild(style)

    // Add to page
    document.body.appendChild(notification)

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close")
    closeBtn.addEventListener("click", () => {
        notification.remove()
    })

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove()
        }
    }, 5000)
}

// Button click handlers
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
        // Create ripple effect
        const ripple = document.createElement("span")
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.classList.add("ripple")

        this.appendChild(ripple)

        setTimeout(() => {
            ripple.remove()
        }, 600)
    })
})

// Add ripple effect styles
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
  .btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`
document.head.appendChild(rippleStyle)

// Add ripple effect styles
const style = document.createElement("style")
style.textContent = `
  .btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".floating-element")

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1
        element.style.transform = `translateY(${scrolled * speed}px)`
    })
})

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

// Observe elements for custom animations
document.querySelectorAll(".advantage-card, .benefit-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
})

// Form validation enhancement
const inputs = document.querySelectorAll(".form-input")

inputs.forEach((input) => {
    input.addEventListener("blur", function () {
        if (this.hasAttribute("required") && !this.value.trim()) {
            this.style.borderColor = "var(--danger)"
        } else {
            this.style.borderColor = "var(--gray-300)"
        }
    })

    input.addEventListener("focus", function () {
        this.style.borderColor = "var(--primary)"
    })
})

// Counter animation for numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
        start += increment
        element.textContent = Math.floor(start)

        if (start >= target) {
            element.textContent = target
            clearInterval(timer)
        }
    }, 16)
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = Number.parseFloat(entry.target.textContent)
            animateCounter(entry.target, target)
            counterObserver.unobserve(entry.target)
        }
    })
})

document.querySelectorAll(".rating-score").forEach((counter) => {
    counterObserver.observe(counter)
})

// Preloader
window.addEventListener("load", () => {
    document.body.classList.add("loaded")
})

// Add loaded class styles
const loadedStyle = document.createElement("style")
loadedStyle.textContent = `
  body:not(.loaded) {
    overflow: hidden;
  }
  
  body:not(.loaded)::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  body:not(.loaded)::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 3px solid var(--primary-light);
    border-top: 3px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }
  
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`
document.head.appendChild(loadedStyle)

// Console welcome message
console.log("🏠 Лендинг НадОкна загружен! Качественные окна для вашего дома.")

// Performance optimization
document.addEventListener("DOMContentLoaded", () => {
    // Lazy load images
    const images = document.querySelectorAll("img[data-src]")
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                img.removeAttribute("data-src")
                imageObserver.unobserve(img)
            }
        })
    })

    images.forEach((img) => imageObserver.observe(img))
})

console.log("🎨 Художественный лендинг загружен! Добро пожаловать в мир качественных окон!")

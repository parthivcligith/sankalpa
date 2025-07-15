// Preloader functionality with real loading progress
document.addEventListener("DOMContentLoaded", () => {
  // Array of construction facts to display during loading
  const constructionFacts = [
    "A well-designed villa can increase in value by 15-20% annually in Kerala's premium locations.",
    "Traditional Kerala architecture uses natural materials that keep homes cool in tropical climate.",
    "Proper foundation design is crucial for Kerala's monsoon season and soil conditions.",
    "Vastu-compliant villa designs are highly preferred by Kerala families for positive energy.",
    "Kerala's premium villa locations offer 12-15% annual appreciation in property value.",
    "Sustainable building materials can reduce villa maintenance costs by up to 30%.",
    "Open courtyards and verandas are essential features of traditional Kerala villa architecture.",
    "Quality construction with premium materials ensures villa longevity of 50+ years.",
    "Smart home integration can increase villa value by 10-15% in Kerala's luxury market.",
    "Sankalapa Builders specializes in climate-optimized villa designs for Kerala's unique weather.",
  ]

  let currentFactIndex = 0
  const constructionFactElement = document.getElementById("construction-fact")
  const loadingProgressBar = document.getElementById("loading-progress")
  const loadingPercentage = document.querySelector(".loading-percentage")
  const preloader = document.querySelector(".preloader")

  // Function to update construction facts
  function updateConstructionFact() {
    if (constructionFactElement) {
      constructionFactElement.style.opacity = "0"
      constructionFactElement.style.transform = "translateY(20px)"

      setTimeout(() => {
        currentFactIndex = (currentFactIndex + 1) % constructionFacts.length
        const factParagraph = constructionFactElement.querySelector("p")
        if (factParagraph) {
          factParagraph.textContent = constructionFacts[currentFactIndex]
        }
        constructionFactElement.style.opacity = "1"
        constructionFactElement.style.transform = "translateY(0)"
      }, 500)
    }
  }

  // Rotate construction facts every 5 seconds
  const factInterval = setInterval(updateConstructionFact, 5000)

  // Track real loading progress
  let loadingProgress = 0
  const totalResources =
    document.images.length + document.querySelectorAll("script").length + document.querySelectorAll("link").length
  let loadedResources = 0

  function updateProgress() {
    const realProgress = Math.min(Math.round((loadedResources / totalResources) * 100), 100)
    loadingProgress = Math.max(loadingProgress, realProgress)

    if (loadingProgressBar) {
      loadingProgressBar.style.width = loadingProgress + "%"
    }
    if (loadingPercentage) {
      loadingPercentage.textContent = loadingProgress + "%"
    }

    if (loadingProgress >= 100) {
      setTimeout(() => {
        hidePreloader()
      }, 500)
    }
  }

  // Track image loading
  Array.from(document.images).forEach((img) => {
    if (img.complete) {
      loadedResources++
      updateProgress()
    } else {
      img.addEventListener("load", () => {
        loadedResources++
        updateProgress()
      })
      img.addEventListener("error", () => {
        loadedResources++
        updateProgress()
      })
    }
  })

  // Track script loading
  Array.from(document.querySelectorAll("script")).forEach((script) => {
    loadedResources++
    updateProgress()
  })

  // Track CSS loading
  Array.from(document.querySelectorAll("link")).forEach((link) => {
    if (link.rel === "stylesheet") {
      loadedResources++
      updateProgress()
    }
  })

  window.addEventListener("load", () => {
    loadingProgress = 100
    updateProgress()
  })

  function hidePreloader() {
    clearInterval(factInterval)
    if (preloader) {
      preloader.classList.add("fade-out")

      setTimeout(() => {
        document.body.style.overflow = "visible"
        const mainContent = document.querySelector("main")
        if (mainContent) {
          mainContent.classList.add("page-content")
        }
      }, 800)
    }
  }

  setTimeout(() => {
    if (preloader && !preloader.classList.contains("fade-out")) {
      hidePreloader()
    }
  }, 8000)
})

// Villa Project Data
const projects = [
  // Luxury Villas
  {
    id: 1,
    name: "Royal Heritage Villa",
    type: "Traditional Kerala Villa",
    category: "villas",
    price: 12500000,
    location: "Kakkanad, Kochi",
    image: "/placeholder.svg?height=300&width=400",
    features: ["4 BHK", "Traditional Architecture", "Courtyard", "Premium Finishes"],
    description:
      "A magnificent traditional Kerala villa featuring authentic architectural elements, spacious courtyards, and premium finishes. Perfect blend of heritage design with modern amenities.",
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "8 cents",
      builtArea: "3200 sq ft",
      parking: "2 cars",
      features: ["Swimming Pool", "Garden", "Servant Quarters", "Solar Panels"]
    },
  },
  {
    id: 2,
    name: "Modern Luxury Villa",
    type: "Contemporary Villa",
    category: "villas",
    price: 15000000,
    location: "Edappally, Kochi",
    image: "/placeholder.svg?height=300&width=400",
    features: ["5 BHK", "Contemporary Design", "Smart Home", "Premium Location"],
    description:
      "Ultra-modern villa with contemporary architecture, smart home automation, and luxury amenities. Located in Kochi's premium residential area.",
    specifications: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "10 cents",
      builtArea: "4000 sq ft",
      parking: "3 cars",
      features: ["Home Theater", "Gym", "Infinity Pool", "Rooftop Garden"]
    },
  },
  {
    id: 3,
    name: "Eco-Friendly Villa",
    type: "Sustainable Villa",
    category: "villas",
    price: 9500000,
    location: "Guruvayur, Thrissur",
    image: "/placeholder.svg?height=300&width=400",
    features: ["3 BHK", "Eco-Friendly", "Solar Power", "Rainwater Harvesting"],
    description:
      "Environmentally conscious villa design with sustainable materials, solar power, and rainwater harvesting systems. Perfect for eco-conscious families.",
    specifications: {
      bedrooms: 3,
      bathrooms: 4,
      plotSize: "6 cents",
      builtArea: "2800 sq ft",
      parking: "2 cars",
      features: ["Organic Garden", "Biogas Plant", "Natural Ventilation", "Green Roof"]
    },
  },
  {
    id: 4,
    name: "Luxury Waterfront Villa",
    type: "Premium Villa",
    category: "villas",
    price: 25000000,
    location: "Kumarakom, Kottayam",
    image: "/placeholder.svg?height=300&width=400",
    features: ["6 BHK", "Waterfront", "Private Jetty", "Luxury Amenities"],
    description:
      "Exclusive waterfront villa with private jetty, panoramic backwater views, and ultra-luxury amenities. The epitome of luxury living in Kerala.",
    specifications: {
      bedrooms: 6,
      bathrooms: 8,
      plotSize: "15 cents",
      builtArea: "5500 sq ft",
      parking: "4 cars",
      features: ["Private Beach", "Boat House", "Wine Cellar", "Spa Room"]
    },
  },
  // Custom Homes
  {
    id: 5,
    name: "Family Custom Home",
    type: "Custom Designed Home",
    category: "custom",
    price: 8500000,
    location: "Aluva, Ernakulam",
    image: "/placeholder.svg?height=300&width=400",
    features: ["3 BHK", "Custom Design", "Family-Friendly", "Budget-Friendly"],
    description:
      "Thoughtfully designed custom home perfect for growing families. Optimized layout with focus on functionality and comfort within budget.",
    specifications: {
      bedrooms: 3,
      bathrooms: 3,
      plotSize: "5 cents",
      builtArea: "2200 sq ft",
      parking: "2 cars",
      features: ["Play Area", "Study Room", "Utility Area", "Front Garden"]
    },
  },
  {
    id: 6,
    name: "Architect's Dream Villa",
    type: "Designer Villa",
    category: "custom",
    price: 18000000,
    location: "Cherai, Ernakulam",
    image: "/placeholder.svg?height=300&width=400",
    features: ["4 BHK", "Unique Design", "Artistic Elements", "Premium Materials"],
    description:
      "Architecturally stunning villa with unique design elements, artistic features, and premium materials. A true masterpiece of modern architecture.",
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "12 cents",
      builtArea: "3800 sq ft",
      parking: "3 cars",
      features: ["Art Gallery", "Sculpture Garden", "Meditation Room", "Observatory"]
    },
  },
  // Premium Apartments
  {
    id: 7,
    name: "Skyline Penthouse",
    type: "Luxury Penthouse",
    category: "apartments",
    price: 22000000,
    location: "Marine Drive, Kochi",
    image: "/placeholder.svg?height=300&width=400",
    features: ["4 BHK", "Penthouse", "City Views", "Premium Amenities"],
    description:
      "Exclusive penthouse with panoramic city and sea views. Premium amenities and luxury finishes in Kochi's most prestigious location.",
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "N/A",
      builtArea: "3500 sq ft",
      parking: "3 cars",
      features: ["Private Terrace", "Jacuzzi", "City Views", "Concierge Service"]
    },
  },
  {
    id: 8,
    name: "Garden View Apartment",
    type: "Premium Apartment",
    category: "apartments",
    price: 7500000,
    location: "Panampilly Nagar, Kochi",
    image: "/placeholder.svg?height=300&width=400",
    features: ["3 BHK", "Garden View", "Premium Location", "Modern Amenities"],
    description:
      "Spacious apartment with beautiful garden views in one of Kochi's most sought-after residential areas. Modern amenities and premium finishes.",
    specifications: {
      bedrooms: 3,
      bathrooms: 3,
      plotSize: "N/A",
      builtArea: "1800 sq ft",
      parking: "2 cars",
      features: ["Club House", "Swimming Pool", "Gym", "Children's Play Area"]
    },
  },
]

// Global variables
let wishlist = JSON.parse(localStorage.getItem("sankalapaWishlist")) || []
let currentCategory = "all"

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  loadProjects()
  updateWishlistCount()
  initializeForms()
  initializeProjectCategories()
  initializeMobileEnhancements()
})

// Navigation functionality
function initializeNavigation() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open")
    })
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("open")
      }
    })
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Project category filtering
function initializeProjectCategories() {
  const categoryBtns = document.querySelectorAll(".category-btn")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentCategory = btn.dataset.category
      loadProjects()
    })
  })
}

// Load and display projects
function loadProjects() {
  const productsGrid = document.getElementById("products-grid")
  if (!productsGrid) return

  const filteredProjects =
    currentCategory === "all" ? projects : projects.filter((project) =>  project.category === currentCategory)

  productsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <div class="product-card" onclick="openProjectModal(${project.id})">
            <div class="product-image">
                <img src="${project.image}" alt="${project.name}">
                <div class="product-actions">
                    <button class="action-btn ${wishlist.includes(project.id) ? "active" : ""}" 
                            onclick="event.stopPropagation(); toggleWishlist(${project.id})"
                            title="Add to Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" 
                            onclick="event.stopPropagation(); inquireProject(${project.id})"
                            title="Inquire Now">
                        <i class="fas fa-phone"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${project.name}</h3>
                <p class="product-type">${project.type} • ${project.location}</p>
                <div class="product-features">
                    ${project.features
                      .slice(0, 3)
                      .map((feature) => `<span class="feature-tag">${feature}</span>`)
                      .join("")}
                </div>
                <div class="product-price">₹${(project.price / 10000000).toFixed(1)} Cr</div>
                <div class="product-buttons">
                    <button class="btn-small btn-outline" onclick="event.stopPropagation(); openProjectModal(${project.id})">
                        View Details
                    </button>
                    <button class="btn-small btn-solid" onclick="event.stopPropagation(); inquireProject(${project.id})">
                        Inquire Now
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Close all modals function
function closeAllModals() {
  document.getElementById("product-modal").classList.remove("open")
  document.getElementById("villa-finder-modal").classList.remove("open")
  document.getElementById("calculator-modal").classList.remove("open")
  document.getElementById("overlay").classList.remove("open")
}

// Project modal functionality
function openProjectModal(projectId) {
  closeAllModals()

  const project = projects.find((p) => p.id === projectId)
  if (!project) return

  const modal = document.getElementById("product-modal")
  const modalBody = document.getElementById("modal-body")

  if (modal && modalBody) {
    modalBody.innerHTML = `
      <div class="product-detail">
        <div class="product-detail-image">
          <img src="${project.image}" alt="${project.name}">
        </div>
        <div class="product-detail-info">
          <h2>${project.name}</h2>
          <p class="product-detail-type">${project.type} • ${project.location}</p>
          <div class="product-detail-price">₹${(project.price / 10000000).toFixed(1)} Crores</div>
          
          <div class="product-detail-features">
            <h4>Key Features</h4>
            <ul class="feature-list">
              ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </div>
          
          <div class="product-detail-features">
            <h4>Specifications</h4>
            <ul class="feature-list">
              <li>Bedrooms: ${project.specifications.bedrooms}</li>
              <li>Bathrooms: ${project.specifications.bathrooms}</li>
              <li>Plot Size: ${project.specifications.plotSize}</li>
              <li>Built Area: ${project.specifications.builtArea}</li>
              <li>Parking: ${project.specifications.parking}</li>
            </ul>
          </div>
          
          <div class="product-detail-features">
            <h4>Premium Amenities</h4>
            <ul class="feature-list">
              ${project.specifications.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </div>
          
          <div class="product-detail-description">
            <h4>Description</h4>
            <p>${project.description}</p>
          </div>
          
          <div class="product-detail-actions">
            <button class="btn-secondary" onclick="toggleWishlist(${project.id})">
              <i class="fas fa-heart ${wishlist.includes(project.id) ? "active" : ""}"></i>
              ${wishlist.includes(project.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
            <button class="btn-primary" onclick="inquireProject(${project.id})">
              <i class="fas fa-phone"></i>
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    `

    modal.classList.add("open")
    const overlay = document.getElementById("overlay")
    if (overlay) {
      overlay.classList.add("open")
    }
  }
}

function closeModal() {
  const modal = document.getElementById("product-modal")
  const overlay = document.getElementById("overlay")
  
  if (modal) {
    modal.classList.remove("open")
  }
  if (overlay) {
    overlay.classList.remove("open")
  }
}

// Wishlist functionality
function toggleWishlist(projectId) {
  const project = projects.find((p) => p.id === projectId)
  if (!project) return

  if (wishlist.includes(projectId)) {
    wishlist = wishlist.filter((id) => id !== projectId)
    showNotification(`${project.name} removed from wishlist!`)
  } else {
    wishlist.push(projectId)
    showNotification(`${project.name} added to wishlist!`)
  }

  updateWishlistCount()
  updateWishlistDisplay()
  saveWishlist()
  loadProjects()
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlist-count")
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length
  }
}

function updateWishlistDisplay() {
  const wishlistItems = document.getElementById("wishlist-items")
  if (!wishlistItems) return

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 2rem;">No projects in wishlist</p>'
    return
  }

  const wishlistProjects = projects.filter((project) => wishlist.includes(project.id))

  wishlistItems.innerHTML = wishlistProjects
    .map(
      (project) => `
        <div class="favorite-item">
            <div class="item-image">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="item-info">
                <div class="item-name">${project.name}</div>
                <div class="item-price">₹${(project.price / 10000000).toFixed(1)} Cr</div>
                <div style="margin-top: 10px;">
                    <button class="btn-small btn-outline" onclick="openProjectModal(${project.id})" style="margin-right: 5px;">View</button>
                    <button class="btn-small btn-solid" onclick="inquireProject(${project.id})">Inquire</button>
                </div>
            </div>
            <button class="remove-favorite-btn" onclick="toggleWishlist(${project.id})" title="Remove from wishlist">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `,
    )
    .join("")
}

function toggleWishlistSidebar() {
  const wishlistSidebar = document.getElementById("wishlist-sidebar")
  if (wishlistSidebar) {
    wishlistSidebar.classList.toggle("open")
  }
}

// Calculator functionality
function toggleCalculator() {
  const calculatorModal = document.getElementById("calculator-modal")
  if (calculatorModal) {
    calculatorModal.classList.add("open")
  }
}

function closeCalculator() {
  const calculatorModal = document.getElementById("calculator-modal")
  if (calculatorModal) {
    calculatorModal.classList.remove("open")
  }
}

function calculateInvestment() {
  const villaType = document.getElementById("calc-villa-type")?.value || "3000"
  const plotSize = document.getElementById("calc-plot-size")?.value || "5000"
  const constructionArea = document.getElementById("calc-construction-area")?.value || "2500"
  const budget = document.getElementById("calc-budget")?.value || "60"
  const tenure = document.getElementById("calc-tenure")?.value || "20"

  // Simple calculation logic
  const baseRate = 2500 // per sq ft
  const constructionCost = parseInt(constructionArea) * baseRate
  const totalInvestment = constructionCost * 1.2 // including other costs
  const monthlyEMI = (totalInvestment * 0.085 * Math.pow(1.085, parseInt(tenure))) / 
                     (12 * (Math.pow(1.085, parseInt(tenure)) - 1))
  const appreciation = totalInvestment * 0.15 * 5 // 15% per year for 5 years

  // Display results
  const resultsDiv = document.getElementById("calculation-results")
  if (resultsDiv) {
    resultsDiv.style.display = "block"
    
    const constructionCostEl = document.getElementById("construction-cost")
    const monthlyEMIEl = document.getElementById("monthly-emi")
    const totalInvestmentEl = document.getElementById("total-investment")
    const appreciationEl = document.getElementById("appreciation")

    if (constructionCostEl) constructionCostEl.textContent = `₹${(constructionCost / 100000).toFixed(1)} L`
    if (monthlyEMIEl) monthlyEMIEl.textContent = `₹${Math.round(monthlyEMI).toLocaleString()}`
    if (totalInvestmentEl) totalInvestmentEl.textContent = `₹${(totalInvestment / 100000).toFixed(1)} L`
    if (appreciationEl) appreciationEl.textContent = `₹${(appreciation / 100000).toFixed(1)} L`
  }
}

function shareCalculation() {
  const message = "Check out my villa investment calculation from Sankalapa Builders!"
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// Inquiry functionality
function inquireProject(projectId) {
  const project = projects.find((p) => p.id === projectId)
  if (!project) return

  const message = `Hi! I'm interested in ${project.name} (${project.type}) located in ${project.location}. Could you please provide more details?`
  const whatsappUrl = `https://wa.me/919847123456?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function inquireWishlist() {
  if (wishlist.length === 0) {
    showNotification("Please add some projects to your wishlist first!")
    return
  }

  const wishlistProjects = projects.filter((project) => wishlist.includes(project.id))
  const projectNames = wishlistProjects.map(p => p.name).join(", ")
  const message = `Hi! I'm interested in the following villa projects: ${projectNames}. Could you please provide more details and pricing?`
  const whatsappUrl = `https://wa.me/919847123456?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// Forms initialization
function initializeForms() {
  const customForm = document.getElementById("custom-form")
  const contactForm = document.getElementById("contact-form")
  const newsletterForm = document.getElementById("newsletter-form")

  if (customForm) {
    customForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(customForm)
      const data = Object.fromEntries(formData)
      
      const message = `Custom Villa Inquiry:
Name: ${data.name}
Phone: ${data.phone}
Villa Type: ${data.type}
Bedrooms: ${data.bedrooms}
Plot Size: ${data['plot-size']} sq ft
Construction Area: ${data['construction-area']} sq ft
Budget: ${data.budget}
Location: ${data.location}
Requirements: ${data.requirements}`

      const whatsappUrl = `https://wa.me/919847123456?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      showNotification("Thank you! We'll contact you soon.")
      customForm.reset()
    })
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)
      
      const message = `Villa Construction Inquiry:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
District: ${data.district}
Message: ${data.message}`

      const whatsappUrl = `https://wa.me/919847123456?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      showNotification("Thank you! We'll contact you soon.")
      contactForm.reset()
    })
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      showNotification("Thank you for subscribing to our newsletter!")
      newsletterForm.reset()
    })
  }
}

// Floating action buttons
function openWhatsAppChat() {
  const message = "Hi! I'm interested in Sankalapa Builders' villa construction services. Could you please provide more information?"
  const whatsappUrl = `https://wa.me/919847123456?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// Notification functionality
function showNotification(message) {
  const notification = document.createElement("div")
  notification.classList.add("notification")
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--primary-green);
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `
  
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

// Save wishlist to localStorage
function saveWishlist() {
  localStorage.setItem("sankalapaWishlist", JSON.stringify(wishlist))
}

// Add CSS for notifications
const notificationStyles = document.createElement("style")
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(notificationStyles)

// Close modal when clicking overlay
document.addEventListener("click", (e) => {
  if (e.target.id === "overlay") {
    closeModal()
    closeCalculator()
  }
})

// Mobile enhancements
function initializeMobileEnhancements() {
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileNavToggle = document.getElementById("mobile-nav-toggle")

  if (mobileNavToggle && mobileMenu) {
    mobileNavToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open")
    })
  }
}

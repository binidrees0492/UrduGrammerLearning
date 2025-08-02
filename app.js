const categoryColors = {
  "Pronouns": "blue-100",
  "Possessives": "green-100",
  "Verbs": "purple-100",
  "Directions & Prepositions": "pink-100",
  "WH Questions": "yellow-100",
  "Nouns": "indigo-100"
};

const cardColors = {
  "Pronouns": "blue-200",
  "Possessives": "green-200",
  "Verbs": "purple-200",
  "Directions & Prepositions": "pink-200",
  "WH Questions": "yellow-200",
  "Nouns": "indigo-200"
};

const wordGroups = document.getElementById("wordGroups");
const categoryNav = document.getElementById("categoryNav");
const showUrdu = document.getElementById("showUrdu");
const showExamples = document.getElementById("showExamples");
const sortOrder = document.getElementById("sortOrder");
const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
let currentCategory = "All";
let isSidebarOpen = false;

function toggleSidebarMenu() {
  isSidebarOpen = !isSidebarOpen;
  sidebar.classList.toggle("sidebar-open", isSidebarOpen);
  if (window.innerWidth > 640) {
    mainContent.classList.toggle("main-content-shift", isSidebarOpen);
  }
}

function renderCategoryNav() {
  categoryNav.innerHTML = "";
  const categories = ["All", ...new Set(wordData.map(word => word.type))].sort();
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = `w-full px-4 py-2 text-left rounded-lg text-base sm:text-lg font-semibold text-white ${currentCategory === category ? "category-button active" : "bg-blue-600 hover:bg-blue-700"}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      currentCategory = category;
      renderGroups();
      document.querySelectorAll(".category-button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      if (window.innerWidth <= 640) {
        toggleSidebarMenu();
      }
    });
    categoryNav.appendChild(button);
  });
}

function renderGroups() {
  wordGroups.innerHTML = "";
  let filteredWords = currentCategory === "All" ? wordData : wordData.filter(word => word.type === currentCategory);
  
  filteredWords = filteredWords.sort((a, b) => {
    if (sortOrder.value === "alphabetical") {
      return a.english.localeCompare(b.english);
    } else {
      return b.usage - a.usage;
    }
  });

  const groups = currentCategory === "All" ? [...new Set(filteredWords.map(word => word.type))].sort() : [currentCategory];
  
  groups.forEach(group => {
    const groupDiv = document.createElement("div");
    groupDiv.className = `p-4 rounded-lg shadow-md mb-4 bg-${categoryColors[group] || "blue-100"}`;
    
    const groupTitle = document.createElement("h2");
    groupTitle.className = "text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3";
    groupTitle.textContent = group;
    groupDiv.appendChild(groupTitle);
    
    const cardGrid = document.createElement("div");
    cardGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3";
    
    const groupWords = filteredWords.filter(word => word.type === group);
    groupWords.forEach(word => {
      const card = document.createElement("div");
      card.className = `p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition bg-${cardColors[word.type] || "blue-200"}`;
      
      const english = document.createElement("h3");
      english.className = "text-lg sm:text-xl md:text-2xl font-bold text-blue-900";
      english.textContent = word.english;
      
      const urdu = document.createElement("p");
      urdu.className = `urdu-font text-base sm:text-lg text-gray-800 ${showUrdu.checked ? "" : "hidden"}`;
      urdu.textContent = `(${word.urdu})`;
      
      const example = document.createElement("p");
      example.className = `text-gray-700 italic text-sm sm:text-base ${showExamples.checked ? "" : "hidden"}`;
      example.textContent = `Example: ${word.example}`;
      
      card.appendChild(english);
      card.appendChild(urdu);
      card.appendChild(example);
      
      card.addEventListener("click", () => {
        const audio = new Audio(word.audio);
        audio.play().catch(err => console.error("Audio playback error:", err));
      });
      
      cardGrid.appendChild(card);
    });
    
    groupDiv.appendChild(cardGrid);
    wordGroups.appendChild(groupDiv);
  });
}

toggleSidebar.addEventListener("click", toggleSidebarMenu);
showUrdu.addEventListener("change", renderGroups);
showExamples.addEventListener("change", renderGroups);
sortOrder.addEventListener("change", renderGroups);

// Initial render
renderCategoryNav();
renderGroups();

const allSuggestions = [
    
    "cách đánh ám",
    "cách def rally",
    "cách qua ải",
    "cách lên đồ",
    "cách tiết kiệm rss",
]; 

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');
const clearButton = document.getElementById('clearButton');

// -------------------------
// 1. HÀM CHUYỂN HƯỚNG
// -------------------------
function handleSearch(query) {
    const q = query.trim().toLowerCase();

    const routes = {
        "cách def rally": "cach-def-rally.html",
        "cách đánh ám": "cach-danh-am.html",
        "cách qua ải": "cach-qua-ai.html",
        "cách lên đồ": "cach-len-do.html",
        "cách tiết kiệm rss": "cach-tiet-kiem-rss.html",
    };

    if (routes[q]) {
        window.location.href = routes[q];
    }
}

// -------------------------
// 2. NÚT X CLEAR
// -------------------------
clearButton.addEventListener('click', () => {
    searchInput.value = "";  
    clearButton.style.display = "none";  
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = "none";
    searchInput.focus();
});

// -------------------------
// 3. GỢI Ý
// -------------------------
searchInput.addEventListener('input', () => {
    const text = searchInput.value.toLowerCase();

    clearButton.style.display = text ? "block" : "none";

    if (!text) {
        suggestionsBox.innerHTML = "";
        suggestionsBox.style.display = "none";
        return;
    }

    const filtered = allSuggestions.filter(item =>
        item.toLowerCase().includes(text)
    );

    displaySuggestions(filtered);
});

// -------------------------
// 4. ENTER
// -------------------------
searchInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch(searchInput.value);
        suggestionsBox.style.display = "none";
    }
});

// -------------------------
// 5. HIỂN THỊ GỢI Ý
// -------------------------
function displaySuggestions(list) {
    suggestionsBox.innerHTML = "";

    if (list.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    list.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('suggestion-item');
        div.textContent = item;

        div.addEventListener("click", () => {
            searchInput.value = item;
            clearButton.style.display = "block";
            suggestionsBox.style.display = "none";
            handleSearch(item);
        });

        suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = "block";
}

// -------------------------
// 6. CLICK RA NGOÀI
// -------------------------
document.addEventListener("click", e => {
    if (!e.target.closest(".search-container")) {
        suggestionsBox.style.display = "none";
    }
});

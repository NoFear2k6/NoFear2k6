const allSuggestions = [
    "cách rally kì quan",
    "cách đánh ám",
    "cách def rally", // Đây là cụm từ đặc biệt nè
    "cách qua ải",
    "cách lên đồ",
    "cách tiết kiệm rss",
]; 

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');
const clearButton = document.getElementById('clearButton'); // 👈 BỔ SUNG: LẤY NÚT X

// Hàm kiểm tra và chuyển hướng
function handleSearch(query) {
    const lowerCaseQuery = query.trim().toLowerCase();
    
    
    if (lowerCaseQuery === 'cách def rally') {
        // NẾU ĐÚNG: Chuyển thẳng tới trang HTML bạn đã tạo
        window.location.href = 'cach-def-rally.html'; // Đổi lại tên file không dấu/không khoảng trắng
        
    } 
    // Nếu không khớp, không làm gì cả (ở lại trang)
}

function handleSearch(query) {
    const lowerCaseQuery = query.trim().toLowerCase();
    
    
    if (lowerCaseQuery === 'cách đánh ám') {
        // NẾU ĐÚNG: Chuyển thẳng tới trang HTML bạn đã tạo
        window.location.href = 'cach-danh-am.html'; // Đổi lại tên file không dấu/không khoảng trắng
        
    } 
    // Nếu không khớp, không làm gì cả (ở lại trang)
}


function handleSearch(query) {
    const lowerCaseQuery = query.trim().toLowerCase();
    
    
    if (lowerCaseQuery === 'cách qua ải') {
        // NẾU ĐÚNG: Chuyển thẳng tới trang HTML bạn đã tạo
        window.location.href = 'cach-qua-ai.html'; // Đổi lại tên file không dấu/không khoảng trắng
        
    } 
    // Nếu không khớp, không làm gì cả (ở lại trang)
}

function handleSearch(query) {
    const lowerCaseQuery = query.trim().toLowerCase();
    
    
    if (lowerCaseQuery === 'cách lên đồ') {
        // NẾU ĐÚNG: Chuyển thẳng tới trang HTML bạn đã tạo
        window.location.href = 'cach-len-do.html'; // Đổi lại tên file không dấu/không khoảng trắng
        
    } 
    // Nếu không khớp, không làm gì cả (ở lại trang)
}

function handleSearch(query) {
    const lowerCaseQuery = query.trim().toLowerCase();
    
    
    if (lowerCaseQuery === 'cách tiết kiệm rss') {
        // NẾU ĐÚNG: Chuyển thẳng tới trang HTML bạn đã tạo
        window.location.href = 'cach-tiet-kiem-rss.html'; // Đổi lại tên file không dấu/không khoảng trắng
        
    } 
    // Nếu không khớp, không làm gì cả (ở lại trang)
}

// Bổ sung sự kiện CLICK cho nút X
clearButton.addEventListener('click', function() {
    searchInput.value = ''; // 1. Xóa sạch nội dung input
    clearButton.style.display = 'none'; // 2. Ẩn nút X đi
    suggestionsBox.innerHTML = ''; // 3. Xóa hết gợi ý
    suggestionsBox.style.display = 'none'; // 4. Ẩn hộp gợi ý
    searchInput.focus(); // Tập trung lại vào ô tìm kiếm
});


// Lắng nghe sự kiện người dùng gõ phím
searchInput.addEventListener('input', function() {
    const inputText = searchInput.value.toLowerCase(); // Lấy chữ người dùng gõ, đổi về chữ thường
    
    // ⭐️ LOGIC MỚI: HIỂN THỊ NÚT X ⭐️
    if (searchInput.value.length > 0) {
        clearButton.style.display = 'block'; // Hiện nút X nếu có chữ
    } else {
        clearButton.style.display = 'none'; // Ẩn nút X nếu không có chữ
    }

    // Nếu không gõ gì thì ẩn hộp gợi ý đi
    if (inputText.length === 0) {
        suggestionsBox.innerHTML = '';
        suggestionsBox.style.display = 'none';
        return;
    }
    
    // Bước 3: Lọc gợi ý
    const filteredSuggestions = allSuggestions.filter(item => 
        item.toLowerCase().includes(inputText) // Lọc những mục có chứa chữ đang gõ
    );
    
    // Bước 4: Hiển thị gợi ý
    displaySuggestions(filteredSuggestions);
});

// Xử lý khi người dùng nhấn Enter
searchInput.addEventListener('keypress', function(event) {
    // 1. Kiểm tra xem phím nhấn có phải là Enter không
    if (event.key === 'Enter') {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        
        const query = searchInput.value;
        
        // Ẩn hộp gợi ý đi
        suggestionsBox.style.display = 'none';
        
        // Gọi hàm xử lý chuyển hướng
        handleSearch(query);
    }
});


// Hàm hiển thị kết quả
function displaySuggestions(suggestions) {
    suggestionsBox.innerHTML = ''; // Xóa hết gợi ý cũ

    if (suggestions.length === 0) {
        suggestionsBox.style.display = 'none'; // Ẩn đi nếu không có kết quả
        return;
    }
    
    // Tạo từng dòng gợi ý
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.classList.add('suggestion-item');
        item.textContent = suggestion;
        
        // Khi click vào gợi ý
        item.addEventListener('click', function() {
            const clickedSuggestion = item.textContent;
            
            // Điền vào ô tìm kiếm
            searchInput.value = clickedSuggestion;
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none'; // Ẩn hộp gợi ý
            
            // ⭐️ BỔ SUNG: Hiển thị nút X sau khi click vào gợi ý ⭐️
            clearButton.style.display = 'block'; 
            
            // Gọi hàm xử lý chuyển hướng (Áp dụng cho cả click)
            handleSearch(clickedSuggestion);
        });
        
        suggestionsBox.appendChild(item);
    });

    suggestionsBox.style.display = 'block'; // Hiển thị hộp gợi ý ra
}

// Thêm một chút xíu "magic" để khi click ra ngoài thì hộp gợi ý biến mất
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        suggestionsBox.style.display = 'none';
    }
});
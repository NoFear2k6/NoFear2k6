<?php
// Bật Session (Quan trọng cho việc lưu trạng thái đăng nhập)
session_start();

// Kiểm tra xem Form đã được gửi đi chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Lấy dữ liệu từ Form (Nên dùng hàm dọn dẹp dữ liệu thực tế)
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $gioitinh = $_POST['gioitinh'] ?? '';
    $sodienthoai = $_POST['sodienthoai'] ?? '';
    $ngaythangnamsinh = $_POST['ngaythangnamsinh'] ?? '';
    
    // **Trong thực tế, bạn cần thêm mật khẩu và mã hóa nó (hashing)**
    // Ví dụ tạm: $password_hash = password_hash("123456", PASSWORD_DEFAULT); 
    
    // 2. Kiểm tra dữ liệu (Ví dụ: Email không được trống)
    if (empty($name) || empty($email)) {
        $_SESSION['error'] = "Vui lòng điền đầy đủ Họ và tên và Email.";
        header("Location: index.html"); // Quay lại trang đăng ký
        exit;
    }

    // 3. Xử lý lưu dữ liệu (Ví dụ đơn giản: Giả lập lưu vào Database)
    // ***PHẦN NÀY LÀ CẦN KẾT NỐI VỚI DATABASE THỰC TẾ***
    
    // Giả lập lưu thành công:
    $_SESSION['success'] = "Đăng ký thành công! Bạn có thể đăng nhập ngay.";
    
    // Thường sau khi đăng ký thành công sẽ chuyển đến trang Đăng nhập
    header("Location: dangnhap.php"); 
    exit;
} else {
    // Nếu không phải phương thức POST, chuyển về trang chủ
    header("Location: index.html");
    exit;
}
?>
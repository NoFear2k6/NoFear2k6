<?php
session_start();
// Khởi tạo thông báo
$message = $_SESSION['success'] ?? ($_SESSION['error'] ?? '');
unset($_SESSION['success'], $_SESSION['error']); // Xóa thông báo sau khi hiển thị

// Kiểm tra xem Form đã được gửi đi chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email_or_username = $_POST['user_input'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // 1. **KẾT NỐI VÀ KIỂM TRA DATABASE Ở ĐÂY**
    
    // Giả lập xác thực thành công:
    if ($email_or_username == "admin@example.com" && $password == "123") {
        
        // 2. TẠO SESSION ĐĂNG NHẬP THÀNH CÔNG
        $_SESSION['logged_in'] = true;
        $_SESSION['user_email'] = $email_or_username;
        $_SESSION['is_admin'] = true; // Ví dụ: Cấp quyền Admin để đăng bài
        
        header("Location: trangchu.php"); // Chuyển đến trang chủ/dashboard
        exit;
    } else {
        $message = "Sai email hoặc mật khẩu. Vui lòng thử lại.";
    }
}
?>

<!DOCTYPE html>
<html>
<head><title>Đăng nhập</title></head>
<body>
    <h2>Đăng nhập Hệ thống</h2>
    <p style="color:red;"><?php echo $message; ?></p>
    
    <form action="dangnhap.php" method="post">
        Email/Tên đăng nhập: <input type="text" name="user_input" required><br><br>
        Mật khẩu: <input type="password" name="password" required><br><br>
        <input type="submit" value="Đăng nhập">
    </form>
</body>
</html>
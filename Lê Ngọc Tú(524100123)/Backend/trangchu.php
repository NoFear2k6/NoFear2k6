<?php
session_start();

// Kiểm tra trạng thái đăng nhập
$is_logged_in = $_SESSION['logged_in'] ?? false;
$can_post = $_SESSION['is_admin'] ?? false; // Giả sử chỉ Admin mới được đăng bài
?>

<!DOCTYPE html>
<html>
<head><title>Trang Bài Viết</title></head>
<body>
    <h1>Chào mừng bạn đến với Trang Bài Viết!</h1>
    
    <?php if ($is_logged_in): ?>
        <p>Bạn đã đăng nhập với Email: <?php echo $_SESSION['user_email']; ?></p>
        <p><a href="dangxuat.php">Đăng xuất</a></p>
    <?php else: ?>
        <p>Bạn chưa đăng nhập. <a href="dangnhap.php">Đăng nhập ngay</a></p>
    <?php endif; ?>

    <h2>Nội dung Bài Viết Mới Nhất</h2>
    <?php if ($can_post): ?>
        <h3><a href="dangbai.php">Đăng Bài Viết Mới</a></h3>
    <?php endif; ?>

    <?php if ($is_logged_in): ?>
        <form action="xulybinhluan.php" method="post">
            <textarea name="binhluan" placeholder="Viết bình luận của bạn..." required></textarea><br>
            <input type="submit" value="Bình luận">
        </form>
    <?php else: ?>
        <p>Vui lòng đăng nhập để bình luận.</p>
    <?php endif; ?>
</body>
</html>

# Hướng dẫn triển khai (Deployment Guide) - Secret Thank You Letter

Chào mừng bạn! Đây là hướng dẫn để bạn có thể đưa ứng dụng lá thư bí mật này lên internet và chia sẻ với mọi người.

## 🚀 Cách 1: Triển khai lên Vercel (Khuyên dùng)
Vercel là nền tảng tốt nhất và dễ nhất cho các ứng dụng React.

1.  **Tạo kho lưu trữ (Repository):** Tải tất cả các file này lên một repo mới trên [GitHub](https://github.com).
2.  **Đăng nhập Vercel:** Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
3.  **Import dự án:** Chọn "Add New" -> "Project", sau đó chọn repository bạn vừa tạo.
4.  **Cấu hình Biến môi trường (QUAN TRỌNG):**
    *   Trong quá trình cài đặt (trước khi nhấn Deploy), hãy tìm phần **Environment Variables**.
    *   Thêm một biến mới với Name là `API_KEY`.
    *   Value là mã Gemini API Key của bạn (lấy tại [Google AI Studio](https://aistudio.google.com/app/apikey)).
5.  **Hoàn tất:** Nhấn "Deploy". Sau khoảng 1 phút, bạn sẽ có một đường link (URL) để gửi cho bạn bè!

## 🌐 Cách 2: Triển khai lên Netlify
Tương tự như Vercel, Netlify cũng rất mạnh mẽ và miễn phí:
1.  Kết nối GitHub với Netlify.
2.  Chọn repository của bạn.
3.  Trong phần **Site configuration** -> **Environment variables**, hãy thêm `API_KEY` của bạn.
4.  Nhấn Deploy.

## 💻 Cách chạy thử trên máy tính cá nhân (Local)
Nếu bạn đã cài đặt [Node.js](https://nodejs.org/), bạn có thể chạy ứng dụng ngay tại máy:
1.  Mở thư mục chứa code bằng Terminal/Command Prompt.
2.  Chạy lệnh: `npx serve .`
3.  Mở trình duyệt và truy cập: `http://localhost:3000`.

## ⚠️ Lưu ý quan trọng
*   **Bảo mật:** Không bao giờ dán trực tiếp API Key vào trong code rồi đẩy lên GitHub công khai. Hãy luôn sử dụng "Environment Variables" như hướng dẫn ở trên.
*   **ES Modules:** Ứng dụng này sử dụng kiến trúc ES Modules (nhập thư viện từ `esm.sh`), giúp nó rất nhẹ và không cần bước build phức tạp.

Chúc bạn có một món quà tuyệt vời và ý nghĩa! 💖

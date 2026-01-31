# HƯỚNG DẪN SỬ DỤNG ZALODEV AI ASSISTANT

Chào mừng bạn đến với môi trường phát triển Zalo Mini App tích hợp AI. Dưới đây là tóm tắt các chức năng chính để bạn làm chủ công cụ này.

## 1. TRỢ LÝ AI (AI CHAT)
Hệ thống tích hợp 4 vai trò (Persona) chuyên biệt. Bấm vào các icon ở thanh công cụ Chat để chuyển đổi:

- **DEV (Developer - Icon < >):** Chế độ mặc định. Viết code, logic, React, ZMP-UI.
- **DEBUG (Debugger - Icon Con bọ):** Chuyên gia sửa lỗi. Gửi log lỗi vào đây, AI sẽ phân tích nguyên nhân sâu xa.
- **DESIGN (Designer - Icon Bảng màu):** Chuyên gia UI/UX. Tạo giao diện đẹp, hiệu ứng CSS, Tailwind.
- **ARCH (Architect - Icon Mạng):** Kiến trúc sư. Tư vấn cấu trúc thư mục, Clean Code, tối ưu hiệu suất.

## 2. TRÌNH SOẠN THẢO CODE (EDITOR)
- **AI Inline Edit (Ctrl + K):** 
  - Bôi đen một đoạn code hoặc đặt con trỏ tại dòng bất kỳ.
  - Nhấn tổ hợp phím **Ctrl + K** (hoặc Cmd + K trên Mac).
  - Nhập yêu cầu (ví dụ: "Thêm try-catch", "Sửa style màu đỏ").
  - AI sẽ tự động sửa code trực tiếp trong file.
- **ZMP Snippets:** Gõ `ZaloPage`, `ZButton`, `ZInput` để sinh nhanh code mẫu.

## 3. QUẢN LÝ FILE (EXPLORER)
- **Tạo file mới:** Bấm nút "Tạo mới" để thêm file (hỗ trợ .tsx, .ts, .css, .json).
- **Upload file:** Bấm "Tải lên" để import code từ máy tính.
- **Download ZIP:** Xuất toàn bộ dự án để nộp hoặc deploy.
- **GitHub Sync:** Đẩy code trực tiếp lên GitHub để quản lý phiên bản.

## 4. CƠ SỞ TRI THỨC (KNOWLEDGE BASE)
- Bấm nút **"Docs"** ở góc phải thanh Chat.
- Tại đây bạn có thể "dạy" cho AI các kiến thức mới (ví dụ: Quy tắc nghiệp vụ công ty, API document riêng).
- AI sẽ đọc các tài liệu này trước khi trả lời câu hỏi của bạn.

## 5. PREVIEW & DEBUG
- **Preview:** Mô phỏng giao diện Zalo Mini App trên điện thoại.
- **DevTools:** Bấm nút "Debug" (hình con bọ) ở màn hình Preview để xem Console Log, Network Request và Storage.

## 6. QUY TRÌNH DEPLOY (ĐƯA LÊN ZALO)
1. Hoàn thiện code trên ZaloDev AI.
2. Bấm nút **"How to Deploy"** ở góc trái dưới cùng.
3. Tải source code (.zip) về máy.
4. Giải nén và mở bằng VS Code.
5. Chạy lệnh: `npm install` -> `zmp login` -> `zmp deploy`.

## 7. CẤU HÌNH API
- Bấm icon **Bánh răng (Settings)** để đổi nhà cung cấp AI.
- Hỗ trợ: **Google Gemini** (Miễn phí & Nhanh), **OpenAI**, **DeepSeek**, **Groq**.

---
*Mẹo: Nếu gặp lỗi, hãy thử chuyển sang chế độ DEBUG và paste lỗi vào chat.*

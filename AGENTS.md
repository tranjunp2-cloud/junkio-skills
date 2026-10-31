# Chọn skill trong junkio-skills

Thư mục này có hai bộ: `web-builder/` và `video-builder/`. Chọn theo kết quả người dùng muốn nhận, không chỉ theo từ khóa như “HTML”, “animation” hoặc “portfolio”.

## Chọn bộ cần đọc

| Kết quả cần làm | Entrypoint |
|---|---|
| Website, landing page, web app UI, portfolio, responsive, interaction trên trình duyệt | [web-builder/skills/web-builder/SKILL.md](web-builder/skills/web-builder/SKILL.md) |
| Video render, product film, clip mạng xã hội, voiceover, nhạc, phụ đề, sửa/cắt/encode media | [video-builder/skills/video-builder/SKILL.md](video-builder/skills/video-builder/SKILL.md) |

1. Ưu tiên bộ người dùng chỉ định rõ; kiểm tra scope trong skill và giữ các yêu cầu của dự án.
2. Với dự án có sẵn, đọc hướng dẫn và source của dự án đó. HTML/GSAP có thể là source video HyperFrames: nếu đầu ra là video thì dùng bộ video, không chạy workflow thiết kế website.
3. Scroll animation, hover hoặc responsive trên một trang vẫn là việc web. Một video quay giao diện hoặc motion intro xuất MP4 là việc video.
4. Nếu chỉ nhúng/thay một video đã có trên website: dùng phạm vi tích hợp của bộ web và đọc thêm [portfolio-video.md](video-builder/skills/video-builder/references/portfolio-video.md). Không dựng lại video hay thiết kế lại cả trang.
5. Nếu cần tạo/sửa video rồi nhúng vào trang: hoàn tất media bằng bộ video, sau đó sửa phần tích hợp web. Giữ rõ file đầu ra và route/section nhận file.
6. Nếu yêu cầu chỉ là viết kịch bản, tư vấn hoặc kiểm kê skill, chỉ làm đầu ra đó. Không tự tạo job có phí, render, publish, commit hoặc push ngoài yêu cầu.
7. Chỉ đọc các reference liên quan mà entrypoint dẫn đến. Không nạp cả hai bộ hoặc toàn bộ danh mục nguồn cho một tác vụ nhỏ.
8. Nếu chưa rõ đầu ra là website hay video, kiểm tra context/file hiện có trước; chỉ hỏi khi thông tin đó thực sự quyết định cách thực hiện.

## Sử dụng và bảo trì bộ skill

- Đọc [web-builder/README.md](web-builder/README.md) hoặc [video-builder/README.md](video-builder/README.md) khi cần tổng quan và ví dụ.
- Giữ skill, scripts và references trong đúng bộ. Ví dụ website nằm ở `web-builder/examples/`.
- Marketplace gốc `.claude-plugin/marketplace.json` trỏ tới `./web-builder` và `./video-builder`. Nếu di chuyển thư mục, cập nhật source và mọi liên kết liên quan.
- Giữ cấu trúc `skills/<skill-name>/SKILL.md` trong từng plugin. Không tạo bản sao skill ở nhiều vị trí khiến AI đọc nhầm phiên bản.
- Danh mục video là bản kiểm kê nguồn, không phải bằng chứng provider đã đăng nhập hoặc đủ quota. Dò công cụ thực tế khi cần dùng.

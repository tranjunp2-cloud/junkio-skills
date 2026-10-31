# Video Builder

Bộ skill dựng và chỉnh video của Junkio. [AGENTS.md ở gốc](../AGENTS.md) hướng dẫn chọn đúng bộ khi có cả công việc web và video.


Bộ hướng dẫn tiếng Việt, cập nhật **30/10/2026**, tổng hợp từ skill hiện có và quy trình đã dùng trong các dự án video của Junkio.

- [Skill điều phối video-builder](skills/video-builder/SKILL.md)
- [Danh mục skill, công cụ và trạng thái thực tế](skills/video-builder/references/skill-catalog.md)
- [Quy trình từ brief → storyboard → dựng → kiểm tra → bàn giao](skills/video-builder/references/workflow.md)
- [Chọn HyperFrames, Remotion, motion-graphics hoặc FFmpeg](skills/video-builder/references/engines.md)
- [Phân tích kịch bản TikTok/Reels: vì sao chưa thu hút và hướng nâng cấp](skills/video-builder/references/social-script-review.md)
- [Sửa lời đọc, tốc độ, nhạc và phụ đề](skills/video-builder/references/audio-captions.md)
- [Kiểm tra bản xuất và tạo bản web](skills/video-builder/references/review-delivery.md)
- [Đưa video vào portfolio và frame laptop](skills/video-builder/references/portfolio-video.md)

Có thể dùng ngay bằng cách đưa đường dẫn `skills/video-builder/SKILL.md` cho agent đọc, kèm thư mục dự án và yêu cầu. Ví dụ:

> Dùng skill video-builder trong junkio-skills để dựng video giới thiệu dự án này từ hình ảnh hiện có, có lời đọc tiếng Việt và bản MP4 dọc.

> Dùng video-builder phân tích kịch bản TikTok này: vì sao chưa thu hút và đề xuất hướng hay hơn trước khi dựng.

> Dùng video-builder sửa câu thoại được chỉ định, căn lại phụ đề và xuất bản mới; giữ nguyên các phần còn lại.

> Dùng video-builder thay slideshow trong frame laptop bằng video đã có và kiểm tra playback trên portfolio.

`video-builder` được khai báo trong marketplace local. Việc cập nhật thư mục không tự cài plugin vào mọi ứng dụng hoặc publish lên GitHub. Chỉ dùng lệnh cài từ marketplace GitHub sau khi bản mới đã được đưa lên remote:

```text
/plugin install video-builder@junkio-skills
```

Gói gồm hướng dẫn tổng hợp và [danh mục nguồn có kiểm chứng](skills/video-builder/references/source-inventory.json), không sao chép toàn bộ skill bên thứ ba hoặc media dự án. HyperFrames, Remotion, provider tạo sinh và tài khoản/credit cần sẵn có khi workflow tương ứng dùng đến; không phải tất cả đều bắt buộc. Phần kiểm kê phân biệt file skill tồn tại, tool được cung cấp và workflow đã thực sự chạy.


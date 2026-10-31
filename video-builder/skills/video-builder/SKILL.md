---
name: video-builder
description: Create and revise product introductions, portfolio films, explainers and social videos from existing project assets. Choose the existing video engine, build a timed story, edit voiceovers and captions, verify the exported media, and integrate it into a portfolio when requested. Also reviews social-video scripts (hook, takeaway, proof, CTA) and proposes stronger TikTok/Reels storylines. Use for making or editing videos, critiquing a script that feels unengaging, shortening or removing narration, replacing showcase slides with video, or exporting alternate cuts.
license: MIT
---

# Junkio Video Builder

## Phạm vi và chọn bộ

Dùng bộ này khi đầu ra cần tạo/sửa là video, audio hoặc phụ đề. Với yêu cầu chỉ đặt một file video đã có vào website, ưu tiên phần tích hợp của bộ web-builder và đọc reference portfolio-video của bộ này; không chạy lại quy trình dựng phim. Khi cần cả hai, dựng/xuất video trước rồi tích hợp vào web. Hướng dẫn chọn bộ chung nằm trong AGENTS.md ở gốc junkio-skills khi đọc trực tiếp repository.

Đưa nội dung thật của dự án thành video có thể chỉnh sửa và bàn giao. Với một yêu cầu sửa nhỏ, sửa đúng phần đó; không dựng lại cả phim hay đổi engine.

## Chọn đường đi

| Yêu cầu | Đọc và thực hiện |
|---|---|
| Video mới từ brief, website, screenshot hoặc footage | [Quy trình sản xuất](references/workflow.md) |
| Sửa video/source đang có | Xác định source mới nhất, rồi [chọn engine](references/engines.md) |
| Kịch bản TikTok/Reels chưa thu hút, cần chấm và đề xuất hướng mới | [Phân tích kịch bản mạng xã hội](references/social-script-review.md) |
| Thêm, bỏ, tăng tốc hoặc đổi lời đọc; phụ đề | [Âm thanh và phụ đề](references/audio-captions.md) |
| Xuất MP4, kiểm tra, tạo bản web hoặc bản dọc | [Kiểm tra và bàn giao](references/review-delivery.md) |
| Đưa video vào case study, frame laptop, autoplay | [Video trên portfolio](references/portfolio-video.md) |
| Tìm skill/provider phù hợp hoặc xem bộ công cụ hiện có | [Danh mục skill](references/skill-catalog.md) |

## Nguyên tắc làm việc

1. Đọc `AGENTS.md`, cấu hình và tình trạng chỉnh sửa của dự án. Tách rõ source, asset gốc, proxy và video đã render; không suy ra bản mới nhất chỉ từ tên MP4.
2. Giữ engine, ngôn ngữ, giọng đọc, tỷ lệ, font và nội dung đang dùng, trừ phần người dùng yêu cầu thay. Đọc skill framework tại môi trường hiện tại trước khi viết code cho framework đó.
3. Tái sử dụng tài nguyên đúng dự án. Phân biệt giao diện sản phẩm thật với concept; không bịa dữ liệu, tính năng đã ship hoặc kết quả kinh doanh.
4. Chỉ dùng provider khi cần. Có file skill không đồng nghĩa API đã đăng nhập, đủ credit hay hỗ trợ tiếng Việt. Dùng tool được kết nối nếu phù hợp; kiểm tra khả năng, quyền và chi phí trước khi gửi tác vụ có tính phí. Không tự đổi sang gói trả phí khi hết quota.
5. Mỗi lần sửa một đoạn âm thanh phải xét cả thời gian clip, phụ đề và các cue liên quan. Giữ file gốc để có thể quay lại; đặt tên bản xuất mới rõ ràng.
6. Xem khung hình thật ở đoạn vừa đổi, chạy kiểm tra phù hợp và kiểm tra file đã encode. Đo waveform không thay thế nghe thử; đọc metadata không chứng minh nội dung đúng.
7. Làm trọn kết quả người dùng yêu cầu và đã cho phép. Yêu cầu cập nhật video bàn giao gồm xuất bản sửa; yêu cầu chỉ viết kịch bản hay xem preview không tự mở rộng thành publish/upload. Không mặc định commit, push hoặc gửi feedback ra ngoài.
8. Bàn giao đúng file cuối cùng, đường dẫn và thay đổi chính. Nếu môi trường hỗ trợ, hiển thị video trực tiếp. Ghi giới hạn kiểm tra thực tế, không nói đã nghe/xem toàn bộ nếu chưa làm.

## Phạm vi của gói này

Đây là skill điều phối và tài liệu tổng hợp của Junkio, không phải bản sao tất cả dependency. Danh mục ghi nhận những skill đã tìm thấy trên máy ngày **30/10/2026**. Khi dùng ở máy khác, dò lại skill/provider hiện có; chọn cách làm tương đương phù hợp nếu dependency không có. Không tự cài toàn bộ danh mục.

Các hướng dẫn chi tiết chỉ đọc khi công việc cần. Không áp dụng đồng thời mọi quy tắc thẩm mỹ của HyperFrames, Remotion và motion-graphics: chúng phục vụ các pipeline khác nhau.

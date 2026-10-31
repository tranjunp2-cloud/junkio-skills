# Đưa video lên portfolio

Chỉ áp dụng khi công việc bao gồm sửa website. Đây là playback trên trình duyệt, khác với media timeline trong engine render.

## Đặt đúng vị trí

- Nếu người dùng yêu cầu thay slide trong laptop, gắn video vào viewport của laptop, giữ shell và tỷ lệ; bỏ slide/section video cũ gây trùng.
- Dùng `object-fit: contain` khi cần đọc đầy đủ UI; `cover` chỉ khi crop vẫn giữ nội dung quan trọng và đã xem ở mobile.
- Đặt lớp frame sao cho không chặn controls; nếu là ảnh overlay trang trí thì không nhận pointer events.
- Có poster, kích thước hoặc aspect ratio để không nhảy layout. Video dưới fold có thể `preload="none"` và tải khi cần; cân nhắc `metadata` cho trường hợp cần thời lượng trước playback.

## Autoplay và âm thanh

Thiết kế autoplay khi vào viewport ở trạng thái muted + playsInline, có nút Play/Pause và Bật/Tắt tiếng rõ ràng. Trình duyệt có thể từ chối autoplay; giữ thao tác Play thủ công. Không hứa tự phát có tiếng trước tương tác của khách truy cập.

Tạm dừng khi ra khỏi viewport hoặc tab ẩn. Tôn trọng `prefers-reduced-motion` và thao tác Pause của người xem; không tự bật lại chỉ vì họ cuộn qua lần nữa. Cleanup observer/event listeners khi component unmount.

Khi người xem bật tiếng, đừng reset mute trong mỗi lần scroll. Nếu trang có nhiều video, cân nhắc phối hợp để tránh phát chồng audio khi hai section cùng hiện.

## Mẫu đang có trong portfolio Junkio

Nguồn đã đọc ngày 30/10/2026 ở `Desktop/Porfolio-jukio`:

- `app/components/ViewportVideo.tsx`: wrapper video, muted ban đầu, playsInline, controls và overlay audio/playback.
- `app/components/viewport-video-playback.ts`: observer, pause khi tab ẩn, lưu lựa chọn pause thủ công và hỗ trợ reduced motion.
- `app/work/shiki-leipzig/LaptopVideo.tsx`: dùng wrapper bên trong frame laptop và poster.

Observer hiện dùng ngưỡng vào khoảng 35%, ra dưới 10% để tránh play/pause liên tục ở mép viewport. Đây là lựa chọn hiện tại của dự án, không phải quy tắc bắt buộc cho mọi website. Tái sử dụng component sẵn có thay vì viết một logic autoplay khác ở từng project.

## Kiểm tra sau tích hợp

Mở đúng route và section, trên desktop và mobile: video tải, poster không méo, nội dung không crop sai, controls bấm được, bật tiếng hoạt động, scroll ra/vào đúng kỳ vọng, Pause thủ công được giữ và không còn section cũ trùng lặp. Kiểm tra asset path/response và cache nếu trang vẫn hiện bản cũ.

Việc đưa MP4 vào repository cũng cần xem dung lượng và cách deploy hiện tại. Đừng tự đẩy file render khổng lồ hoặc source media lên Git nếu nhiệm vụ chỉ là sửa local.

# Chọn engine và chạy đúng dự án

Các lệnh dưới là mẫu từ workflow cục bộ. Đọc `package.json`, CLI help và skill đã cài trước khi dùng cho dự án khác. Không nâng dependency chỉ vì có bản mới trong lúc sửa video.

## HyperFrames

Nguồn: `hyperframes`, `hyperframes-cli`, `hyperframes-registry`, `media-use` trong danh mục.

Các ràng buộc ảnh hưởng trực tiếp đến kết quả:

- Root khai báo tổng thời lượng; scene có `data-start`/`data-duration`, timed visual dùng `.clip`.
- Mỗi composition đăng ký timeline pause trên `window.__timelines`; trạng thái render phải là hàm xác định của thời gian. Không dùng random không seed hay timer thời gian thực.
- Mọi `<audio>` có `id`. Track lane chỉ phục vụ sắp xếp trong editor, không quyết định lớp hình hay độ lớn âm thanh.
- Không gọi `play()`, `pause()` hoặc seek media bằng JavaScript trong composition. Playback của website portfolio là trường hợp khác.
- Asset cần sẵn tại local trước render. Giữ nguyên `.hyperframes` để bảo toàn lịch sử.
- Tôn trọng source người dùng sửa trong desktop app: chạy `catch-up` nếu có handoff trước khi chỉnh tiếp.

Quy trình đã dùng cho dự án `ai-courses-tiktok` pin **0.8.216**; đây là phiên bản của dự án, không phải tuyên bố phiên bản mới nhất:

```bash
npx --yes hyperframes@0.8.216 catch-up
npx --yes hyperframes@0.8.216 history --since mine --who codex
npx --yes hyperframes@0.8.216 history begin --who codex --label 'Describe this edit'
```

Sửa source, rồi:

```bash
npm run check -- --json
npx --yes hyperframes@0.8.216 snapshot --at 5.5,6.1,8.6 --no-end --json
```

Xem ảnh do snapshot trả về. Với một bản video được yêu cầu bàn giao:

```bash
npx --yes hyperframes@0.8.216 render --quality delivery --output renders/project-v02.mp4
npx --yes hyperframes@0.8.216 history end
```

Ghi `REVIEW.md` và kết quả kiểm tra trước `history end`. Chỉ dùng các mốc 5.5/6.1/8.6 nếu đó là đoạn đang sửa; dự án khác cần mốc tương ứng. Đối với preview lâu dài, dùng `preview --background` và `preview --status`, giữ đúng tiến trình đã mở; không kill tất cả Chrome/Node trên máy.

## Remotion

Đọc router `remotion-best-practices` rồi module đúng việc: create, markup, captions, studio hoặc render. Skill `remotion-motion-graphics` bổ sung hướng dẫn thẩm mỹ khi brief cần; không biến một sửa âm thanh thành refactor cả project.

- Timing dựa trên frame và `fps`; tổng duration phải khớp composition.
- Các giá trị chuyển động phải seek được, không phụ thuộc clock trình duyệt.
- Asset theo cấu trúc project, thường `public/` + `staticFile()`.
- Dùng đúng API của phiên bản trong lockfile. Preview không tự chứng minh file encode sẽ đúng.

Ví dụ sau chỉ chạy khi project có đúng entry và composition ID; thay `Intro` bằng ID tìm được:

```bash
npx remotion still src/index.ts Intro renders/check.png --frame 90
npx remotion render src/index.ts Intro renders/project-v02.mp4 --codec h264
```

Với app tạo video hàng loạt, đọc `remotion-saas`; với bản đồ dùng `remotion-maps`. Không tải toàn bộ module vào context cho một chỉnh sửa thường.

## Motion-graphics từ HTML/code

Skill `motion-graphics` có pipeline riêng: direction card, cảnh theo beat, score, capture, render và QA. Chỉ dùng `tools/capture.mjs`, `tools/render.mjs`, `tools/qa.mjs` khi project được scaffold theo skill và các file thực sự tồn tại.

Hợp với showreel, kinetic typography, launch film cần đồng bộ motion/sound. Không ép mọi video hướng dẫn thành nhịp quảng cáo dồn dập hoặc bắt buộc grain, zoom, bass hit trên mọi cảnh.

## FFmpeg cho chỉnh sửa media

Hợp với kiểm tra stream, cắt audio, giữ pitch khi đổi tốc độ, thay track, encode bản web hoặc trích frame. Nếu source editable còn tồn tại, cập nhật source và render để lần sửa sau không quay lại bản cũ.

Thay audio trong MP4 dùng `-c:v copy` khi không cần thay hình; video không bị encode lại. Nhưng phụ đề đã burn-in là pixel trong hình: không thể xóa bằng cách chỉ bỏ audio. Phải render lại từ source hoặc dùng cách xử lý hình được yêu cầu.

## Tạo media qua provider

HeyGen / ElevenLabs / Higgsfield / Runway là nguồn media hoặc dịch vụ chỉnh sửa, không thay thế việc kiểm tra timeline cuối. Đọc tool schema hiện có để biết input, model, trạng thái job và phí. Không giữ bảng model ID/giá cố định trong skill này.

Một job đã gửi cần theo dõi đúng ID. Nếu response mất, tìm lại trạng thái trước khi gửi lại để tránh tạo trùng và tính phí hai lần. Hết credit hoặc bị từ chối: báo đúng lý do, dùng asset sẵn có nếu đáp ứng được yêu cầu; không tự thay tài khoản hoặc nạp tiền.

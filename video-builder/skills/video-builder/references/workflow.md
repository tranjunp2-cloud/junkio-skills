# Quy trình làm video của Junkio

## 1. Nhận brief và kiểm kê

Xác định mục tiêu, người xem, thông điệp chính, nơi sử dụng, ngôn ngữ, thời lượng dự kiến, tỷ lệ và tài nguyên đã có. Với dự án đang làm, lấy các thông tin này từ source và bản dựng hiện tại trước khi hỏi lại.

Kiểm kê screenshot/UI, logo, brand kit, footage, track lời đọc, nhạc, SFX, transcript và bản render. Ghi nguồn, quyền sử dụng nếu có, và vai trò mỗi asset. Không đưa khóa API, cookie, token, signed URL vào tài liệu hay repository.

Với thay đổi nhỏ như “bỏ câu này”, bắt đầu ở bước 5; không yêu cầu một brief sản xuất mới.

## 2. Chọn pipeline

| Tình huống | Lựa chọn |
|---|---|
| Dự án có HTML composition + HyperFrames | Giữ HyperFrames và phiên bản CLI đã pin |
| Dự án có React composition + Remotion | Giữ Remotion và dependency hiện có |
| Chỉ cắt, ghép, thay track, đổi codec từ file media | FFmpeg nếu đủ giải quyết |
| Phim motion từ code, có sound design theo beat | Skill `motion-graphics` nếu phù hợp với brief |
| Cần footage mới, presenter, cảnh tạo sinh | Tool/provider media theo yêu cầu; đưa kết quả về pipeline dựng |
| Bài thuyết trình tương tác | `slideshow`; không mặc định xuất MP4 |

Xem [engines.md](engines.md). Không chuyển engine để sửa một câu thoại. Chỉ migrate khi đó là yêu cầu hoặc có lý do được thống nhất.

## 3. Viết kịch bản và storyboard

Đặt một ý chính cho từng cảnh, dùng nội dung đã xác thực. Với clip giới thiệu, có thể tổ chức: hook → bối cảnh/vấn đề → sản phẩm hoặc giải pháp → chi tiết nổi bật → kết. Đây là khung gợi ý, không phải mọi video phải có cùng năm cảnh.

Với clip mạng xã hội dạng mẹo/hướng dẫn, hoặc khi người dùng thấy kịch bản “chưa thu hút”, chấm và đề xuất theo [social-script-review.md](social-script-review.md) trước khi dựng.

Ghi beat sheet dạng bảng:

| Time in–out | Nội dung nhìn thấy | Câu đọc chính xác | Chuyển động/cut | Asset | Caption / cue âm thanh |
|---|---|---|---|---|---|
| Theo bản dựng | Một thông điệp rõ | Lời thật, hoặc để trống | Hành động có mục đích | File/nguồn | Thời điểm đồng bộ |

Chốt nhịp đọc bằng audio thực tế trước khi cố định toàn bộ timing. Không ép một câu dài vào cảnh quá ngắn bằng cách tăng tốc cực đoan. Từ ngữ trên đồ họa có thể khác phụ đề, nhưng phụ đề phải bám lời đang phát.

## 4. Thiết kế và tạo asset

- Chọn palette, type, chất liệu và ngôn ngữ chuyển động theo thương hiệu và reference. Viết rõ điểm sẽ áp dụng: bố cục, tương phản, tỷ lệ mockup, góc máy, nhịp.
- Dùng UI thật của đúng phiên bản. Khi chỉ có concept, ghi đúng trạng thái; không chèn màn hình dự án khác để lấp khoảng trống.
- Ưu tiên asset có sẵn nếu đáp ứng chất lượng. Tạo thêm hình, video hoặc voice khi thực sự thiếu; giữ prompt, provider và provenance cần thiết, tránh lưu secret.
- Với tiếng Việt, kiểm tra dấu và font trên ảnh render, cả chữ thường lẫn chữ hoa. Font bundle của HyperFrames không có subset tiếng Việt: tự host font có subset `vietnamese` (tên family riêng, `unicode-range`), rồi zoom ảnh render kiểm tra các chữ ữ, ử, ưở, ặ.
- Chọn một điểm nhấn thị giác mỗi cảnh. Dành đủ thời gian đọc; thử ở kích thước điện thoại, không chỉ màn hình lớn.

## 5. Dựng timeline và âm thanh

Tách scene, lời đọc, nhạc, SFX và phụ đề để sửa độc lập. Gắn thời điểm bằng một nguồn timing thống nhất; không chép tay cue ở nhiều nơi nếu có thể dùng chung dữ liệu.

Lời đọc quyết định điểm nhấn nội dung; nhạc hỗ trợ nhịp; SFX gắn với hành động có ý nghĩa. Không thêm sound hoặc motion chỉ để lấp mọi khoảng yên. Hạ nhạc khi có thoại theo mức đo/nghe, không lấy một giá trị volume làm chuẩn cho mọi file.

Xem [audio-captions.md](audio-captions.md) cho công thức retime, thêm/bỏ câu và chẩn đoán mất tiếng.

## 6. Kiểm tra và lặp

Với dự án mới, kiểm tra mỗi cảnh và chỗ chuyển cảnh. Với chỉnh sửa cục bộ, kiểm tra đoạn đổi, hai mép nối và kiểm tra bắt buộc của repo. Nếu không phát hiện vấn đề mới, chuyển sang bàn giao; không lặp kiểm tra vô hạn.

Sửa lỗi cụ thể dựa trên bằng chứng: chữ bị cắt, font fallback, tiếng bị cắt cuối câu, caption trễ, khung hình đen, hình cũ còn render do trỏ sai file. Không tự thay toàn bộ thiết kế vì một style skill khác thích phong cách khác.

## 7. Xuất và bàn giao

Xuất đúng tỷ lệ/fps/source hiện tại; tạo bản web hoặc cutdown nếu người dùng cần. Đổi từ ngang sang dọc phải xem lại bố cục và phụ đề, không chỉ crop giữa.

Giao source có thể sửa, bản xuất cuối, poster/caption rời nếu cần và ghi chú ngắn. Nếu yêu cầu bao gồm cập nhật portfolio, hoàn tất tích hợp rồi kiểm tra phát trên trang. Xem [review-delivery.md](review-delivery.md) và [portfolio-video.md](portfolio-video.md).

## Cấu trúc dự án gợi ý

Giữ cấu trúc đang có; chỉ dùng mẫu này cho dự án mới phù hợp:

```text
project/
  index.html hoặc src/     # composition theo engine
  compositions/           # nếu engine sử dụng
  assets/ hoặc public/    # theo engine; ảnh, video, voice, nhạc, SFX
  scripts/                # tác vụ lặp lại thật sự cần tự động hóa
  renders/                # bản xuất có tên phiên bản
  SPEC.md                 # brief, storyboard, format khi dự án cần
  REVIEW.md               # kiểm tra đã làm và điểm chưa xác nhận
```

Tên như `project-intro-v04-vi-sub.mp4` nên nói rõ version/ngôn ngữ. Khi có nhiều bản, ghi một đường dẫn “bản hiện tại”; không âm thầm ghi đè asset gốc.

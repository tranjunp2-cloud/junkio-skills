# Kiểm tra và bàn giao video

## Trước render cuối

- Xác nhận source, asset và đường dẫn output. Dùng tên mới nếu cần giữ bản cũ.
- Chạy check/lint/build mà repository yêu cầu. Với HyperFrames, chạy full `check` sau sửa HTML, xem cả runtime/layout/contrast; browser check bị skip không tương đương pass đầy đủ.
- Đọc warnings: phân biệt lỗi mới với cảnh chuyển động có chủ đích. Ghi lý do chấp nhận, không chỉ nói “pass” khi còn hạn chế đáng kể.
- Xem frame ở đầu/giữa/cuối đoạn sửa và chỗ nối. Với phim mới, xem mọi scene ở kích thước trình chiếu và điện thoại.
- Kiểm tra bố cục, dấu tiếng Việt, giới hạn frame, lớp mockup, tỷ lệ UI, readability và timestamp phụ đề.
- Với sửa audio, kiểm tra track, speech onset/offset, câu cuối có bị cắt không, nhạc có lấn thoại không. Nếu chưa nghe được thì ghi rõ phần kiểm tra âm thanh còn giới hạn.

## Kiểm tra file đã xuất

```bash
ffprobe -v error \
  -show_entries format=duration,size:stream=codec_type,codec_name,width,height,r_frame_rate,sample_rate,channels \
  -of json renders/project-v02.mp4
```

So sánh duration, dimensions, fps và track với yêu cầu/timeline. File tồn tại nhưng rỗng hoặc thiếu audio không phải bản bàn giao hợp lệ. Metadata hợp lệ chưa chứng minh nội dung hợp lệ.

Trích một frame từ **file MP4 cuối**, không chỉ ảnh preview:

```bash
ffmpeg -n -v error -ss 6.1 -i renders/project-v02.mp4 -frames:v 1 renders/check-6p1.png
```

Dùng mốc đúng với công việc. Nếu cần nghe đoạn nối, trích WAV cục bộ để nghe. Waveform correlation chỉ hỗ trợ xác nhận vị trí/nguồn audio; không đủ để đánh giá phát âm, giọng tự nhiên hoặc mức độ nhấn.

## Bản web, poster và crop

H.264/AAC trong MP4 là lựa chọn tương thích thường dùng; kiểm tra thiết bị mục tiêu nếu có yêu cầu riêng. Ví dụ encode bản web từ master, giữ audio nếu có:

```bash
ffmpeg -n -i renders/master.mp4 \
  -map 0:v:0 -map '0:a?' \
  -c:v libx264 -crf 22 -preset medium -pix_fmt yuv420p \
  -c:a aac -b:a 160k -movflags +faststart renders/project-web.mp4
```

CRF/bitrate chỉ là điểm bắt đầu; xem UI/text ở bản encode thật. Từ master chất lượng cao xuất từng bản mục tiêu, tránh encode nối tiếp nhiều thế hệ. Đổi tỷ lệ ngang/dọc phải reframe cảnh và caption, không crop mất nội dung.

Poster nên lấy frame có thông điệp rõ, không chọn frame đang transition hoặc caption bị cắt. Nếu chỉ cần frame của video, dùng extraction; nếu cần thiết kế/biến đổi hình, dùng đúng công cụ hình ảnh sẵn có và brief.

## Ghi nhận và bàn giao

Trong `REVIEW.md` hoặc ghi chú hiện có, lưu: thay đổi chính, engine/version liên quan, file cuối, duration/format/size, kiểm tra thực hiện, warnings chấp nhận và phần chưa xác nhận. Không lưu transcript nhạy cảm hoặc log chứa token.

Tin bàn giao cho người dùng chỉ cần nói việc đã sửa, kèm video/path hiện tại. Dùng đường dẫn local tuyệt đối khi app cần hiển thị. Không tuyên bố upload, publish, commit hay push nếu chỉ render local.

Nếu job lỗi, giữ log cục bộ và asset trước đó, sửa nguyên nhân rồi thử lại có giới hạn. Không lặp job tạo sinh có phí khi chưa biết lần trước đã tạo thành công hay chưa.

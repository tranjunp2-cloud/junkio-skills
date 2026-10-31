# Lời đọc, âm nhạc và phụ đề

## Chẩn đoán trước khi thay

“Không có tiếng” có thể là file không có audio stream, track đang mute, volume bằng 0, browser đang autoplay im lặng, đường dẫn sai hoặc composition chưa gắn track. Kiểm tra file và source trước khi tạo giọng mới:

```bash
ffprobe -v error -select_streams a -show_entries stream=codec_name,sample_rate,channels -of json input.mp4
```

Kết quả có stream chỉ chứng minh có track, không chứng minh đó là lời đọc mong muốn. Kiểm tra đoạn âm thanh; với website, xem cả nút bật tiếng và trạng thái `muted`.

## Thêm lời đọc còn thiếu

1. Đối chiếu kịch bản, hình ảnh và các track đã có. Xác định khoảng trống theo giây, ngôn ngữ và giọng thật đang dùng.
2. Tái sử dụng phần ghi âm có sẵn nếu câu và ngữ cảnh phù hợp. Không cắt ghép làm đổi nghĩa.
3. Nếu cần TTS, dùng đúng giọng/provider mà project đang sử dụng; nghe mẫu ngắn trước một job dài. Không đoán voice ID từ tên người đọc.
4. Đo duration file tạo ra, đặt track theo timeline rồi retime caption. Ghi nguồn audio mới để lần sau không cần đoán lại.

Khi quota không đủ cho cả câu, không giả vờ đã tạo xong. Phương án dùng lại audio hoặc rút nội dung phải còn đáp ứng ý người dùng. Không tự đổi sang giọng khác hoặc gói trả phí.

## Giọng tiếng Việt đọc từ tiếng Anh

TTS tiếng Việt (ví dụ edge-tts `vi-VN-HoaiMyNeural`) thường đọc sai từ tiếng Anh như designer, layout, AI, brand. Giữ hai văn bản cho mỗi câu: **say** (phiên âm cho giọng đọc: đi-zai-nơ, lây-ao, ây-ai, a đến dét, bờ-ren, con-xép) và **show** (chính tả gốc cho phụ đề), cùng số từ tách bằng dấu cách. Dịch vụ có thể tách một từ có gạch nối thành nhiều word boundary: gộp lại theo từng từ của `say` rồi gán timing cho từ tương ứng của `show`. Sau khi đổi, nghe lại các từ đã phiên âm; người dùng có thể thích cách đọc khác hoặc từ thuần Việt (“thương hiệu”).

## Đọc nhanh hơn hoặc đúng thời lượng

Đầu tiên bỏ khoảng lặng không cần thiết, giữ trọn phụ âm đầu/cuối. Với đoạn hữu ích dài `L` giây và thời lượng mong muốn `D`, hệ số tốc độ là `r = L / D`.

Ví dụ minh họa từ một đoạn voice: giữ 0.12–2.01 giây (`L = 1.89`), muốn đúng 1 giây (`r = 1.89`):

```bash
ffmpeg -n -i original.wav \
  -af 'atrim=start=0.12:end=2.01,asetpts=PTS-STARTPTS,atempo=1.89,apad=whole_dur=1,atrim=end=1,afade=t=out:st=0.96:d=0.04' \
  -ar 44100 -ac 1 -c:a pcm_s16le phrase-1s.wav
```

Đây là ví dụ cho **một câu cụ thể**, không phải trim mặc định cho mọi voice. `atempo` giữ cao độ; không đổi sample rate để tăng tốc vì sẽ làm đổi pitch. Padding/trim giúp chốt số sample nhưng có thể cắt âm cuối nếu timing sai: đo bằng `ffprobe`, kiểm tra cuối câu và nghe thử. Chuỗi tempo lớn nên theo khả năng filter của FFmpeg đang cài; ưu tiên đọc lại nếu lời trở nên khó nghe.

### Retime phụ đề

Nếu timestamp từ gốc là `t`, đã cắt đầu `a`, tăng tốc `r`, clip đặt tại `S` trên timeline:

```text
timestamp_mới = S + (t - a) / r
```

Áp dụng cho cả start/end của mỗi từ, lọc/clamp theo phần audio thực sự giữ lại. Caption có thể có khoảng đệm ngắn để đọc, nhưng không làm lời đọc kéo dài. Đổi speed trong audio mà giữ caption cũ sẽ khiến highlight trễ.

## Đọc nhẹ hơn, không nhấn mạnh

Tách hai vấn đề: **âm lượng** và **ngữ điệu**. Hạ gain làm nhỏ tiếng, không loại được cách kéo dài âm tiết hay nhấn trọng âm. Với yêu cầu nhẹ hơn, có thể giảm khoảng nghỉ/tốc độ kéo chữ; nếu vẫn không tự nhiên, tạo lại đúng câu với hướng dẫn đọc hội thoại và giữ cùng giọng, hoặc xin bản thu phù hợp.

Ví dụ gain `0.85` tương đương khoảng `-1.41 dB`; đó chỉ là một điều chỉnh mix đã dùng, không phải preset chuẩn. Đừng nén/gate mạnh đến mất phụ âm hoặc hơi thở tự nhiên.

## Bỏ một câu thoại

- Bỏ clip voice tương ứng khỏi timeline; không mute toàn bộ video vì còn nhạc và lời khác.
- Bỏ caption của câu đó, và file SRT/VTT tương ứng nếu có.
- Chữ trang trí/CTA là layer khác với caption. Yêu cầu “bỏ thoại” không mặc định xóa chữ đồ họa.
- Giữ thời gian hình và các track khác nếu người dùng chỉ muốn bỏ câu; ripple-delete cả khoảng thời gian chỉ khi họ muốn rút ngắn video.
- Giữ audio gốc/bản cũ để quay lại. Cập nhật nguồn timing đang dùng cho việc sinh caption, tránh script lần sau phục hồi câu đã bỏ.

## Mix nhạc và SFX

Lời đọc cần rõ trên loa điện thoại. Đo/nghe theo asset thật để duck nhạc, fade đoạn nối và xử lý peak. Trong HyperFrames, `data-volume` là gain tuyến tính; automation volume nhân với gain này. Không vô tình hạ âm hai lần vì dùng cả hai mà không tính.

Đặt SFX theo cue chuyển động từ cùng dữ liệu timing. Nếu voice thay thời lượng nhưng hình không đổi, đừng dịch toàn bộ SFX theo voice một cách máy móc. Kiểm tra file AAC sau encode vì peak có thể khác WAV.

## Ví dụ đã thực hiện trong dự án AI courses

Trong `ai-courses-tiktok`, phần mở đầu dùng lại giọng sẵn có; một câu cầu nối được thêm, rút xuống 1.4 giây, rồi 1 giây, sau đó người dùng yêu cầu bỏ. Bản cuối là `renders/ai-courses-tiktok-no-bridge.mp4` (60.7 giây).

Điểm có thể tái sử dụng là **sửa đúng clip, cập nhật caption, giữ source/bản cũ và xuất bản mới**. Không suy diễn thành sở thích vĩnh viễn rằng người dùng luôn muốn voice 1 giây hay không muốn CTA có lời đọc.

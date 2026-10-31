# Phân tích và nâng cấp kịch bản video mạng xã hội

Dùng khi người dùng đưa kịch bản TikTok/Reels/Shorts, hỏi “video chưa thu hút”, “làm sao có ý nghĩa hơn”, hoặc trước khi dựng một clip dạng mẹo/hướng dẫn/workflow. Đầu ra là **chẩn đoán + đề xuất kịch bản**, không tự dựng lại video; chỉ dựng khi người dùng chọn hướng.

## 1. Chấm kịch bản theo 6 câu hỏi

Trả lời từng câu bằng bằng chứng trong kịch bản/bản dựng (giây, câu thoại, cảnh), không nhận xét chung chung.

| # | Câu hỏi | Dấu hiệu yếu thường gặp |
|---|---|---|
| 1 | **Hook có cho thấy kết quả hay mâu thuẫn ngay khung 0 không?** | Mở bằng vấn đề ai cũng biết (“đừng nhìn màn hình trắng”), logo, màn đen; người xem gật đầu nhưng không có lý do ở lại |
| 2 | **Người xem mang về được gì?** | Không có tên tool, câu lệnh, công thức, checklist → không ai lưu (save) hay chia sẻ |
| 3 | **Có bằng chứng thật không?** | UI mô phỏng, tool hư cấu, số liệu không nguồn (“tiết kiệm 40%”) → dân trong nghề mất niềm tin |
| 4 | **Mỗi 2–4 giây có thông tin mới không?** | Đoạn giữa dài chỉ lướt nhãn (Typography, Spacing…) mà không giải thích *vì sao* |
| 5 | **Có góc nhìn riêng/mâu thuẫn không?** | Thông điệp an toàn, ai cũng nói được (“AI không thay bạn”) |
| 6 | **CTA có hành động cụ thể không?** | “Bạn đã thử chưa?” → ít comment. Tốt hơn: “Comment PROMPT để nhận bộ 5 prompt”, “Lưu lại để dùng” |

Kết luận bằng 3–5 lý do chính, xếp theo mức ảnh hưởng. Nói thẳng khi nguyên nhân là kịch bản chứ không phải hiệu ứng.

## 2. Các khung kịch bản thay thế

Đề xuất **một hướng chính có lý do**, kèm tối đa hai hướng phụ. Viết hướng chính thành bảng beat đầy đủ (thời gian · hình ảnh · thoại/text), thời lượng mục tiêu 25–35 giây.

| Khung | Cấu trúc | Hợp khi |
|---|---|---|
| **Tệ vs Chuẩn** | Khung 0 chia đôi kết quả xấu/đẹp → cách làm sai → công thức đúng ráp từng phần → 1–2 lỗi chỉ chuyên gia thấy → thẻ công thức để chụp màn hình + CTA | Mẹo dùng tool, prompt, quy trình |
| **Thử N tool cùng 1 đề** | Cùng một yêu cầu, đặt kết quả cạnh nhau, chấm điểm, chọn người thắng | Có thể quay màn hình thật nhiều tool |
| **N lỗi thường gặp** | Mỗi lỗi 4–5 giây: lỗi → vì sao → cách sửa | Kiến thức nghề, dễ lưu |
| **Trước/Sau có số thật** | Kết quả cuối ở khung 0 → tua lại quá trình → con số đo được của chính người làm | Có case thật, có thời gian/đo lường thật |

Nguyên tắc chung cho mọi khung:
- Khung 0 là thumbnail: kết quả, so sánh hoặc một câu mâu thuẫn đã nằm sẵn trên màn hình.
- Phải có **một thứ đáng lưu**: công thức, prompt mẫu, checklist, hiện lại ở cuối để người xem chụp màn hình.
- Phần “giá trị con người” phải cụ thể: chỉ ra lỗi thật (tương phản CTA, phân cấp chữ, bảng rối) và sửa trước mắt người xem.
- CTA gắn với một hành động và một phần thưởng (từ khóa comment, lưu, follow phần 2).
- Không bịa số liệu, kết quả hay giao diện tool thật; dùng số đo của người dùng hoặc bỏ con số. Ghi rõ khi giao diện là mô phỏng.

## 3. Hỏi đúng hai điều trước khi dựng lại

1. Người dùng chọn hướng nào.
2. Có quay được màn hình thao tác thật không (tool, prompt, kết quả) hay tiếp tục làm giao diện mô phỏng. Footage thật + hiệu ứng/zoom/phụ đề luôn đáng tin hơn mô phỏng.

Có thể gợi ý thêm: giọng thật của người dùng thay TTS, số liệu thật của chính họ.

## 4. Mẫu trả lời

```text
## Vì sao chưa thu hút
1. <lý do + bằng chứng ở giây/câu nào>
...
## Hướng đề xuất: "<tên khung>" (~30s)
| Thời gian | Hình ảnh | Thoại / Text |
...
Vì sao hướng này hiệu quả hơn: <3–4 gạch đầu dòng>
## Hướng khác
- ...
## Để video đáng tin hơn
- ...
<câu hỏi chọn hướng + có footage thật không>
```

## Ví dụ đã làm: `ai-wireframe-tiktok` (31/10/2026)

Kịch bản gốc “Biến prompt thành wireframe trong vài giây” (42 giây, UI mô phỏng, TTS HoaiMy). Người dùng thấy chưa thu hút. Chẩn đoán: hook chỉ nêu vấn đề; không có prompt/công thức để mang về; tool và số “40%” không có bằng chứng; 12 giây tinh chỉnh chỉ lướt nhãn; CTA chung chung. Hướng đề xuất chính: **“Prompt tệ vs Prompt chuẩn”** (~30s) với công thức *Loại trang + Người dùng + Cảm giác + 3 khối bắt buộc + 1 giới hạn*, đoạn designer sửa 2 lỗi AI hay mắc, CTA “Comment PROMPT”.

Lỗi kỹ thuật gặp ở cùng dự án (xem thêm [audio-captions.md](audio-captions.md)):
- Font bundle của HyperFrames (Inter, JetBrains Mono) không có bộ dấu tiếng Việt → chữ như “ữ, ử, ưở” rơi sang font khác. Tự host font có subset `vietnamese` (ví dụ `@fontsource-variable/inter` file `*-vietnamese-wght-normal.woff2`) với tên family riêng và `unicode-range`.
- Giọng TTS tiếng Việt đọc sai từ tiếng Anh → tách văn bản **đọc** (phiên âm: đi-zai-nơ, lây-ao, ây-ai, a đến dét, bờ-ren, con-xép) và văn bản **hiện** cho phụ đề, cùng số từ; gộp lại các word boundary bị tách theo dấu gạch nối.

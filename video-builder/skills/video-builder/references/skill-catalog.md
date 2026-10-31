# Danh mục skill và công cụ làm video

Kiểm kê ngày **30/10/2026** từ file skill trên máy và tool được cung cấp trong phiên làm việc. Đây là danh mục năng lực, không phải xác nhận đã thử mọi tính năng hoặc còn credit. Các bản skill trùng giữa Claude/Codex được gom theo công dụng.

Nguồn cụ thể, alias, đường dẫn và SHA-256 của từng file được lưu trong [source-inventory.json](source-inventory.json). Đường dẫn dùng `$HOME` để không gắn repo với tên tài khoản máy. Gói này tổng hợp hướng dẫn, không chứa nguyên bản skill bên thứ ba; license của dependency vẫn thuộc dependency đó.

## Dựng và xuất video

| Skill | Công dụng / khi dùng | Tình trạng |
|---|---|---|
| `hyperframes` | Dựng video từ HTML/CSS, scene và timeline có thể seek | Đã dùng trong dự án AI courses |
| `hyperframes-cli` | Check, snapshot, preview, render, history, catch-up | Đã chạy full check và render MP4 |
| `hyperframes-registry` | Tìm block/transition/caption/chart trước khi tự dựng | File skill có trên máy; catalog cần dò khi dùng |
| `media-use` | Asset, giọng đọc, nhạc, SFX, transcript, grading và mix trong HyperFrames | Đã dùng hướng dẫn audio/mixing và nguồn voice |
| `remotion-to-hyperframes` | Chuyển/reuse composition hoặc footage sang HyperFrames | Chỉ khi có yêu cầu migrate, so frame trước/sau |
| `motion-graphics` | Pipeline HTML/code riêng, motion theo beat, score và QA | Có skill, script và template; không chạy pipeline này trong tác vụ voice vừa rồi |
| `remotion-best-practices` | Router chọn module Remotion theo công việc | Có file skill trên máy |
| `remotion-create` | Tạo project/composition Remotion | Dùng khi cần project React video |
| `remotion-markup` | Cấu trúc React, nội dung, animation và effects | Dùng khi viết/sửa composition |
| `remotion-motion-graphics` | Thẩm mỹ motion, type, easing, layering, kiểm tra render | Có skill; áp dụng theo brief, không ép sang dự án HyperFrames |
| `remotion-captions` | Transcribe, hiển thị và animate phụ đề | Dùng khi làm captions trong Remotion |
| `remotion-studio` | Mở và vận hành preview | Không nhầm preview với file xuất |
| `remotion-render` | Export và cấu hình render | Kiểm tra phiên bản/project trước khi chạy |
| `remotion-multimedia` | Xử lý multimedia trong browser với Mediabunny | Khi đúng stack có nhu cầu |
| `remotion-interactivity` | Markup có thể chỉnh trong Studio | Cho khả năng authoring tương tác |
| `remotion-maps` | Bản đồ, tuyến đường, địa lý | Chỉ cho cảnh có bản đồ |
| `remotion-saas` | Player, app/automation tạo video, render service | Không cần cho một MP4 thông thường |
| `remotion-docs` / `remotion-upgrade` | Tra tài liệu / nâng phiên bản | Nâng cấp chỉ khi thuộc phạm vi công việc |
| `ck:remotion` | Bộ best practices React video bổ sung của ClaudeKit | Alias từ thư mục `.claude/skills/remotion` |
| `ckm:video` | Strategy, script, storyboard, art direction, thumbnail, repurpose | Alias từ thư mục `.claude/skills/video`; generation cần provider riêng |
| `ck:media-processing` | FFmpeg encoding, filters, cut/merge, image/media processing | File skill có; FFmpeg/ffprobe đã kiểm tra thực tế |

## Lời đọc, phụ đề và sound design

Các skill ElevenLabs ở Codex có tên dưới đây; Claude có bản alias `elevenlabs-…`. Có skill không đồng nghĩa tài khoản đã sẵn sàng. Auth/quota ElevenLabs **chưa được xác nhận trong lần tổng hợp này**.

| Skill | Công dụng | Lưu ý lựa chọn |
|---|---|---|
| `text-to-speech` | Tạo voiceover từ văn bản | Giữ giọng/ngôn ngữ project; xem capability thực tế |
| `speech-to-text` | Nhận dạng lời, timestamp, diarization | Dùng cho transcript/caption, kiểm tra tên riêng và tiếng Việt |
| `voice-changer` | Đổi giọng của bản thu hiện có | Khác với tạo mới voice hay cloning |
| `voice-isolator` | Tách/giảm nền để làm rõ lời | Có thể tạo artifact; kiểm tra kết quả |
| `dubbing` | Dịch và lồng tiếng video/audio | Phải kiểm tra bản dịch và timing mới |
| `music` | Tạo nhạc theo prompt/composition plan | Quyền sử dụng và chi phí theo provider lúc dùng |
| `sound-effects` | Tạo whoosh, ambience, UI sound, impact | Đồng bộ vào hành động, tránh lạm dụng |
| `onboarding` / `setup-api-key` | Thiết lập hoặc sửa kết nối ElevenLabs | Chỉ khi workflow cần; không xuất secret vào tài liệu |

`media-use` còn có đường HeyGen và công cụ local. HeyGen đã tạo một câu voice ngắn trong dự án AI courses; quota trước đó từng không đủ cho đoạn dài. Điều này **không xác nhận số credit hiện tại**. TTS/transcribe local phụ thuộc model, ngôn ngữ và runtime được cài; không tự hứa hỗ trợ tiếng Việt.

## Hình ảnh, typography, motion và 3D hỗ trợ

| Nhóm skill | Vai trò |
|---|---|
| `imagegen` | Tạo/chỉnh raster, mockup, background, illustration khi có yêu cầu hình ảnh |
| `canvas-design` | Thiết kế hình tĩnh hoặc poster; không phải renderer video |
| `brand-guidelines`, `theme-factory` | Tài liệu màu/type/theme khi đúng thương hiệu hoặc nhu cầu; không dùng brand Anthropic làm mặc định cho dự án khác |
| `algorithmic-art` | Hình generative/p5.js; cần đảm bảo deterministic khi render frame |
| `gsap-core`, `gsap-timeline`, `gsap-utils` | Animation, choreography, easing và tiện ích |
| `gsap-performance`, `gsap-plugins` | Hiệu năng và hiệu ứng/plugin khi cần |
| `gsap-react`, `gsap-frameworks`, `gsap-scrolltrigger` | Tích hợp web hoặc preview đúng framework; scroll trigger không tự trở thành timeline video |
| `threejs-fundamentals`, `threejs-geometry`, `threejs-materials`, `threejs-textures`, `threejs-lighting` | Xây cảnh 3D, vật liệu, ánh sáng |
| `threejs-animation`, `threejs-shaders`, `threejs-postprocessing` | Animation và hiệu ứng 3D |
| `threejs-loaders`, `threejs-asset-pipeline`, `threejs-performance` | Nạp và tối ưu model/texture/render |
| `threejs-react-three-fiber`, `threejs-interaction` | Cảnh 3D trong React và tương tác; chỉ khi stack phù hợp |

Các skill này hỗ trợ một khâu, không cần kích hoạt toàn bộ để làm video. `slideshow` có trên máy nhưng đầu ra chính là deck tương tác. Nhóm `agents`, `realtime`, `speech-engine` phục vụ hội thoại realtime, không phải bước bắt buộc của voiceover; không gom chúng thành công cụ render phim.

## Tool và provider đang thấy

| Tool/provider | Có thể hỗ trợ | Điều đã xác nhận |
|---|---|---|
| FFmpeg / ffprobe | Cắt, ghép, tempo, encode, xem stream, trích frame | Bản 9.0.1 trên máy; đã dùng trong bản dựng vừa rồi |
| Node / npm | Runtime/CLI các engine | Node v24.14.0, npm tìm thấy |
| Python | Metadata và script phụ trợ | Python hệ thống 3.9.6; không đủ cho dependency nào yêu cầu 3.10+ nếu chưa có runtime khác |
| HeyGen CLI | Voice, avatar và media operations theo capability | Executable có trên máy; lần trước đã tạo voice, không kiểm tra lại auth/credit ở đây |
| Image generation tool | Sinh/chỉnh hình ảnh | Tool được cung cấp; mỗi lần chạy theo yêu cầu hình ảnh và policy của tool |
| Higgsfield | Model/preset tạo ảnh, video, audio; workflow editor phù hợp | Tool và skill router có trong phiên; chưa gửi job hay kiểm tra số dư |
| Runway | Tạo/chỉnh video, multishot, speech/music/SFX tùy tool | Tool có trong phiên; chưa xác nhận account/model/quota |

Với slash command/preset Higgsfield, resolve đúng command trước; các flow UGC/faceless/ad-multiplier có điều kiện invocation riêng. Không diễn giải việc “xem danh mục” thành cho phép tạo job. Với Runway, tra capability bằng tool hiện có; không bịa model ID hoặc lấy giá từ trí nhớ.

## Cách đọc nguồn ở máy khác

Các root được dùng khi kiểm kê: `$HOME/.codex/skills`, `$HOME/.codex/skills/.system`, `$HOME/.claude/skills`, và plugin cache. Phiên làm việc có thể chưa nạp một skill dù file tồn tại. Dò file/tool trước khi gọi; đường dẫn cache có version nên có thể thay đổi.

`source-inventory.json` phục vụ đối chiếu nguồn, không phải installer hoặc allowlist thực thi. Không gửi request tính phí chỉ để kiểm tra một mục trong catalog. Không copy nguyên các thư mục credential hoặc media project vào `junkio-skills`.

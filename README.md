# junkio-skills

Hai bộ skill độc lập của Junkio. Bắt đầu từ [AGENTS.md](AGENTS.md) để AI chọn đúng bộ theo công việc.

| Công việc | Thư mục | Skill cần đọc |
|---|---|---|
| Website, landing page, portfolio, giao diện, responsive, hiệu ứng trên web | [web-builder](web-builder/README.md) | [web-builder/SKILL.md](web-builder/skills/web-builder/SKILL.md) |
| Video giới thiệu, TikTok/Reels, motion video, lời đọc, phụ đề, render MP4 | [video-builder](video-builder/README.md) | [video-builder/SKILL.md](video-builder/skills/video-builder/SKILL.md) |

```text
junkio-skills/
├── AGENTS.md                  # Quy tắc chọn skill cho AI
├── CLAUDE.md                  # Dẫn Claude tới cùng quy tắc
├── README.md
├── web-builder/
│   ├── README.md
│   ├── skills/web-builder/    # Skill, references và scripts làm web
│   ├── examples/              # Các website mẫu và screenshot
│   └── .claude-plugin/        # Metadata plugin web
└── video-builder/
    ├── README.md
    ├── skills/video-builder/  # Skill, danh mục và quy trình làm video
    └── .claude-plugin/        # Metadata plugin video
```

Thư mục ẩn `.claude-plugin` ở gốc giữ marketplace trỏ đến hai bộ trên. Mỗi bộ vẫn có cấu trúc plugin riêng để giữ khả năng cài đặt.

## Cách yêu cầu AI làm việc

Khi làm trong một dự án khác, đưa cho AI đường dẫn `junkio-skills/AGENTS.md` để đọc trước. Ví dụ:

> Đọc AGENTS.md trong thư mục junkio-skills trên Desktop, chọn bộ skill phù hợp rồi làm yêu cầu sau: …

- “Làm landing page cho quán cà phê” → **web-builder**.
- “Dựng video giới thiệu sản phẩm có lời đọc tiếng Việt” → **video-builder**.
- “Đặt video đã có vào frame laptop trên portfolio” → phần tích hợp web, kèm hướng dẫn [portfolio-video](video-builder/skills/video-builder/references/portfolio-video.md).
- “Làm video mới rồi đưa lên website” → dựng/xuất bằng **video-builder**, sau đó tích hợp bằng phần web phù hợp.

AI chỉ đọc reference cần cho tác vụ. Việc có thư mục này không tự cài toàn bộ engine/provider hay tự nạp skill vào mọi chat.

## Cài qua marketplace

Sau khi phiên bản tương ứng có trên GitHub, cài bộ cần dùng:

```text
/plugin marketplace add tranjunp2-cloud/junkio-skills
/plugin install web-builder@junkio-skills
/plugin install video-builder@junkio-skills
```

Xem hướng dẫn và ví dụ trong [web-builder](web-builder/README.md) hoặc [video-builder](video-builder/README.md).

## License

MIT cho nội dung của repository. Các dependency/skill bên thứ ba giữ license riêng.

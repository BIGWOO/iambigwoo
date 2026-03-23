# iambigwoo — 個人官網 PRD

> **Version:** 0.2.0 (Reviewed)
> **Last Updated:** 2026-03-23
> **Author:** 大吳 + 小老婆1號
> **Status:** ✅ Reviewed (Codex GPT-5.4 可行性審查通過，已修正)

---

## 1. 產品概述

### 1.1 一句話定義

一個用 **TypeScript 程式碼偽裝成文案** 的個人官網，讓訪客在「閱讀程式碼」的過程中認識大吳——CTO、AI Builder、Full-Stack Developer。

### 1.2 核心創意概念

整個網站的文案內容以 TypeScript 程式碼形式呈現，乍看是程式碼，細讀是自我介紹。這不僅是一種展示方式，更是一種「炫技即內容」的設計哲學——技術能力本身就是最好的名片。

```ts
const bigwoo = {
  role: "CTO & AI Builder",
  mind: "agentic_architecture",
  passion: "building things that think",
  agents: ideas.map(i => i.autonomize()),
  motto: "let machines think, let humans dream"
}
```

### 1.3 目標

- **炫技**：讓訪客立刻感受到技術實力
- **自我介紹**：清楚傳達「我是誰 / 我擅長什麼 / 我做過什麼」
- **服務展示**：讓潛在合作夥伴了解「我能幫你做什麼」
- **個人品牌**：建立 "iambigwoo" 的線上 presence

### 1.4 目標受眾

| 受眾 | 他們想看什麼 |
|------|-------------|
| 潛在客戶 / 合作夥伴 | 過往案例、提供的服務、如何合作 |
| 同行工程師 / 技術人 | 技術棧、開源貢獻、技術觀點 |
| 獵頭 / HR | 經歷概覽、專長領域、聯絡方式 |
| 社群追蹤者 | 個人風格、動態、連結 |

---

## 2. 技術棧

| 層級 | 技術 | 版本 | 用途 |
|------|------|------|------|
| Framework | Next.js | 16.2.1 | App Router + RSC + Server Actions |
| UI Library | React | 19.2.4 | — |
| UI Components | shadcn/ui (CLI: shadcn) | 4.1.0 | Radix UI + Tailwind 元件系統 |
| Styling | Tailwind CSS | 4.2.2 | Utility-first CSS |
| Language | TypeScript | 5.9.3 | — |
| Animation (Component) | Framer Motion | 12.38.0 | 元件級動畫、hover、頁面轉場 |
| Animation (Scroll) | GSAP + ScrollTrigger | 3.14.2 | scroll-driven pin/scrub 動畫（免費授權） |
| GSAP React Binding | @gsap/react | 2.1.2 | useGSAP hook |
| Smooth Scroll | Lenis | 1.3.19 | Apple 式絲滑慣性滾動 |
| Code Highlight | Shiki + rehype-pretty-code | 1.29.2 / 0.14.3 | 語法高亮（Catppuccin Mocha 主題）⚠️ rehype-pretty-code 目前支援 shiki ^1.0.0 |
| Blog (MDX) | @next/mdx + @mdx-js/react | latest | Next.js 官方 MDX 整合（本地檔案最佳方案） |
| Blog (Frontmatter) | gray-matter | 4.0.3 | MDX frontmatter 解析（Phase 2） |
| Blog (Reading Time) | reading-time | 1.5.0 | 閱讀時間估算（Phase 2） |
| Blog (RSS) | feed | 5.2.0 | RSS / Atom / JSON Feed 生成（Phase 2） |
| Form Validation | Zod | 4.3.6 | Schema validation |
| Form Library | React Hook Form + @hookform/resolvers | 7.72.0 / 5.2.2 | 表單狀態管理 |
| Icons | Lucide React | 0.577.0 | 圖示系統 |
| Command Palette | cmdk | 1.1.1 | Cmd+K 快速導航 |
| shadcn/ui 底層 | class-variance-authority / clsx / tailwind-merge | 0.7.1 / 2.1.1 / 3.5.0 | 變體樣式 + class 合併 |
| Deployment (Frontend) | Vercel | — | Edge + Analytics |
| Deployment (Backend/API) | Railway | — | 聯繫表單 DB 持久化 + Email API（Phase 1） |
| Email Service | Resend | latest | 聯繫表單 Email 通知（bigwoo@gmail.com） |
| Domain | **bigwoo.app**（待購買） | — | — |

### 2.1 為什麼選這個技術棧

- **Next.js 16.2.1 + React 19.2.4**：最新穩定版，Server Components + Actions，SEO 友好且效能極佳
- **TypeScript 5.9.3**：最新版，滿血型別推導
- **Tailwind CSS 4.2.2**：v4 架構，CSS-first config、Lightning CSS 引擎
- **shadcn/ui 4.1.0**：可客製化程度高、不綁定特定設計系統、copy-paste 架構便於深度修改
- **GSAP 3.14.2 + ScrollTrigger**：業界 scroll-driven 動畫標準，免費授權（standard license），效能強悍
- **Framer Motion 12.38.0**：React 生態最強元件動畫庫，與 Next.js RSC 相容
- **Lenis 1.3.19**：取代 Locomotive Scroll 的新一代 smooth scroll（更輕量、與 GSAP 整合更好）
- **@next/mdx**：Next.js 官方 MDX 方案，本地 MDX 檔案最佳選擇（`next-mdx-remote` 適用於 remote source，本專案不需要）
- **Vercel**：Next.js 親兒子，部署 + Edge + Analytics 一站搞定
- **Railway**：如果後續需要 API / CMS / 聯繫表單後端，Railway 快速部署

### 2.2 版本鎖定策略

所有依賴使用 **exact version**（`--save-exact`），確保：
- CI/CD 可重現性
- 團隊成員 / AI agent 環境一致
- 升級時主動控制，不被 semver 偷渡 breaking change

**React 版本特別注意**：Next.js App Router 內部使用 React canary releases，React 版本應以 Next.js 相容矩陣為準，不視為獨立鎖版來源。以 `next` 版本為主導，React 跟隨。

### 2.3 瀏覽器支援 Baseline

Tailwind CSS v4 僅支援現代瀏覽器：
- Chrome / Edge 111+
- Firefox 128+
- Safari 16.4+
- 不支援 IE、舊版 Android WebView

shadcn/ui 在 Tailwind v4 下的設定規則：
- `components.json` 的 `tailwind.config` 欄位**留空**
- Theme 改走 CSS variables + `@theme inline`
- 所有顏色使用 `oklch()` 色彩空間

### 2.4 Phase 0 — 技術驗證門檻

在正式開發前，必須通過以下驗證：
```bash
pnpm install && next build  # 所有依賴安裝成功且可 build
```
- 確認 Shiki + rehype-pretty-code 版本組合可正常 build
- 確認 GSAP + Lenis + Framer Motion 三者共存不衝突
- 確認 shadcn/ui + Tailwind v4 初始化正常

---

## 3. 網站架構與頁面規劃

### 3.1 頁面結構

```
/                   → 首頁（Hero + 精選內容）
/about              → 關於我
/projects           → 作品集 / 案例展示
/services           → 服務項目
/blog               → 技術 Blog / SEO 內容
/blog/[slug]        → 文章內頁
/contact            → 聯繫方式
```

### 3.2 共用元素

- **Navigation**：頂部導航列，桌面版水平 / 行動版漢堡選單
- **Footer**：社群連結 + 版權 + 用程式碼風格呈現
- **Theme**：深色主題為主（呼應 code editor 氛圍），支援淺色切換
- **Command Palette**：`Cmd+K` 快速搜尋 / 導航（致敬 IDE 體驗）

---

## 4. 各頁面詳細設計

### 4.1 首頁 `/`

**目標**：3 秒內讓訪客知道你是誰、你很厲害。

#### Hero Section

整個 Hero 區域就是一個「終端機 / 編輯器」視窗，內容是 TypeScript 程式碼形式的自我介紹：

```ts
// bigwoo.config.ts

export const bigwoo = {
  name: "大吳 (Big Woo)",
  title: "CTO & AI Builder",
  location: "Taipei, Taiwan",
  current: "綠界大數據 CTO",
  
  expertise: [
    "Full-Stack Web Development",
    "AI / LLM Integration", 
    "Agentic Architecture",
    "Payment & FinTech Systems",
    "Linux Infrastructure",
  ],
  
  philosophy: "let machines think, let humans dream",
  
  status: "open_to_collaborate" as const,
} satisfies Developer
```

**視覺效果**：
- 打字機動畫逐行顯現
- 語法高亮（使用 Catppuccin Mocha 色系，呼應大吳的終端機風格）
- 行號 + 檔案名稱 tab
- 左側有 VS Code 風格的 gutter

#### 快速導覽區塊

Hero 下方用卡片式 grid 導向其他頁面，每張卡片本身也是一段小程式碼：

```ts
const sections = [
  { label: "about()", desc: "// 我是誰" },
  { label: "projects()", desc: "// 做過什麼" },
  { label: "services()", desc: "// 能幫你什麼" },
  { label: "contact()", desc: "// 找到我" },
]
```

#### 數字亮點（Stats Bar）

用 `const` 宣告的方式呈現關鍵數據：

```ts
const stats = {
  yearsOfExperience: 26,      // since 2000
  projectsDelivered: 71,       // 專案數
  techStackDepth: "full-stack", // 技術深度
  aiAgentsBuilt: "∞",          // AI Agents
}
```

---

### 4.2 關於我 `/about`

**目標**：讓訪客深入了解大吳的背景、技術旅程、核心理念。

#### 結構

**個人簡介（interface 形式）**：

```ts
interface BigWoo extends Developer, Leader, Builder {
  background: {
    started: "2000 // ASP + Counter-Strike 的電競年代",
    milestones: [
      "2000: ASP 開發 Counter-Strike 社群網站",
      "2002: PHP 開發「台灣電玩勁檔」「SOC GAMING 電子競技職業聯盟」",
      "200X-201X: PHP + MySQL → Full-Stack Web Developer",
      "201X-present: CTO → AI Builder",
    ],
    evolved: "ASP → PHP → Full-Stack → CTO → AI Builder",
    current: "用 AI 重新定義工作流",
    yearsInGame: new Date().getFullYear() - 2000, // 26 年
  }
  
  values: [
    "先做能跑的，再做完美的",
    "技術是手段，解決問題才是目的",
    "AI 不會取代工程師，但會取代不用 AI 的工程師",
  ]
}
```

**技術棧（Skills Matrix）**：

以依賴關係圖 / `package.json` 的形式呈現：

```json
{
  "core": {
    "typescript": "expert",
    "react": "expert", 
    "next.js": "expert",
    "php": "veteran",
    "python": "proficient",
    "asp-classic": "retired // 2000-2002, 永遠的起點"
  },
  "ai": {
    "llm-integration": "expert",
    "agentic-architecture": "expert",
    "mcp-protocol": "advanced",
    "prompt-engineering": "advanced"
  },
  "infrastructure": {
    "linux": "expert",
    "docker": "proficient",
    "gcp": "proficient",
    "vercel": "expert",
    "tailscale": "advanced"
  }
}
```

**時間軸**：
職涯歷程用 `git log` 格式呈現：

```
commit a1b2c3d (HEAD -> present)
Author: bigwoo <bigwoo@ecpaydata.com>
Date:   2024-present

    feat(career): 綠界大數據 CTO — AI/LLM 整合、產品技術策略

commit e4f5g6h
Author: bigwoo
Date:   20XX-20XX

    feat(career): [中間經歷待大吳補充]
    
    - 主導技術架構升級
    - 帶領團隊從 0 到 1

commit b8c9d0e
Author: bigwoo
Date:   2002-20XX

    feat(career): 台灣電玩勁檔 & SOC GAMING 電子競技職業聯盟
    
    - PHP 全端開發
    - 電競社群平台建置

commit 0000001 (root)
Author: bigwoo
Date:   2000

    init: Counter-Strike 社群網站
    
    - ASP 開發，一切的起點
    - 從玩家變成開發者
```

---

### 4.3 作品集 `/projects`

**目標**：展示代表性案例，證明實力。

#### 呈現方式

每個專案是一個「module export」：

```ts
export const featuredProjects: Project[] = [
  {
    name: "CashBack 現金回饋平台",
    role: "Tech Lead & Architect",
    stack: ["Next.js", "PHP", "PostgreSQL", "GCP"],
    highlights: [
      "多合作夥伴整合（Shopline, KKday...）",
      "完整金流生命週期管理",
      "自動化稅務處理系統",
    ],
    status: "production",
    impact: "處理數百萬筆交易",
  },
  // ... more projects
]
```

#### 專案分類

```ts
enum ProjectCategory {
  FINTECH = "金融科技 / 支付",
  AI_AGENT = "AI / Agent 應用",
  SAAS = "SaaS 平台",
  OPEN_SOURCE = "開源 / Side Projects",
}
```

**展示方式**：
- 卡片 Grid 佈局
- 每張卡片有專案名稱、角色、技術棧標籤、狀態 badge
- 點擊可展開為 Detail Modal 或跳轉到專案詳情頁
- 支援按分類、技術棧篩選

---

### 4.4 服務項目 `/services`

**目標**：讓潛在客戶知道「大吳可以幫我做什麼」。

#### 呈現方式

每項服務是一個 `class` 定義：

```ts
class TechnicalConsulting implements Service {
  name = "技術顧問 & 架構規劃"
  
  includes = [
    "技術棧選型建議",
    "系統架構設計與審查", 
    "效能優化與技術債評估",
    "AI / LLM 導入策略",
  ]
  
  idealFor = [
    "需要技術決策支持的新創團隊",
    "考慮 AI 轉型的傳統企業",
    "需要獨立技術審查的專案",
  ]
  
  async engage() {
    return await bigwoo.contact("consulting")
  }
}
```

#### 服務項目（暫定，待大吳確認）

```ts
const services = [
  "技術顧問 & 架構規劃",
  "AI / LLM 整合開發",
  "全端 Web 應用開發",
  "Agentic Workflow 建置",
  "技術團隊 Mentoring",
] as const
```

---

### 4.5 聯繫頁面 `/contact`

**目標**：讓有興趣的人方便找到大吳。

#### 呈現方式

```ts
const contactChannels = {
  facebook: "fb.com/iambigwoo",        // 社群
  instagram: "@bigwoo",                 // 生活
  line: "iambigwoo",                    // 即時通訊
  github: "github.com/BIGWOO",          // 開源
}
```

**聯繫表單（核心功能）**：

表單本身也用程式碼風格包裝，像是在呼叫一個 API：

```ts
// 訪客填寫 = 組裝 request payload
const inquiry = await bigwoo.contact({
  name: string,                          // 您的大名
  email: string,                         // 回覆用 Email
  type: "consulting" | "project" | "collaboration" | "other",
  budget?: "$5K-$10K" | "$10K-$30K" | "$30K+" | "再議",
  message: string,                       // 想聊什麼
})

// 送出後的回應
return new Response("收到！我會盡快回覆你 ☕", {
  status: 202,
  headers: { "x-reply-within": "48h" }
})
```

**表單技術實作**：
- 前端：shadcn/ui Form + React Hook Form + Zod validation
- 後端：Next.js Server Action → **先寫入資料庫，再寄送 Email 通知**
- 資料持久化：Railway PostgreSQL 或 Supabase（紀錄所有洽詢，方便追蹤、不會掉單）
- Email 通知：轉寄到 **bigwoo@gmail.com**（使用 Resend / Nodemailer + SMTP）
- 防 spam：Turnstile（Cloudflare）或 hCaptcha
- **不公開 Email**，所有聯繫走表單
- 失敗處理：Email 發送失敗不影響表單提交成功（DB 已存），定期檢查未寄出通知

**表單欄位**：

| 欄位 | 類型 | 必填 | 說明 |
|------|------|------|------|
| 您的大名 | text | ✅ | — |
| Email | email | ✅ | 用來回覆 |
| 洽詢類型 | select | ✅ | 技術顧問 / 專案開發 / 合作提案 / 其他 |
| 預算範圍 | select | ❌ | 讓大吳快速判斷量級 |
| 訊息內容 | textarea | ✅ | 自由描述需求 |

**送出後 UX**：
- 表單區塊變成 terminal output 風格，顯示 `✓ Message sent. Status: 202 Accepted`
- 附帶預估回覆時間

---

## 5. 資料架構

### 5.1 設計原則

所有網站內容（個人資料、專案、服務、經歷）以 **JSON 檔案** 管理，前端直接讀取。不用資料庫，改內容只要改 JSON + 重新部署。

### 5.2 JSON 資料檔案

```
content/
├── data/                     # ← JSON 資料統一放 data/ 子目錄
│   ├── profile.json          # 個人資料、簡介、技術棧
│   ├── projects.json         # 作品集 / 案例
│   ├── services.json         # 服務項目
│   ├── timeline.json         # 職涯時間軸（git log 資料）
│   ├── stats.json            # 數字亮點
│   ├── contact.json          # 社群連結
│   └── easter-eggs.json      # 彩蛋設定
└── blog/                     # ← MDX 文章
```

> ⚠️ 注意：路徑統一為 `content/data/*.json`（與附錄 A 一致），`lib/data.ts` 讀取時以此為準。

#### profile.json（範例）

```json
{
  "name": "大吳 (Big Woo)",
  "title": "CTO & AI Builder",
  "location": "Taipei, Taiwan",
  "current": "綠界大數據 CTO",
  "avatar": "/images/avatar.png",
  "philosophy": "let machines think, let humans dream",
  "expertise": [
    "Full-Stack Web Development",
    "AI / LLM Integration",
    "Agentic Architecture",
    "Payment & FinTech Systems",
    "Linux Infrastructure"
  ],
  "skills": {
    "core": {
      "typescript": "expert",
      "react": "expert",
      "next.js": "expert",
      "php": "veteran",
      "python": "proficient",
      "asp-classic": "retired"
    },
    "ai": {
      "llm-integration": "expert",
      "agentic-architecture": "expert",
      "mcp-protocol": "advanced",
      "prompt-engineering": "advanced"
    },
    "infrastructure": {
      "linux": "expert",
      "docker": "proficient",
      "gcp": "proficient",
      "vercel": "expert",
      "tailscale": "advanced"
    }
  },
  "values": [
    "先做能跑的，再做完美的",
    "技術是手段，解決問題才是目的",
    "AI 不會取代工程師，但會取代不用 AI 的工程師"
  ]
}
```

#### projects.json（範例）

```json
[
  {
    "id": "cashback",
    "name": "CashBack 現金回饋平台",
    "role": "Tech Lead & Architect",
    "category": "fintech",
    "stack": ["Next.js", "PHP", "PostgreSQL", "GCP"],
    "highlights": ["多合作夥伴整合", "完整金流生命週期管理", "自動化稅務處理"],
    "status": "production",
    "impact": "處理數百萬筆交易",
    "image": "/images/projects/cashback.png",
    "visible": true
  }
]
```

#### timeline.json（範例）

```json
[
  {
    "hash": "a1b2c3d",
    "ref": "HEAD -> present",
    "date": "2024-present",
    "type": "feat",
    "scope": "career",
    "title": "綠界大數據 CTO",
    "description": ["AI/LLM 整合", "產品技術策略"]
  },
  {
    "hash": "0000001",
    "ref": "root",
    "date": "2000",
    "type": "init",
    "scope": null,
    "title": "Counter-Strike 社群網站",
    "description": ["ASP 開發，一切的起點", "從玩家變成開發者"]
  }
]
```

### 5.3 Blog 內容架構

Blog 文章使用 **MDX** 格式，支援在 Markdown 中嵌入 React 元件：

```
content/
└── blog/
    ├── my-first-post.mdx
    ├── ai-agent-architecture.mdx
    └── ...
```

每篇 MDX 的 frontmatter：

```yaml
---
title: "用 AI Agent 自動化你的工作流"
date: "2026-03-23"
tags: ["ai", "agent", "automation"]
description: "如何用 Agentic Architecture 讓 AI 幫你做事"
image: "/images/blog/ai-agent.png"
published: true
---
```

**Blog 功能**：
- 文章列表頁（按日期排序、標籤篩選）
- MDX 渲染（支援程式碼高亮、自訂元件）
- SEO 優化（每篇文章獨立 meta / OG / structured data）
- RSS Feed（`/feed.xml`）
- 閱讀時間估算
- 系列文章（Series）支援
- AI 協作撰稿（由小老婆1號協助產出草稿，大吳審閱後發布）

### 5.4 為什麼不用資料庫

| 方案 | 優點 | 缺點 |
|------|------|------|
| **JSON + MDX（採用）** | 零成本、Git 版控、部署即生效、改檔就好 | 不適合高頻動態更新 |
| CMS (Notion/Sanity) | 視覺化編輯 | 多一層依賴、API 延遲 |
| 資料庫 | 動態查詢 | 過度工程、需要後端 |

對個人網站來說，JSON + MDX 是最合理的——內容不常改，改的時候改檔 push 就好。

### 5.5 JSON Schema 驗證

每份 JSON 內容檔都用 **Zod** 定義 schema 並在 build time 驗證，避免隱性 CMS 失控：

```ts
// lib/schemas.ts
import { z } from 'zod'

const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional(),
  role: z.string(),
  category: z.enum(['fintech', 'ai_agent', 'saas', 'open_source']),
  stack: z.array(z.string()),
  highlights: z.array(z.string()),
  status: z.enum(['production', 'development', 'archived', 'side-project']),
  impact: z.string().optional(),
  image: z.string().optional(),
  url: z.string().url().optional(),
  visible: z.boolean().default(true),
  featured: z.boolean().default(false),
  order: z.number().optional(),
  tags: z.array(z.string()).default([]),
})
```

所有 JSON 讀取透過 `lib/data.ts` 統一進出，build 時 schema 驗證失敗會直接報錯。

---

## 6. 視覺風格 & 互動策略

### 6.0 風格定調：Scroll-Driven IDE × Bento Grid

混搭兩種設計語言，**首頁是沉浸式體驗，內頁是高效資訊展示**：

#### 首頁 — Scroll-Driven IDE Storytelling（方案 A）

靈感來源：Apple 產品介紹頁的敘事節奏 × 程式碼編輯器的視覺語言。

**核心體驗**：滾動即執行——訪客每往下滾，就像在 IDE 裡 step through 一段程式碼，每一步揭示大吳的一個面向。

```
滾動區段設計（Scroll Sections）：
┌──────────────────────────────────────────────┐
│  Section 0: Hero                              │
│  ┌────────────────────────────────────────┐   │
│  │ import bigwoo from "taipei"            │   │
│  │ // 打字機動畫，逐行顯現               │   │
│  │ // 背景：微粒子 + 程式碼矩陣雨        │   │
│  └────────────────────────────────────────┘   │
├──────────────────────────────────────────────┤
│  Section 1: Sticky Code + Animated Output     │
│  ┌──────────┬─────────────────────────────┐   │
│  │ 程式碼   │  視覺化輸出                 │   │
│  │（固定左）│ （滾動觸發動畫）            │   │
│  │          │  → 技術棧光環圖             │   │
│  │ 當前行   │  → 數字統計跳動             │   │
│  │ 高亮     │  → 專案卡片飛入             │   │
│  └──────────┴─────────────────────────────┘   │
├──────────────────────────────────────────────┤
│  Section 2: Timeline Scrub                    │
│  git log 時間軸，用 scroll position 控制      │
│  滾到哪年就展開那年的內容                     │
│  像 Apple Watch 產品頁的「旋轉展示」手法      │
├──────────────────────────────────────────────┤
│  Section 3: CTA                               │
│  bigwoo.contact() — 呼叫行動                  │
└──────────────────────────────────────────────┘
```

**技術實作**：
- **GSAP ScrollTrigger**：pin sections、scrub animations（滾動位置 1:1 控制動畫進度）
- **Lenis**：smooth scroll，Apple 那種絲滑的慣性滾動感
- **Framer Motion**：元件級動畫（hover、enter、exit）

**動畫三劍客 Integration Contract（鐵律）**：

責任分工必須嚴格——混用會導致不可預期的行為：

| 工具 | 負責 | 不可觸碰 |
|------|------|---------|
| GSAP ScrollTrigger | scroll timeline / pin / scrub | ❌ 不做 hover / enter-exit |
| Lenis | scroll source（慣性、smooth） | ❌ 不做動畫邏輯 |
| Framer Motion | hover / enter / exit / 頁面轉場 | ❌ 不進入 ScrollTrigger pin 區段、不用 layout animation 在 scrub 區 |

整合規則：
```ts
// lib/gsap.ts — 統一初始化
lenis.on('scroll', ScrollTrigger.update)         // Lenis 事件驅動 ST 更新
gsap.ticker.add((time) => lenis.raf(time * 1000)) // GSAP ticker 接管 Lenis RAF
gsap.ticker.lagSmoothing(0)                       // 關閉 GSAP 的 lag smoothing
```
- 所有 GSAP 動畫統一用 `useGSAP` hook + `gsap.context()` 做 cleanup
- 首頁 scrub 區段**禁止**使用 Framer Motion `layout` / `layoutId`
- RSC 頁面中，動畫元件必須是獨立的 Client Component（`'use client'`），不可整頁標記

**Apple 產品頁借鏡的手法**：

| Apple 手法 | 我們的對應 |
|-----------|-----------|
| 大字標題 scroll reveal | 程式碼區塊逐行亮起 |
| 產品 3D 旋轉 | 技術棧光環圖旋轉 |
| Sticky left + scroll right | 程式碼固定左側 + 右側動態輸出 |
| 影片 scrub（滾動控制播放進度） | git log 時間軸 scrub |
| 數字跳動（counter animation） | stats 區塊數字從 0 跳到目標值 |
| 漸層文字 reveal | 程式碼語法高亮漸顯（先灰色 → 再上色） |

**首頁 Section State Machine**（工程規格）：

| Section | 高度 | Pin | 進場條件 | 動畫進度來源 | 離場條件 | 行動裝置降級 |
|---------|------|-----|---------|-------------|---------|-------------|
| 0: Hero | 100vh | 無 | 頁面載入 | 時間（打字機 autoplay） | 滾過 100vh | 靜態程式碼（無打字機） |
| 1: Sticky Code | 300vh（scroll space） | pin 左側程式碼區 | section 進入 viewport | scrollTrigger scrub 0→1 | scrub 完成 | 單欄、無 pin、staggered fade-in |
| 2: Timeline | 200vh（scroll space） | pin 時間軸容器 | section 進入 viewport | scrollTrigger scrub 0→1 | scrub 完成 | 簡化為垂直列表、無 scrub |
| 3: CTA | auto | 無 | section 進入 viewport | Framer Motion inView | — | 同桌機 |

- `prefers-reduced-motion: reduce` → 所有 scrub/pin 降級為靜態展示
- ScrollTrigger `.refresh()` 在 resize / font load 完成後觸發
- 每個 section 有獨立的 `gsap.context()` 做 cleanup

#### 內頁 — Bento Grid + Glassmorphism（方案 B）

About / Projects / Services / Blog 採用模組化的 Bento Grid 排版：

```
內頁佈局概念：
┌─────────┬──────────────────┐
│  大卡片  │    中卡片         │
│  (2×2)  │    (2×1)         │
│         ├────────┬─────────┤
│         │ 小卡片  │ 小卡片   │
│         │ (1×1)  │ (1×1)   │
├─────────┼────────┴─────────┤
│  寬卡片  │    中卡片         │
│  (2×1)  │    (2×1)         │
└─────────┴──────────────────┘
```

**視覺特徵**：
- **Glassmorphism 卡片**：半透明毛玻璃效果 + 微光邊框
- **Hover 微光**：滑鼠經過時邊框產生光暈跟隨效果（像 Linear.app）
- **Staggered Animation**：卡片依序浮現，間隔 50-100ms
- **Spotlight Effect**：滑鼠附近的卡片微微發亮，遠處的微微暗下去
- **每張卡片都是獨立的互動單元**，有自己的微動畫

**靈感參考**：
- **Linear.app**：卡片光暈效果、暗色高級感
- **Vercel.com**：Bento Grid 排版、漸層光影
- **Raycast.com**：毛玻璃卡片、精緻的邊框光效

#### 為什麼混搭

| 維度 | 首頁（A） | 內頁（B） |
|------|----------|----------|
| 目的 | 留下深刻印象、展現品味 | 高效傳達資訊、方便瀏覽 |
| 互動 | 沉浸式、線性敘事 | 模組化、自由探索 |
| 動畫量 | 重（scroll-driven） | 輕（hover + enter） |
| 停留時間 | 長（像看 Apple 產品頁） | 短（快速找到需要的） |
| 技術人感受 | 「臥槽這 scroll 做得跟 Apple 一樣」 | 「排版乾淨，資訊好找」 |

### 6.0.1 Server / Client Component 邊界規則（鐵律）

Next.js App Router 預設所有 page/layout 為 Server Component，動畫庫（GSAP、Lenis、Motion）需要瀏覽器 API。

**規則**：
1. **頁面 `page.tsx` 保持 Server Component**——負責資料讀取、metadata、SEO
2. **動畫只存在於小型 Client Component**——用 `'use client'` 標記
3. **純瀏覽器依賴元件**用 `next/dynamic(..., { ssr: false })` 包裝
4. **所有 Hero 文案先 SSR 完整輸出**——打字機、逐行 reveal 只做視覺增強，不承擔資訊揭露
5. **搜尋引擎看到的是完整可讀頁面**——動畫是 progressive enhancement

```tsx
// ✅ 正確：page.tsx 是 Server Component
// app/page.tsx
import { HeroAnimation } from '@/components/hero-animation' // client component
import { getProfile } from '@/lib/data'

export default async function Home() {
  const profile = await getProfile() // server-side 讀 JSON
  return (
    <main>
      {/* SSR 輸出完整文字，動畫元件只管視覺效果 */}
      <HeroAnimation profile={profile} />
    </main>
  )
}

// ❌ 錯誤：整頁 'use client'
// 'use client'  ← 這會丟掉所有 SSR/SEO 優勢
```

---

### 6.1 色彩系統

基於 **Catppuccin Mocha**（大吳的終端機色系），延伸為網站設計語言：

```ts
const palette = {
  // 主要背景
  background: "#1e1e2e",    // base
  surface: "#313244",       // surface0
  
  // 文字
  text: "#cdd6f4",          // text
  subtext: "#a6adc8",       // subtext0
  
  // 強調色
  primary: "#89b4fa",       // blue（連結、CTA）
  secondary: "#a6e3a1",     // green（成功、程式碼關鍵字）
  accent: "#f9e2af",        // yellow（高亮、警告）
  
  // 語法高亮（直接沿用 Catppuccin 的 token 色彩）
  keyword: "#cba6f7",       // mauve
  string: "#a6e3a1",        // green
  number: "#fab387",        // peach
  comment: "#6c7086",       // overlay0
  function: "#89b4fa",      // blue
  type: "#f9e2af",          // yellow
}
```

### 6.2 字型

```ts
const fonts = {
  // 程式碼（核心——所有偽裝文案都用這個）
  mono: "JetBrains Mono",   // 或 Fira Code（需支援 ligatures）
  
  // 標題與 UI 元素
  sans: "Inter",
  
  // 中文回退
  zhFallback: "Noto Sans TC",
}
```

### 6.3 動畫系統

#### 動畫分層

| 層級 | 工具 | 用途 | 效能考量 |
|------|------|------|---------|
| Page-level scroll | GSAP ScrollTrigger | pin、scrub、timeline | GPU accelerated、will-change |
| Smooth scroll | Lenis | 全站絲滑滾動 | RAF-based、低開銷 |
| Component enter/exit | Framer Motion | 元件出現/消失動畫 | AnimatePresence + layout |
| Hover / micro | Framer Motion | 按鈕、卡片微互動 | whileHover、transition spring |
| Code typing | Custom hook | 打字機效果 | requestAnimationFrame |

#### 首頁動畫清單

| 區段 | 動畫效果 | GSAP 手法 |
|------|---------|----------|
| Hero | 程式碼逐行打字 + 語法高亮漸顯 | Timeline + onComplete callback |
| Section 1 | 左側程式碼 pin + 右側內容 scrub | ScrollTrigger pin + scrub: true |
| 技術棧 | 光環圖旋轉、技能浮現 | scrub rotation + stagger |
| Stats | 數字從 0 跳到目標值 | ScrollTrigger + counter tween |
| Timeline | git log 滾動展開 | scrub + stagger + clip-path reveal |
| CTA | 視差 + fade in | ScrollTrigger + y offset |

#### 內頁動畫清單

| 元素 | 動畫效果 | 工具 |
|------|---------|------|
| Bento 卡片 | staggered fade-up 依序浮現 | Framer Motion + viewport |
| 卡片 hover | 邊框光暈跟隨滑鼠 | CSS + onMouseMove |
| Spotlight | 滑鼠附近卡片微亮 | Framer Motion + pointer |
| 頁面轉場 | IDE tab 切換感 | Framer Motion layout |
| 程式碼區塊 | hover 顯示 type hint tooltip | Framer Motion whileHover |

#### 效能守則

- 動畫只用 `transform` 和 `opacity`（不觸發 layout/paint）
- 重動畫區段用 `will-change: transform`
- 遵循**三級降級策略**（見 8.3 節）：行動裝置靜態版、一般桌機簡化版、高階桌機完整版
- `prefers-reduced-motion: reduce` → 所有 scrub/pin 降級為靜態展示
- Lenis 在低效能裝置 / 行動裝置上 fallback 為原生滾動
- Glassmorphism `backdrop-filter: blur()` 在不支援的裝置上降級為 solid background
- 圖片全部 lazy load + next/image 自動優化

### 6.4 響應式策略

| 斷點 | 行為 |
|------|------|
| Desktop (≥1024px) | 完整 IDE 模擬佈局，sidebar + editor 分割 |
| Tablet (768-1023px) | 簡化為單欄 editor，保留行號 |
| Mobile (<768px) | 純程式碼卡片堆疊，取消 IDE chrome |

---

## 7. 互動彩蛋 (Easter Eggs)

讓技術人會心一笑的小巧思：

| 彩蛋 | 觸發方式 | 效果 |
|------|---------|------|
| **WASD 導航** | 按 WASD 鍵（非輸入框狀態） | W 上滾 / S 下滾 / A 上一頁 / D 下一頁（首次按下時角落顯示提示 HUD，幾秒後淡出） |
| Konami Code | ↑↑↓↓←→←→BA | 解鎖隱藏的 `sudo` 模式，切換特殊主題 |
| Console Message | 打開 DevTools | 在 console 顯示 ASCII art + 招募訊息 |
| 404 頁面 | 訪問不存在路由 | `throw new Error("404: this.page is undefined")` |
| Source Map | 右鍵看原始碼 | 故意留下有趣的程式碼註解 |
| `Cmd+K` | 鍵盤快捷鍵 | 開啟 Command Palette 導航 |
| Terminal 模式 | 特定觸發 | 整頁變成終端機，可輸入指令探索 |

**鍵盤事件管理（Centralized Shortcut Registry）**：

WASD、Cmd+K、Konami、Terminal Mode、表單輸入同時存在，必須統一管理避免事件互撞：

| Scope 層級 | 優先順序 | 包含 | 說明 |
|-----------|---------|------|------|
| `input` | 最高 | input / textarea / select / [contenteditable] | 輸入時攔截所有快捷鍵 |
| `modal` | 高 | cmdk 開啟 / Terminal 模式 | 只處理該 modal 的按鍵，其餘吃掉 |
| `page` | 中 | WASD 導航 | 頁面級快捷鍵 |
| `global` | 低 | Cmd+K、Konami Code | 全域監聽 |

規則：
- 預設忽略 `input/textarea/select/[contenteditable]` 內的所有快捷鍵
- cmdk 開啟時，WASD / Konami 暫停
- Terminal 模式啟用時，接管所有鍵盤輸入

---

## 8. SEO & 效能

### 8.1 SSR-First 內容策略（鐵律）

所有頁面的核心文字內容必須在 SSR 階段完整輸出。動畫（打字機、逐行 reveal、語法高亮漸顯）只做**視覺增強**，不承擔資訊揭露。

原因：
- 搜尋引擎爬蟲（Googlebot）不一定執行所有 JS
- 社群分享爬蟲（Open Graph / Twitter Card）幾乎不執行 JS
- `prefers-reduced-motion` 使用者 / 低效能裝置需要直接看到內容
- Lighthouse Performance 評分依賴 LCP，空殼 + hydration 會拖慢

### 8.2 SEO 策略

```ts
const seoConfig = {
  // 結構化資料
  jsonLd: "Person + WebSite + ProfessionalService",
  
  // Open Graph
  og: {
    title: "大吳 (Big Woo) — CTO & AI Builder",
    description: "Full-Stack Developer turned AI Builder. Building things that think.",
    image: "/og-image.png",   // 沿用 FB 封面圖風格
  },
  
  // 技術 SEO
  sitemap: true,
  robots: true,
  canonical: true,
  
  // 效能
  lighthouse: {
    performance: ">= 95",
    accessibility: ">= 90",
    bestPractices: ">= 95",
    seo: ">= 95",
  }
}
```

### 8.2 效能目標

Core Web Vitals（FID 已於 2024-03 被 INP 取代）：
- **LCP** < 2.5s
- **INP** < 200ms（取代 FID）
- **CLS** < 0.1
- **TTFB** < 200ms（Vercel Edge）
- **Bundle Size**：首屏 JS < 150KB（gzipped）— 含 GSAP + Lenis，100KB 過於激進

### 8.3 三級動畫降級策略

| 等級 | 條件 | 行為 |
|------|------|------|
| 🟢 完整版 | 高階桌機（≥1024px, 高刷新率, 無 reduced-motion） | 全部 scroll-driven + glassmorphism + spotlight |
| 🟡 簡化版 | 一般桌機 / 平板（或 `prefers-reduced-motion`） | 保留 Lenis smooth scroll，scrub 改為 toggle 觸發，關閉 particles/matrix rain |
| 🔴 靜態版 | 行動裝置 / 低效能裝置 | 關閉 Lenis（原生滾動）、無 pin/scrub、卡片直接顯示、glassmorphism 降級為 solid card |

偵測方式：
```ts
const tier = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'static'
  : window.innerWidth < 768 ? 'static'
  : navigator.hardwareConcurrency <= 4 ? 'simplified'
  : 'full'
```

---

## 9. 開發階段規劃

### Phase 0 — 技術驗證（開工前必過）

- [ ] `pnpm create next-app` + 安裝所有依賴
- [ ] `pnpm build` 成功（Shiki + rehype-pretty-code 版本驗證）
- [ ] GSAP + Lenis + Framer Motion 共存 PoC
- [ ] shadcn/ui + Tailwind v4 初始化 + `@theme inline` 設定

### Phase 1 — MVP（核心上線）

**目標**：讓網站能看、能用、有基本內容。聚焦內容交付，動畫從簡。

- [ ] 共用元素（Navigation、Footer、Theme Toggle、Layout）
- [ ] 首頁 Hero（打字機動畫 + 簡化版 stats counter）— 不含 timeline scrub
- [ ] 關於我頁面（個人簡介 + 技術棧展示）
- [ ] 作品集頁面（至少 3-5 個代表性案例）
- [ ] 服務頁面（列出核心服務項目）
- [ ] 聯繫頁面（社群連結 + 聯繫表單 + Server Action + DB 持久化 + Email 通知）
- [ ] 深色主題（Catppuccin Mocha 基底）
- [ ] 響應式適配（Desktop / Tablet / Mobile）
- [ ] 基礎 SEO（meta tags、OG、sitemap、structured data）
- [ ] Vercel 部署 + bigwoo.app 網域
- [ ] 基本 Analytics

### Phase 2 — 動畫 & 內容豐富

- [ ] 首頁 Scroll-Driven IDE Storytelling 完整版（Sticky Section + Timeline Scrub）
- [ ] 內頁 Bento Grid + Glassmorphism 卡片系統
- [ ] 打字機動畫精修
- [ ] 頁面轉場動畫
- [ ] Blog 功能（MDX 渲染、文章列表、標籤篩選、RSS Feed）
- [ ] `Cmd+K` Command Palette
- [ ] 互動彩蛋（WASD 導航 + Konami Code + Console Message）
- [ ] 效能優化（達到 Lighthouse 目標分數）

### Phase 3 — 進階功能

- [ ] 語法高亮主題切換（淺色模式）
- [ ] i18n（English 版本）
- [ ] Terminal 互動模式
- [ ] 動態作品集（從 GitHub / GitLab API 拉資料）
- [ ] 暗黑模式以外的主題包（Catppuccin Latte / Frappe / Macchiato）
- [ ] 系列文章（Blog Series）功能

---

## 10. 內容待確認項目

> 以下需要大吳提供或確認：

- [x] **網域名稱**：**bigwoo.app**（待購買）
- [ ] **完整經歷時間軸**：2000（ASP/CS）→ 2002（PHP/電競）→ ？→ ？→ 現在（CTO），中間階段日後補充到 `timeline.json`
- [ ] **代表性專案清單**：日後補充到 `projects.json`
- [ ] **服務項目確認**：日後補充到 `services.json`
- [x] **聯繫方式**：Facebook (iambigwoo) / Instagram (bigwoo) / Line (iambigwoo) / GitHub (BIGWOO)
- [x] **Email**：不公開，全部走聯繫表單
- [x] **表單通知管道**：Email 轉寄到 bigwoo@gmail.com + 資料庫持久化（Phase 1 即包含）
- [x] **頭像**：暫時使用風格化頭像
- [x] **文案語氣**：程式碼英文 + 註解中文（如 `const role = "CTO" // 技術長`）
- [x] **OG Image**：沿用 FB 封面圖風格
- [x] **Blog**：Phase 1 即包含，用 MDX 格式，由小老婆1號協助撰稿增加 SEO 材料

---

## 11. 參考與靈感

> 同類型優秀的開發者個人網站：

- **brittanychiang.com** — 極簡 + 動畫精緻
- **leerob.io** — Next.js 核心團隊成員，極簡實用
- **joshwcomeau.com** — 超強互動 + 教學式設計
- **antfu.me** — 開源大神，極簡但有辨識度

**我們的差異化**：
上述大多是「傳統」設計語言 + Markdown 內容。我們用 **TypeScript 程式碼作為設計語言本身**，整個網站就是一份可讀的程式碼。這在個人官網中是獨特的。

---

## 附錄 A：檔案結構（草案）

```
iambigwoo/
├── app/
│   ├── layout.tsx              # Root layout + fonts + theme
│   ├── page.tsx                # 首頁
│   ├── about/page.tsx          # 關於我
│   ├── projects/page.tsx       # 作品集
│   ├── services/page.tsx       # 服務
│   ├── blog/
│   │   ├── page.tsx            # 文章列表
│   │   └── [slug]/page.tsx     # 文章內頁
│   ├── contact/page.tsx        # 聯繫
│   ├── not-found.tsx           # 404 彩蛋
│   └── feed.xml/route.ts       # RSS Feed
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── code-block.tsx          # 核心：程式碼偽裝文案元件
│   ├── typing-animation.tsx    # 打字機動畫
│   ├── editor-window.tsx       # IDE 視窗框架
│   ├── easter-eggs.tsx          # WASD 導航 / 彩蛋集合
│   ├── nav.tsx                 # 導航列
│   ├── footer.tsx              # 頁尾
│   ├── command-palette.tsx     # Cmd+K
│   ├── contact-form.tsx        # 聯繫表單
│   ├── mdx-components.tsx      # MDX 自訂元件
│   └── theme-toggle.tsx        # 主題切換
├── content/
│   ├── data/                   # ← JSON 資料（改這裡就改網站內容）
│   │   ├── profile.json        # 個人資料、技術棧
│   │   ├── projects.json       # 作品集
│   │   ├── services.json       # 服務項目
│   │   ├── timeline.json       # 職涯時間軸
│   │   ├── stats.json          # 數字亮點
│   │   ├── contact.json        # 社群連結
│   │   └── easter-eggs.json    # 彩蛋設定
│   └── blog/                   # ← MDX 文章（加檔案就加文章）
│       ├── my-first-post.mdx
│       └── ...
├── hooks/
│   ├── use-typing-animation.ts # 打字機動畫 hook
│   ├── use-scroll-section.ts   # GSAP ScrollTrigger wrapper
│   └── use-spotlight.ts        # 滑鼠光暈追蹤 hook
├── lib/
│   ├── data.ts                 # JSON 讀取工具
│   ├── schemas.ts              # Zod schemas for JSON validation
│   ├── mdx.ts                  # MDX 解析工具
│   ├── gsap.ts                 # GSAP + ScrollTrigger + Lenis 初始化（Integration Contract）
│   ├── fonts.ts                # 字型設定
│   └── utils.ts                # 工具函式
├── public/
│   ├── images/
│   │   ├── avatar.png          # 風格化頭像
│   │   ├── og-image.png        # OG 圖片（FB 封面圖風格）
│   │   ├── projects/           # 專案截圖
│   │   └── blog/               # 文章配圖
│   └── favicon.ico
├── styles/
│   └── globals.css             # Tailwind + 自訂樣式
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

# iambigwoo — 個人官網 PRD

> **Version:** 0.1.0 (Draft)
> **Last Updated:** 2026-03-23
> **Author:** 大吳 + 小老婆1號
> **Status:** 🔍 Review

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

| 層級 | 技術 | 版本 |
|------|------|------|
| Framework | Next.js | 16.2.1 |
| UI Library | React | 19.2.4 |
| UI Components | shadcn/ui | latest |
| Styling | Tailwind CSS | v4 |
| Language | TypeScript | 5.x |
| Animation | Framer Motion | latest |
| Code Highlight | Shiki / rehype-pretty-code | latest |
| Blog | MDX + next-mdx-remote | latest |
| Deployment (Frontend) | Vercel | — |
| Deployment (Backend/API) | Railway | — |
| Domain | **bigwoo.app**（待購買，尚未被註冊） | — |

### 2.1 為什麼選這個技術棧

- **Next.js 16 + React 19**：Server Components + Actions，SEO 友好且效能極佳
- **shadcn/ui**：可客製化程度高、不綁定特定設計系統、copy-paste 架構便於深度修改
- **Vercel**：Next.js 親兒子，部署 + Edge + Analytics 一站搞定
- **Railway**：如果後續需要 API / CMS / 聯繫表單後端，Railway 快速部署

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
- 後端：Next.js Server Action → 發送通知到大吳（Email / Line Notify / Discord Webhook 擇一）
- 通知：**Discord Webhook** → 專用頻道，Embed 格式（含洽詢類型、預算、內容摘要）
- 防 spam：Turnstile（Cloudflare）或 hCaptcha
- 資料暫存：Railway PostgreSQL 或 Supabase（紀錄所有洽詢，方便追蹤）
- **不公開 Email**，所有聯繫走表單

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
├── profile.json          # 個人資料、簡介、技術棧
├── projects.json         # 作品集 / 案例
├── services.json         # 服務項目
├── timeline.json         # 職涯時間軸（git log 資料）
├── stats.json            # 數字亮點
├── contact.json          # 社群連結
└── easter-eggs.json      # 彩蛋設定
```

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

---

## 6. 設計規範

### 5.1 色彩系統

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

### 5.2 字型

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

### 5.3 動畫原則

- **打字機效果**：Hero 區域的程式碼逐行 / 逐字出現
- **語法高亮漸顯**：先顯示純文字，再上色
- **Hover 效果**：程式碼區塊 hover 時顯示 tooltip（像 IDE 的 type hint）
- **頁面轉場**：檔案 Tab 切換的概念
- **滾動觸發**：各區塊滾動進入時啟動動畫
- **光標閃爍**：模擬編輯器光標

### 5.4 響應式策略

| 斷點 | 行為 |
|------|------|
| Desktop (≥1024px) | 完整 IDE 模擬佈局，sidebar + editor 分割 |
| Tablet (768-1023px) | 簡化為單欄 editor，保留行號 |
| Mobile (<768px) | 純程式碼卡片堆疊，取消 IDE chrome |

---

## 6. 互動彩蛋 (Easter Eggs)

讓技術人會心一笑的小巧思：

| 彩蛋 | 觸發方式 | 效果 |
|------|---------|------|
| **WASD 導航** | 按 WASD 鍵 | W 上滾 / S 下滾 / A 上一頁 / D 下一頁（首次按下時角落顯示提示 HUD，幾秒後淡出） |
| Konami Code | ↑↑↓↓←→←→BA | 解鎖隱藏的 `sudo` 模式，切換特殊主題 |
| Console Message | 打開 DevTools | 在 console 顯示 ASCII art + 招募訊息 |
| 404 頁面 | 訪問不存在路由 | `throw new Error("404: this.page is undefined")` |
| Source Map | 右鍵看原始碼 | 故意留下有趣的程式碼註解 |
| `Cmd+K` | 鍵盤快捷鍵 | 開啟 Command Palette 導航 |
| Terminal 模式 | 特定觸發 | 整頁變成終端機，可輸入指令探索 |

---

## 7. SEO & 效能

### 7.1 SEO 策略

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

### 7.2 效能目標

- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **TTFB** < 200ms（Vercel Edge）
- **Bundle Size**：首屏 JS < 100KB（gzipped）

---

## 8. 開發階段規劃

### Phase 1 — MVP（核心上線）

**目標**：讓網站能看、能用、有基本內容。

- [ ] 專案初始化（Next.js 16 + shadcn/ui + Tailwind v4）
- [ ] 共用元素（Navigation、Footer、Theme Toggle、Layout）
- [ ] 首頁 Hero Section（程式碼偽裝自介 + 打字機動畫）
- [ ] 關於我頁面（個人簡介 + 技術棧展示）
- [ ] 作品集頁面（至少 3-5 個代表性案例）
- [ ] 服務頁面（列出核心服務項目）
- [ ] 聯繫頁面（社群連結 + 聯繫表單 + Server Action 後端）
- [ ] 深色主題（Catppuccin Mocha 基底）
- [ ] 響應式適配（Desktop / Tablet / Mobile）
- [ ] Blog 功能（MDX 渲染、文章列表、標籤篩選、RSS Feed）
- [ ] 基礎 SEO（meta tags、OG、sitemap、structured data）
- [ ] Vercel 部署 + bigwoo.app 網域
- [ ] 基本 Analytics

### Phase 2 — 打磨

- [ ] 打字機動畫精修
- [ ] 頁面轉場動畫
- [ ] `Cmd+K` Command Palette
- [ ] 語法高亮主題切換（淺色模式）
- [ ] 互動彩蛋（至少 2-3 個）
- [ ] 效能優化（達到 Lighthouse 目標分數）
- [ ] i18n（English 版本）

### Phase 3 — 進階功能

- [ ] Terminal 互動模式
- [ ] 動態作品集（從 GitHub / GitLab API 拉資料）
- [ ] 聯繫表單資料持久化（Railway PostgreSQL 或 Supabase）
- [ ] 暗黑模式以外的主題包（Catppuccin Latte / Frappe / Macchiato）
- [ ] 系列文章（Blog Series）功能

---

## 9. 內容待確認項目

> 以下需要大吳提供或確認：

- [x] **網域名稱**：**bigwoo.app**（待購買）
- [ ] **完整經歷時間軸**：2000（ASP/CS）→ 2002（PHP/電競）→ ？→ ？→ 現在（CTO），中間階段日後補充到 `timeline.json`
- [ ] **代表性專案清單**：日後補充到 `projects.json`
- [ ] **服務項目確認**：日後補充到 `services.json`
- [x] **聯繫方式**：Facebook (iambigwoo) / Instagram (bigwoo) / Line (iambigwoo) / GitHub (BIGWOO)
- [x] **Email**：不公開，全部走聯繫表單
- [x] **表單通知管道**：Discord Webhook → 專用頻道接收洽詢通知（Embed 格式）
- [x] **頭像**：暫時使用風格化頭像
- [x] **文案語氣**：程式碼英文 + 註解中文（如 `const role = "CTO" // 技術長`）
- [x] **OG Image**：沿用 FB 封面圖風格
- [x] **Blog**：Phase 1 即包含，用 MDX 格式，由小老婆1號協助撰稿增加 SEO 材料

---

## 10. 參考與靈感

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
├── lib/
│   ├── data.ts                 # JSON 讀取工具
│   ├── mdx.ts                  # MDX 解析工具
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

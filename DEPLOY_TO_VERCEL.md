# 🚀 GlowSync 部署至 Vercel 完整規劃指南

本專案採用 **Vite + React 19 + Tailwind CSS** 架構，已為您配置好專屬的 `vercel.json`，能夠無縫直上 Vercel，享有全球 CDN 加速、SSL 安全憑證與自訂網域名稱。

---

## 方案 A：透過 GitHub 連結部署（最推薦，日後自動更新）

這是最簡單且支援持續整合（CI/CD）的方式，日後只要推代碼到 GitHub，Vercel 就會自動重新編譯部署。

### 步驟 1：將專案推送到 GitHub
1. 在 GitHub 上建立一個新的儲存庫（Repository），例如命名為 `glowsync-skincare`。
2. 在您的本機終端機中執行：
```bash
git init
git add .
git commit -m "feat: initial commit of GlowSync skincare routine app"
git branch -M main
git remote add origin https://github.com/您的帳號/glowsync-skincare.git
git push -u origin main
```

### 步驟 2：在 Vercel 匯入專案
1. 前往 [Vercel 官網 (vercel.com)](https://vercel.com) 並登入（可直接使用 GitHub 帳號快速登入）。
2. 在 Dashboard 右上方點擊 **「Add New...」 ➔ 「Project」**。
3. 找到剛才建立的 `glowsync-skincare` 儲存庫，點擊 **「Import」**。

### 步驟 3：確認建置設定
Vercel 會自動偵測 Vite 架構，預設設定即為最佳配置：
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

直接點擊 **「Deploy」**，約 30 ~ 60 秒即可完成部署！

---

## 方案 B：使用 Vercel CLI 命令列部屬（無需 GitHub）

若不想建立 GitHub 倉庫，可直接透過電腦終端機將檔案上傳至 Vercel：

1. 安裝 Vercel CLI：
```bash
npm install -g vercel
```
2. 在專案根目錄下執行登入與部署：
```bash
vercel login
vercel
```
3. 依照提示一路按下 Enter 確認預設選項（Link to existing project? ➔ No; Project name? ➔ glowsync）。
4. 發布至正式上線環境（Production）：
```bash
vercel --prod
```

---

## 關鍵設定說明（已為您配置完成）

1. **SPA 路由支援（`vercel.json`）**：
   已配置 `rewrites: [{ "source": "/(.*)", "destination": "/index.html" }]`，確保在任何子路徑重整頁面時不會出現 404 錯誤。
2. **靜態資源快取**：
   自動對 `/assets/*` 設定長效緩存（`Cache-Control: max-age=31536000`），加速全球訪問速度。
3. **資料持久化**：
   使用者的打卡記錄、自訂提醒與膚況日記皆保存在瀏覽器端 `localStorage`，重新整理或更換頁面資料不丟失，且可隨時透過「歷史記錄與匯出」按鈕下載 JSON / CSV。

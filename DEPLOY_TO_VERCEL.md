# 🚀 GlowSync 部署至 Vercel 故障排查與完整教學

### 🛠️ 剛才 Vercel 部署失敗的根本原因分析與修復

經排查，Vercel 部署失敗通常是以下 3 個原因引起的，**目前已全數修復完畢**：

1. **`npm install` 報錯 `ERESOLVE could not resolve dependency`（最常見的主因）**：
   - **原因**：`package.json` 中的 `esbuild 0.25` 與新版 `vite 8` 的 peerDependency 發生版本衝突，導致 Vercel 雲端執行 `npm install` 時直接中斷退出（Exit Code 1）。
   - **已修復**：移除了衝突的舊版 `esbuild`，並建立了 `.npmrc`（加入 `legacy-peer-deps=true`）以及生成了鎖定依賴樹的 `package-lock.json`。
2. **`vite.config.ts` 中的 `__dirname` 相容性警告**：
   - **原因**：Vite 8 在 ES 模組規範下不支持傳統 Node.js 的 `__dirname`。
   - **已修復**：改用標準的 `fileURLToPath(new URL('./', import.meta.url))`，完全符合 ESM 規範。
3. **`vercel.json` 欄位精簡化**：
   - **原因**：手動宣告 `framework: "vite"` 有時會與 Vercel 儀表板自帶的框架偵測器衝突。
   - **已修復**：保留最核心純淨的 SPA 路由重寫規則（防止重整 404）。

---

## 📌 現在如何重新部署到 Vercel？

### 推薦方式：透過 GitHub 重新推送代碼（自動觸發重新部署）

在您的本地終端機（Terminal / 命令提示字元）中，執行以下指令將修復後的檔案推送到 GitHub：

```bash
git add .
git commit -m "fix: resolve npm peer dependencies for vercel deployment"
git push
```

推送成功後，Vercel 就會**自動觸發重新部署**，這次約 30～45 秒即可成功上線！

---

### 若在 Vercel 網頁上手動點擊 Redeploy：
1. 進入 Vercel 專案儀表板（Dashboard）。
2. 進入 **Deployments** 頁面。
3. 點擊右上角的 **「Redeploy」** 按鈕（記得**取消勾選** `Use existing Build Cache`，強制重新抓取乾淨的依賴）。

---

### Vercel 專案設定確認（Project Settings）：
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

如部署時有遇到特定的錯誤日誌（Build Logs），也可以將錯誤訊息貼給我，我會立刻為您排解！

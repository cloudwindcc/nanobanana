<div align="center">
<img width="2816" height="1536" alt="bar" src="https://github.com/cloudwindcc/picx-images-hosting/raw/master/generated-image-1757502470351.3uv6wuee32.webp" />



# 🍌 Nano Banana BAR ｜ 香蕉吧 ｜ NanoBanana.BAR

## ✨ 项目主要功能

### 🎯 核心功能
这是一个基于AI的图像编辑工具，提供一键式图像变换和编辑功能：

- **🎨 56种预设效果**: 电影光效、水彩画、复古风格、赛博朋克、3D手办等丰富变换
- **🖌️ 局部精确编辑**: 支持涂抹遮罩进行局部精确编辑
- **🔄 连续编辑工作流**: 每次生成的结果可直接作为新的输入进行下一轮编辑
- **💬 自定义提示词**: 支持用户输入个性化提示词进行创意编辑
- **📚 生成历史记录**: 保存所有生成结果，方便查看和重用
- **🌐 双语界面**: 完整的中英文双语支持

### ⚡ 高级功能
- **🔍 放大预览**: 高清查看生成结果
- **🔄 横置对比**: 并排对比原图和生成效果
- **📊 滑块对比**: 滑动查看原图与生成效果差异
- **💧 自动水印**: 自动添加版权保护水印
- **📱 响应式设计**: 完美适配桌面和移动设备
- **⚙️ 效果排序**: 自定义常用效果的显示顺序

### 🛠️ 技术栈
- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **AI引擎**: Google Gemini API
- **部署平台**: Cloudflare Pages
- **样式方案**: Tailwind CSS + 自定义设计系统
- **状态管理**: React Hooks (useState, useEffect)
- **本地存储**: localStorage 效果排序持久化



<img width="1432" height="1278" alt="screenshot2" src="https://github.com/cloudwindcc/picx-images-hosting/raw/master/2.7eh4mo1nw3.webp" />


<img width="1556" height="1086" alt="screenshot3" src="https://github.com/cloudwindcc/picx-images-hosting/raw/master/3.4n82elhuch.webp" />


</div>

## 🚀 快速开始

### 四步使用流程
✅ 各种玩法一键生成，无需提示词，支持局部涂选、连续编辑：

1⃣ **选择效果** - 从56种预设效果中选择
2⃣ **上传图片** - 支持单图或双图模式
3⃣ **生成/编辑** - 一键生成或局部涂选编辑
4⃣ **继续创作** - 结果直接发送到新玩法中继续

## 🔄 核心特色：连续创作工作流
每次输出都能直接作为输入进行下一次编辑/生成，实现无限创意可能

## 🌐 在线体验

**免费使用**: https://nanoBanana.BAR

---

## 📦 本地开发

### 环境要求
- **Node.js** 16+ 
- **npm** 或 **yarn**

### 安装步骤
1. 安装依赖:
   ```bash
   npm install
   ```

2. 配置API密钥:
   复制 `.env.local.example` 为 `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```
   在 `.env.local` 中设置您的 Gemini API Key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. 启动开发服务器:
   ```bash
   npm run dev
   ```

4. 打开浏览器访问: http://localhost:5173

### 构建生产版本
```bash
npm run build
```

---

## ☁️ 部署到 Cloudflare Pages

### 方法一：GitHub Actions（推荐）
1. Fork 此仓库到您的 GitHub 账户
2. 在 Cloudflare 账户中获取 API Token 和 Account ID
3. 在 GitHub 仓库设置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`: 您的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 您的 Cloudflare Account ID
   - `GEMINI_API_KEY`: 您的 Google Gemini API Key
4. 推送到 main 分支将自动触发部署

### 方法二：Wrangler CLI
1. 安装 Wrangler CLI：
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare：
   ```bash
   wrangler login
   ```

3. 设置环境变量：
   ```bash
   wrangler secret put GEMINI_API_KEY
   ```

4. 部署：
   ```bash
   wrangler deploy
   ```

### 方法三：手动部署
1. 构建项目：
   ```bash
   npm run build
   ```

2. 在 Cloudflare Pages 控制台中连接您的 Git 仓库
3. 设置构建命令：`npm run build`
4. 设置输出目录：`dist`
5. 添加环境变量：`GEMINI_API_KEY`

---

## 📝 更新日志

### 2025-09-10
**UI优化升级**:
- 🎨 全新导航面包屑组件
- 📊 实时进度指示器
- 👀 效果预览缩略图
- 🎯 标准化按钮样式
- ❌ 增强错误处理
- ⚡ 改进加载状态
- 📄 免责声明和隐私政策页面
- 🌐 完整的双语支持

### 2025-09-05
**功能增强**:
- 🎨 更新配色方案：black & orange
- 🔍 新增放大预览功能
- 🔄 横置对比 + 对比图下载
- 📊 滑块对比功能
- 💬 自定义提示词模块

### 2025-08-28
**项目创建**:
- 🎉 初始版本发布

---

## 📄 法律信息

- [免责声明](/disclaimer.html) - 使用条款和责任限制
- [隐私政策](/privacy.html) - 数据保护和隐私承诺

## 📧 联系我们

如有问题或建议，请发送邮件至: [info@nanobanana.bar](mailto:info@nanobanana.bar)

---

## 🙏 致谢

- [Gemini 2.5 Flash Image](https://gemini.google.com/app) - AI图像生成引擎
- [Cloudflare Pages](https://pages.cloudflare.com) - 部署平台
- [React](https://reactjs.org) - 前端框架
- [Tailwind CSS](https://tailwindcss.com) - CSS框架

## 📄 许可证

本项目基于 MIT 许可证开源，详见 [LICENSE](LICENSE) 文件。
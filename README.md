<div align="center">
<img width="2816" height="1536" alt="bar" src="https://github.com/cloudwindcc/picx-images-hosting/raw/master/generated-image-1757502470351.3uv6wuee32.webp" />



# Nano Banana BAR ｜ 香蕉吧 ｜ NanoBanana.BAR

## 项目主要功能

### 核心功能
这是一个基于AI的图像编辑工具，提供一键式图像变换和编辑功能：

- **一键图像变换**: 提供56种预设的图像变换效果（如电影光效、水彩画、复古风格、赛博朋克等）
- **局部编辑**: 支持涂抹遮罩进行局部精确编辑
- **连续编辑工作流**: 每次生成的结果可直接作为新的输入进行下一轮编辑
- **自定义提示词**: 支持用户输入个性化提示词进行创意编辑

### 高级功能
- 放大预览功能
- 横置对比和对比图下载
- 滑块对比（方便原图对照）
- 自动添加水印保护
- 无需复杂提示词，简化AI图像编辑流程

### 技术栈
- 前端: React + TypeScript + Vite
- AI引擎: Google Gemini API
- 部署: Cloudflare Pages
- 样式: Tailwind CSS（自定义样式）



<img width="1432" height="1278" alt="screenshot2" src="https://github.com/cloudwindcc/picx-images-hosting/raw/master/2.7eh4mo1nw3.webp" />


<img width="1556" height="1086" alt="screenshot3" src="https://github.com/cloudwindcc/picx-images-hosting/raw/master/3.4n82elhuch.webp" />


</div>



✅各种玩法一键生成，无需提示词，支持局部涂选、连续编辑：

1⃣选择用法

2⃣上传图片

3⃣点击生成/局部涂选

4⃣直接发送到新玩法中继续


## 核心功能：每次输出都能直接作为输入进行下一次编辑/生成









Use for Free: https://nanoBanana.BAR


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Cloudflare Pages

### 方法一：使用 GitHub Actions（推荐）
1. Fork 此仓库到您的 GitHub 账户
2. 在 Cloudflare 账户中获取 API Token 和 Account ID
3. 在 GitHub 仓库设置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`: 您的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 您的 Cloudflare Account ID
   - `GEMINI_API_KEY`: 您的 Google Gemini API Key
4. 推送到 main 分支将自动触发部署

### 方法二：使用 Wrangler CLI
1. 安装 Wrangler CLI：
   `npm install -g wrangler`
2. 登录 Cloudflare：
   `wrangler login`
3. 设置环境变量：
   `wrangler secret put GEMINI_API_KEY`
4. 部署：
   `wrangler deploy`

### 方法三：手动部署
1. 构建项目：
   `npm run build`
2. 在 Cloudflare Pages 控制台中连接您的 Git 仓库
3. 设置构建命令：`npm run build`
4. 设置输出目录：`dist`
5. 添加环境变量：`GEMINI_API_KEY`




## 更新日志

- 20250905
 
  更新配色：black & orange

  新增功能：
  
  1⃣ 放大预览
  
  2⃣横置对比 + 对比图直接下载（方便直接发社交媒体）
  
  3⃣滑块对比：方便原图对照
  
  4⃣自定义提示词模块：方便个性化生成


- 20250828
  
  创建项目
  

## 

## Credits

[Gemini 2.5 Flash Image](https://gemini.google.com/app)

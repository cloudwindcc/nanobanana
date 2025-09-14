import type { Transformation } from './types';
export const TRANSFORMATIONS: Transformation[] = [
  // Viral & Fun Transformations
{ 
title: "Custom Prompt 自定义", 
prompt: "CUSTOM", 
emoji: "✍️",
description: "Describe any change you can imagine 输入自定义提示词"
},
{ 
title: "3D Figurine\n 3D手办", 
prompt: "create a 1/7 scale commercialized figure of thecharacter in the illustration, in a realistic style and environment. Place the figure on a computer desk, using a circular transparent acrylic base without any text.On the computer screen, display the ZBrush modeling process of the figure. Next to the computer screen, place a BANDAI-style toy packaging box printed with the original artwork.", 
emoji: "🦄",
description: "Turns your photo into a collectible 3D character figurine, complete with packaging. 生成你的3D专属手办"
}, 
{ 
title: "Hair Cut\n 发型九宫格", 
prompt: "给此人换上9种各不相同的发型，组成一个九宫格图，保持面部的一致性", 
emoji: "💇‍♀️",
description: "换上9种各不相同的发型，组成九宫格图."
},
  title: "Professional photo\n 蓝底证件照", 
prompt: "截取图片人像头部，帮我做成2寸证件照，要求:蓝底、职业正装、正脸、微笑", 
emoji: "📷",
description: "蓝底2寸职业证件照."
},
{ 
title: "Polaroid photo\n 手捏宝丽来照片", 
prompt: "宝丽来照片，被手握着照片的一角，画面中是参考图片，柔和暖光在海边投下影子，胶片质感，写实且具清新艺术感", 
emoji: "📷",
description: "宝丽来照片，被手握着照片的一角."
},
{ 
title: "Professional photo\n 职业艺术照片", 
prompt: "Convert the uploaded portrait into an American-style professional headshot in corporate photography style, while preserving the original person’s facial features and identity.Requirements: half-body portrait, blue textured studio background, soft natural studio lighting, high-definition clarity, realistic skin tones, clean and elegant composition.The person should wear a sleeveless white dress, minimalist and elegant design, modern and professional style, paired with simple gold jewelry. Expression should be relaxed, confident, and natural with bright, engaging eyes and a genuine smile.", 
emoji: "📷",
description: "职业艺术照."
},

{
title: "Funko Pop Figure\n Pop人偶",
prompt: "Transform the person into a Funko Pop figure, shown inside and next to its packaging.",
emoji: "📦",
description: "Reimagines your subject as an adorable Funko Pop! vinyl figure in its box."
},
{
title: "LEGO Minifigure\n 乐高迷你人偶",
prompt: "Transform the person into a LEGO minifigure, inside its packaging box.",
emoji: "🧱",
description: "Builds a LEGO minifigure version of your subject, ready for play."
},
{
title: "Crochet Doll\n 钩针娃娃",
prompt: "Transform the subject into a handmade crocheted yarn doll with a cute, chibi-style appearance.",
emoji: "🧶",
description: "Transforms your image into a soft, handmade crochet doll."
},
{
title: "Anime to Cosplay\n 动漫转角色扮演",
prompt: "Generate a highly detailed, realistic photo of a person cosplaying the character in this illustration. Replicate the pose, expression, and framing.",
emoji: "🎭",
description: "Brings an anime character to life as a realistic cosplay photo."
},
{
title: "Cute Plushie\n 可爱毛绒玩具",
prompt: "Turn the person in this photo into a cute, soft plushie doll.",
emoji: "🧸",
description: "Converts your subject into a cuddly, soft plushie toy."
},
{
title: "Acrylic Keychain\n 亚克力钥匙扣",
prompt: "Turn the subject into a cute acrylic keychain, shown attached to a bag.",
emoji: "🔑",
description: "Creates a cute acrylic keychain of your subject, perfect for hanging on a bag."
},
// Photorealistic & Enhancement
{
title: "HD Enhance\n 高清增强",
prompt: "Enhance this image to high resolution, improving sharpness and clarity.",
emoji: "🔍",
description: "Upscales your image, adding sharpness, clarity, and detail for a high-res look."
},
{
title: "Pose Reference\n 姿势参考（迁移）",
prompt: "Apply the pose from the second image to the character in the first image. Render as a professional studio photograph.",
emoji: "💃",
description: "Applies a pose from one image to a character from another.",
isMultiImage: true,
primaryUploaderTitle: "Character",
primaryUploaderDescription: "The main character",
secondaryUploaderTitle: "Pose Reference",
secondaryUploaderDescription: "The pose to apply",
},
{
title: "To Photorealistic\n 转为照片级真实感",
prompt: "Turn this illustration into a photorealistic version.",
emoji: "🪄",
description: "Converts drawings or illustrations into stunningly realistic photos."
},
{
title: "Fashion Magazine\n 时尚杂志风格",
prompt: "Transform the photo into a stylized, ultra-realistic fashion magazine portrait with cinematic lighting.",
emoji: "📸",
description: "Gives your photo a high-fashion, editorial look worthy of a magazine cover."
},
{
title: "Hyper-realistic\n 超写实风格",
prompt: "Generate a hyper-realistic, fashion-style photo with strong, direct flash lighting, grainy texture, and a cool, confident pose.",
emoji: "✨",
description: "Applies a gritty, direct-flash photography style for a cool, hyper-realistic vibe."
},
// Design & Product
{
title: "Architecture Model\n 建筑模型",
prompt: "Convert this photo of a building into a miniature architecture model, placed on a cardstock in an indoor setting. Show a computer with modeling software in the background.",
emoji: "🏗️",
description: "Transforms a building into a detailed miniature architectural model."
},
{
title: "Product Render\n 产品渲染图",
prompt: "Turn this product sketch into a photorealistic 3D render with studio lighting.",
emoji: "💡",
description: "Turns a product sketch into a professional, photorealistic 3D render."
},
{
title: "Soda Can Design\n 汽水罐设计",
prompt: "Design a soda can using this image as the main graphic, and show it in a professional product shot.",
emoji: "🥤",
description: "Wraps your image onto a soda can and places it in a slick product shot."
},
{
title: "Industrial Design Render\n 工业设计渲染图",
prompt: "Turn this industrial design sketch into a realistic product photo, rendered with light brown leather and displayed in a minimalist museum setting.",
emoji: "🛋️",
description: "Renders an industrial design sketch as a real product in a museum setting."
},
// Artistic & Stylistic
{
title: "Color Palette Swap\n 色彩调色板替换",
prompt: "Turn this image into a clean, hand-drawn line art sketch.", // Step 1 prompt
stepTwoPrompt: "Color the line art using the colors from the second image.", // Step 2 prompt
emoji: "🎨",
description: "Converts an image to line art, then colors it using a second image as a palette.",
isMultiImage: true,
isTwoStep: true,
primaryUploaderTitle: "Original Image",
primaryUploaderDescription: "The image to transform",
secondaryUploaderTitle: "Color Palette",
secondaryUploaderDescription: "The color reference",
},
{
title: "Line Art Drawing\n 线稿绘制",
prompt: "Turn the image into a clean, hand-drawn line art sketch.",
emoji: "✍🏻",
description: "Reduces your photo to its essential lines, creating a clean sketch."
},
{
title: "Painting Process\n 绘画创作过程",
prompt: "Generate a 4-panel grid showing the artistic process of creating this image, from sketch to final render.",
emoji: "🖼️",
description: "Shows a 4-step grid of your image being created, from sketch to final painting."
},
{
title: "Marker Sketch\n 马克笔素描",
prompt: "Redraw the image in the style of a Copic marker sketch, often used in design.",
emoji: "🖊️",
description: "Reimagines your photo as a vibrant sketch made with Copic markers."
},
{
title: "Add Illustration\n 添加插画元素",
prompt: "Add a cute, cartoon-style illustrated couple into the real-world scene, sitting and talking.",
emoji: "🧑‍🎨",
description: "Adds charming, hand-drawn characters into your real-world photo."
},
{
title: "Cyberpunk\n 赛博朋克风格",
prompt: "Transform the scene into a futuristic cyberpunk city.",
emoji: "🤖",
description: "Transforms your scene into a neon-drenched, futuristic cyberpunk city."
},
{
title: "Van Gogh Style\n 梵高风格（仿《星月夜》）",
prompt: "Reimagine the photo in the style of Van Gogh's 'Starry Night'.",
emoji: "🌌",
description: "Repaints your photo with the iconic, swirling brushstrokes of 'Starry Night'."
},
// Utility & Specific Edits
{
title: "Isolate & Enhance\n 隔离并增强（主体）",
prompt: "Isolate the person in the masked area and generate a high-definition photo of them against a neutral background.",
emoji: "🎯",
description: "Cuts out a masked subject and creates a clean, high-definition portrait."
},
{
title: "3D Screen Effect\n 3D屏幕效果",
prompt: "For an image with a screen, add content that appears to be glasses-free 3D, popping out of the screen.",
emoji: "📺",
description: "Makes content on a screen in your photo appear to pop out in 3D."
},
{
title: "Makeup Analysis\n 妆容分析",
prompt: "Analyze the makeup in this photo and suggest improvements by drawing with a red pen.",
emoji: "💄",
description: "Analyzes makeup in a portrait and suggests improvements with red-pen markup."
},
{
title: "Change Background\n 更换背景（Y2K风格）",
prompt: "Change the background to a Y2K aesthetic style.",
emoji: "🪩",
description: "Swaps the existing background for a cool, retro Y2K aesthetic."
},
];

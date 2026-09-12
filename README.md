# 王紫晨个人网站

公网地址：<https://32631999wzc-create.github.io/zichen-wang/>

这是一个 Next.js + React + TypeScript 个人作品集。`localhost:3000` 仅用于本地开发；公网版本由 GitHub Actions 自动构建并发布到 GitHub Pages，不依赖个人电脑保持开机。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看临时本地预览。

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 持续部署

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会自动生成静态站点并发布。可在仓库的 Actions 页面查看状态，也可手动触发 `Deploy public portfolio`。

发布前运行：

```bash
npm run check
```

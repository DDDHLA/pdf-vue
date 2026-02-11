# PDF Vue 查看器

基于 Vue2 + Webpack + Ant Design Vue 的 PDF 查看器应用。

## 功能特性

- PDF 文件上传（拖拽或点击）
- 缩略图侧边栏导航
- 多种视图模式：单页、双页、滚动
- 缩放控制：放大、缩小、适应宽度、适应高度、适应页面
- 页面旋转
- 全屏模式
- 页面导航：首页、上一页、下一页、末页

## 安装依赖

```bash
# 删除旧的 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install
```

## 开发运行

```bash
npm run serve
```

访问 http://localhost:8080

## 生产构建

```bash
npm run build
```

## 技术栈

- Vue 2.6
- Vue Router 3.5
- Ant Design Vue 1.7
- pdfjs-dist 2.16 (原生实现)
- Webpack 5 (通过 @vue/cli-service)

## 项目结构

```
pdf-vue/
├── public/              # 静态资源
├── src/
│   ├── assets/          # 资源文件
│   ├── components/      # 组件
│   │   └── PDFViewer/   # PDF查看器组件
│   ├── hooks/           # 组合式逻辑
│   ├── layouts/         # 布局组件
│   ├── views/           # 页面视图
│   ├── router/          # 路由配置
│   ├── App.vue          # 根组件
│   └── main.js          # 入口文件
├── babel.config.js      # Babel配置
├── vue.config.js        # Vue CLI配置
└── package.json         # 项目配置
```

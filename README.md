# MyReactTemplate
这是我一个用来方便自己使用和研究的React模板，虽然可能并没有那么优秀，但是后面还是有机会继续优化的。

## 计划：
- 使用wouter来进行路由管理
- 使用jotai来进行用户状态管理 
- 使用axios来进行网络请求
- 使用react-query来管理网络请求，会自己再加一层封装
- 使用material ui库
- 使用icomoon来使用图标字体来管理图标（由于不同的项目不能使用同一套图标字体，正在考虑如何处理ing）
- 使用Sass和TailwindCss来作为CSS框架
- 使用classnames来管理类名
## 关于脚本
我在脚本里面添加了`watch:tw`和`dev:tw`，用来在启动vite服务器的同时也构建tailwindcss（使用了`concurrently`包）
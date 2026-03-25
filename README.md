# 蔡子锟的个人网站 👨💻  

🔗 [访问我的个人网站](https://Dillon667.github.io) | 🚀 基于 HTML5 + CSS3 + JavaScript 构建的**个人作品集与技术成长站**  


### 🌟 核心功能  
- 🎨 **动态主题切换**：支持「亮色/暗色模式」，可手动切换或**跟随系统偏好自动适配**（通过 `localStorage` 记忆偏好）  
- 📱 **全终端响应式**：手机、平板、PC 自动适配布局，视觉体验一致  
- 🚀 **GitHub 项目自动化渲染**：通过 GitHub API 自动拉取并展示公开仓库（含技术栈、星标、更新时间等信息）  
- ✨ **交互细节拉满**：平滑滚动锚点跳转、动态 SVG 头像、卡片悬停动效、联系模块快捷导航  


### 🛠️ 技术栈  
| 技术领域       | 核心工具/特性                     |  
|----------------|----------------------------------|  
| 前端三件套     | HTML5 + CSS3（Flex/Grid 布局） + JavaScript（ES6+） |  
| 第三方服务     | GitHub API（拉取仓库数据）、Font Awesome（图标库） |  
| 开发工具       | VS Code（编码）、浏览器调试工具（Chrome DevTools） |  


### 🔍 特性亮点（技术向）  
- **动态 SVG 头像**：无需额外图片文件，内联 SVG 实现个性化头像（可自定义字符、配色、大小）  
- **智能主题感知**：通过 CSS 变量统一管理「亮色/暗色」主题色、间距、阴影，`localStorage` 记忆偏好，系统深色模式自动切换  
- **GitHub 项目自动化**：代码自动请求 GitHub API，过滤无效仓库（fork/无语言）并按「更新时间」排序，无需手动维护项目列表  
- **语义化 & 可访问性**：HTML 语义标签（`<header>`/`<section>`）+ ARIA 标签（如主题按钮 `aria-label`），提升页面可访问性  
- **模块化 CSS 架构**：CSS 变量集中管理主题，卡片/导航/页脚等模块样式解耦，便于后续扩展  


### 📝 快速定制你的站点  
想在原有代码基础上**魔改成自己的网站**？按以下步骤操作即可：  

1. **替换个人信息**：  
   - 修改 HTML 中 `<h1>`（姓名）、`.subtitle`（个人简介）、联系邮箱/ GitHub 地址/QQ 等内容（集中在 `<section id="about">` 和 `<section id="contact">` 区域）  

2. **修改 GitHub 用户名**：  
   打开 `script.js`，找到 `fetchGitHubProjects` 函数中的 `const username = "Dillon667"`，替换为**你的 GitHub 用户名**，即可自动拉取你的仓库数据  

3. **调整视觉风格**：  
   - 修改 CSS 中 `:root` 下的**主题色变量**（如 `--accent` 主题色、`--bg-body` 背景色）  
   - 调整布局间距（如 `padding`/`gap`）、字体、卡片圆角等样式  

4. **扩展功能**：  
   可在 `script.js` 中添加新模块（如「博客文章列表」「技能可视化图表」），或在 HTML 中扩展 `<section>` 区域  


### 📜 许可证  
本项目采用 **[MIT 许可证](https://opensource.org/licenses/MIT)**，可自由复用、修改与分发～  


### 📫 联系我  
想交流技术、合作项目或内推？随时戳我～  
- 邮箱：caizikun@dmu.edu.cn / caizikun@outlook.com  
- GitHub：[@Dillon667](https://github.com/Dillon667)  
- QQ：3499389102（添加请注明「技术交流」）  


💡 提示：若需本地预览，可直接克隆仓库到本地，用浏览器打开 `index.html` 即可浏览（无需额外部署～）

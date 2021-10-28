(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{393:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍vuepress搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍vuepress搭建"}},[t._v("#")]),t._v(" 介绍vuepress搭建")]),t._v(" "),s("h2",{attrs:{id:"vuepress学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress学习"}},[t._v("#")]),t._v(" VuePress学习")]),t._v(" "),s("p",[t._v("全局安装前我们需要Git和node这两个软件，关于怎么安装可以我之前hexo的视频教程")]),t._v(" "),s("p",[t._v("假如这两个都没有安装好，那么下面就不需要看了哈，栈友们")]),t._v(" "),s("h2",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[t._v("#")]),t._v(" 全局安装")]),t._v(" "),s("p",[t._v("首先我们先全局安装一下")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("stall -g vuepress  # 或者 yarn global add vuepress")]),t._v("\n")])])]),s("p",[t._v("这里等待安装完成后，我们在命令行输入 vuepress或者输入vuepress -V可以看到")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[t._v("vuepress\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Usage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("vuepress <command> [options]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" -V,")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("--version        output the version number")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" -h,")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("--help          output usage information")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Commands")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" dev")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("[options] [targetDir]  start development server")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" build")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("[options] [targetDir] build dir as static site")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" eject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("[targetDir]      copy the default theme into .vuepress/theme for customization.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" Run")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("vuepress <command> --help for detailed usage of given command.")]),t._v("\n")])])]),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("vuepress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("-V")]),t._v("\n0.14.8\n")])])]),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("p",[t._v("好，安装成功后，我们先来了解一下vuepress的目录结构")]),t._v(" "),s("p",[t._v("首先我们先新建一个项目，项目名为 “vuepress” ，然后我们进入到这个文件夹,我们在这个文件夹的空白处右键Git Bash Here，我们会看到一个黑底的命令工具，上面的全局安装也是可以在这里来安装和查看版本号的，这里不多说了，直接输入下面的命令哈")]),t._v(" "),s("p",[t._v("我们先输入一行命令，生成package.json文件")]),t._v(" "),s("p",[t._v("npm init -y")]),t._v(" "),s("p",[t._v("回车后，我们可以看到")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpress"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后你回到vuepress文件夹内，本来是空的文件夹，现在多出来一个package.json文件")]),t._v(" "),s("h3",{attrs:{id:"开始写作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始写作"}},[t._v("#")]),t._v(" 开始写作")]),t._v(" "),s("p",[s("strong",[t._v("新建README.md文件")])]),t._v(" "),s("p",[t._v("在命令框输入")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'# Hello VuePress!' > docs/README.md")]),t._v("\n")])])]),s("p",[t._v("输入完后，还是回到vuepress文件夹内，我们可以看到多出来一个docs的文件夹里面有一个README.md文件，打开这个文件可以看到有Hello VuePress的字样")]),t._v(" "),s("p",[s("strong",[t._v("运行测试一下")])]),t._v(" "),s("p",[t._v("在项目根目录的命令行输入")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("vuepress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("dev docs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("VuePress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("dev server listening at http://localhost:8080/")]),t._v("\n")])])]),s("p",[t._v("我们在浏览器打开 http://localhost:8080/ 可以看到一个很简洁的页面")]),t._v(" "),s("h3",{attrs:{id:"装饰首页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装饰首页"}},[t._v("#")]),t._v(" 装饰首页")]),t._v(" "),s("p",[s("strong",[t._v("首页配置")])]),t._v(" "),s("p",[t._v("我们来编辑一下docs目录下的README.md文件")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[t._v("---\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("home")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("heroImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/mackxin.png")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("heroText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("馨客栈")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tagline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("关注分享，关注导航，关注馨客栈")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("actionText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("每日更新 →")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("actionLink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/fuli/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("features")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("title: 馨客栈导航")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("title: 馨客栈前端导航")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("title: 馨客栈每日分享")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("MIT Licensed | Copyright © 2018-present Mackxin")]),t._v("\n---\n")])])]),s("p",[t._v("我们配置完后直接到浏览器看效果，感觉是不是不一样了哈")]),t._v(" "),s("p",[s("strong",[t._v("创建配置文件")])]),t._v(" "),s("p",[t._v("在配置之前我们先要在docs文件夹下面新建一个新的文件夹，名字为 “.vuepress”，记得前面是有个点的哦，不要忘记了。然后我们进入到这个.vuepress文件夹，再在里面新建一个config.js文件，我们的导航配置文件就是在里面配置的哈")]),t._v(" "),s("p",[s("strong",[t._v("配置favorite.icon")])]),t._v(" "),s("p",[t._v("在.vuepress文件夹下新建public文件夹，把自己制作好的icon放进去")]),t._v(" "),s("p",[t._v("然后我们在config.js配置文件来操作")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("//")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(".vuepress/config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module.exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'mackxin',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'xininn',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'/', // 这是部署到github相关的配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  markdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   lineNumbers: false // 代码块显示行号")]),t._v("\n  },\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("[")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   ['link',{rel:'icon',href:'/mackxin.ico'}]")]),t._v("\n  ],\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  sidebar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'auto', // 侧边栏配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  sidebarDepth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2, // 侧边栏显示2级")]),t._v("\n}\n")])])]),s("p",[t._v("现在重新执行命令yarn docs:dev 就可以看到效果了")]),t._v(" "),s("h3",{attrs:{id:"导航配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航配置"}},[t._v("#")]),t._v(" 导航配置")]),t._v(" "),s("p",[t._v("我们主要配置的也是config.js文件")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module.exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'mackxin',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'xininn',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("[")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    ['link',{rel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'icon',href:'/mackxin.ico'}]")]),t._v("\n  ],\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  themeConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   nav: [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { text: '首页', link: '/' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { text: '馨客栈导航', link:'http://mackxin.com/nav.html/' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { text: '馨客栈前端导航', link:'http://mackxin.com/webnav.html/' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { text: '馨客栈每日分享', link: 'http://mackxin.com/fx.html/' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { text: '关于', link: '/about' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       text: '分享', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       items:[")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("        { text: '技术' , link:'/jishu/'},")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("        { text: '每日分享' , link:'/fx/'}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       ]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     { text: 'GitHub', link: 'https://github.com/mackxin'},")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     // 下拉列表显示分组")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       text: '学习',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       items: [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       { ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         text: '前端', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         items: [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         { text: 'js', link: '/js/' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         { text: 'css', link: '/css/' }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("        ] ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       { ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         text: '后端', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         items: [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         { text: 'php', link: '/php/' },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         { text: 'java', link: '/java/'},")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         ] ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       },")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       ]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   ],")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   sidebarDepth: 2,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   lastUpdated: 'Last Updated'")]),t._v("\n   }\n}\n")])])]),s("p",[t._v("这里我们要新建about、js、css、php、java、jishu、fx等七个文件夹，我们来看看新建完的目录结构哈")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("├─docs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("  // docs目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("├─.vuepress   //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("|  ├─ public  //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("|     ├─logo.png")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("|  ├─ config.js  //配置文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("├─js   //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ├─README.md  //js首页文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("├─css  //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ├─README.md  //css首页文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("└─php  //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ├─README.md  //php首页文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("└─java  //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ├─README.md  //java首页文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("└─jishu //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ├─README.md  //技术首页文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("└─fx   //文件夹的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("│")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ├─README.md  //分享首页文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("about.md  //关于页面")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("README.md //首页配置")]),t._v("\n")])])]),s("p",[s("strong",[t._v("侧边栏配置")])]),t._v(" "),s("p",[t._v("主要配置的也是config.js文件")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("//")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(".vuepress/config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module.exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("  themeConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   sidebar: {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     '/fx/': [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       '',   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'fx1', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'fx2' ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     ],")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     '/js/': [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       '',   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'js1', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'js2'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     ],")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     '/css/': [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       '',   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'css1', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'css2'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     ],")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     '/php/': [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       '',   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'php1', ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       'php2'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     ],")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     '/java/': [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       '/java/', // JAVA文件夹的README.md 不是下拉框形式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("        title: 'java标题',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("        children: [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         '/java/java1', // 以docs为根目录来查找文件 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("         '/java/java2' // 以docs为根目录来查找文件 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("        ]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("       }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     ]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     // 下面的是首页显示侧边栏的，不需要首页显示的话可以删掉代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     // '/': [")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     //   '',    /* / */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     //   'contact', /* /contact.html */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     //   'about'  /* /about.html */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("     // ]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("​")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("   }")]),t._v("\n  }\n}\n")])])]),s("p",[t._v("参考链接："),s("code",[t._v("https://blog.csdn.net/weixin_34087301/article/details/88679324")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
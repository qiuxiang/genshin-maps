flutter 实现，极致流畅的原神地图 app，支持 android、web、linux、windows、macos。

## android 版

下载地址：https://qiuxiang.github.io/genshin-maps/app-release.apk

https://user-images.githubusercontent.com/1709072/206902921-63401f08-ab8b-48ee-a614-7749563946db.mp4

## web 版

由于 web 的一些限制，必然做不到和原生 app 一样的体验，但在做一些针对优化后流畅度也足以保证。

为什么能比 leaflet 流畅这么多？主要是因为 flutter 在 web 可以使用 canvaskit 进行渲染，在结合手势识别 + canvas
渲染的情况下大体上还原原生的体验，而 flutter 的实现也主要以 canvas 绘制为主，渲染性能是传统 UI 布局完全没法比的。
原生 web 在手势识别 + requestAnimationFrame 里用 canvas 渲染地图应该也能做到差不多的流畅度，但实现的困难程度要高不少。

当然，flutter web 也存在一些明显的缺陷，主要体现在加载慢，除了首屏要加载的东西过多，首屏加载完之后要显示的中文字体也要按需加载，
字体加载过程会导致渲染掉帧而且在加载完之前文字无法正常显示。所以我索性给 web 环境加个统一加载过程，除了加载 tiles，同时也预载可能要显示的中文字体。

https://user-images.githubusercontent.com/1709072/206903195-fcf1ece2-8e00-4fe5-aa49-132f18b3690d.mp4

体验地址：

http://7c00.shop/genshin-maps/

http://106.55.55.247:81/ (自己在国内的服务器，国内访问速度更快)

## linux 版

![telegram-cloud-document-5-6158827903820760831](https://user-images.githubusercontent.com/1709072/210091654-e37abb6b-32f4-487c-842c-6e3be919c66a.jpg)

下载地址：https://github.com/qiuxiang/genshin-maps/archive/refs/heads/linux.zip

## windows 版

![image](https://user-images.githubusercontent.com/1709072/210090421-a5172c0b-6cb1-4c08-bbb6-0887f8ff3f01.png)

下载地址：https://github.com/qiuxiang/genshin-maps/archive/refs/heads/windows.zip

## macos 版

![image](https://user-images.githubusercontent.com/1709072/210069030-b5de4f59-3edd-4c1e-a8dd-cc3e481a79bf.png)

下载地址：https://github.com/qiuxiang/genshin-maps/archive/refs/heads/macos.zip

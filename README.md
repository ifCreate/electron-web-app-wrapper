ifCreate Web App Wrapper
====

这个wrapper程序可以载入ifCreate实验室中的web app，并在几个web app间切换。现用于音乐区的Google Station和Neural DJ。

# 用法

1. 在sites.config中填入应用的网址。
- 一行一个网址
- 注意要完整的网址：包括`http://`
> AI 实验室中的应用多在`localhost`上运行

2. `npm install`, `npm run build` 制作程序包
3. 把打包了的程序在装置电脑上运行





# AI音乐维护说明

> 所有项目的地址都在https://github.com/ifCreate 下，下载后按步骤运行即可使用	

### 1. Neural Drum Machine(神经网络电子鼓)

#### 运行方法：

直接使用浏览器打开，或者通过python3开启端口建立临时服务来打开访问`python -m http.server`

#### 维护：

##### 代码模块：

在编辑器模块使用了ace插件，API地址：https://ace.c9.io/ ，编译器模块使用了将script标签加入页面dom元素并运行的方法来解决编译问题。界面中的代码模块的初始化代码在./demo/demo_init.js中。

##### 界面模块：

操作弹窗内的参数选项的说明文字目前没有确定，确定好了以后请将说明文字进行替换。说明文字会在鼠标悬浮在可调整参数上时显示。

界面使用了materialize库（https://materializecss.com/ ，类似于bootstape的一个库），所有的图标来自于https://material.io/resources/icons/?style=baseline 。需要修改任何样式可以在main.css中进行。

##### 小初高接口区分：

在小初高模块的划分中，小学版本应该将Learning按钮禁止（隐藏）掉；中学版本应该将代码模块改写为只读模式（不可以修改）；高中版本应该都可以操作。

### 2. Neural Beatbox(神经网络电子鼓)

#### 运行方法：

##### 前端：

直接使用浏览器打开，或者通过python3开启端口建立临时服务来打开访问`python -m http.server`

##### 后端：

```
cd ./backend
python app.py
```

#### 维护：

##### 代码模块：

同上

##### 界面模块：

同上

##### 小初高接口区分：

同上

##### 训练模块：

在后端使用了预训练模型加载少量数据进行了10个epoch的训练，返回了模型的loss的下降和acc的上升。前端使用echart(https://echarts.baidu.com/ )画折线图。

### 3. AI Duet(钢琴大师)

#### 运行方法：

##### 前端：

```
cd ./static
```

如果是直接运行可以通过python3开启端口建立临时服务来打开访问`python -m http.server`

如果需要访问并修改代码（可以热加载）

```
cd ./static
npm install
npm run dev
```

##### 后端：

```
cd ./server
python server.py
```

#### 维护：

##### 代码模块：

同上

##### 界面模块：

同上

##### 小初高接口区分：

同上

### 4. Melody Mixer(旋律混合)

#### 运行方法：

通过python3开启端口建立临时服务来打开访问`python -m http.server`，选择demo4

#### 维护：

##### 代码模块：

同上

##### 界面模块：

同上

##### 小初高接口区分：

小学模块把Customize选项关闭，中学模块把codeblock模块关闭，高中模块全部开放

### 5. Piano Genie(钢琴精灵)

#### 运行方法：

通过python3开启端口建立临时服务来打开访问`python -m http.server`

#### 维护：

##### 代码模块：

同上

##### 界面模块：

同上

##### 小初高接口区分：

同上
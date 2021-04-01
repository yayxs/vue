源码文件

 - compiler 编译器存放的代码 将template 编译为 render 函数
 - core 通用的与平台无关的代码
   - observer 响应系统 数据观测
   - vdom 虚拟DOM的创建和打补丁
   - instance Vue 构造函数相关设计的代码
   - global-api 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
   - components 抽象出来的通用的组件
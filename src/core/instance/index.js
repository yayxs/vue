/**
 * vue 构造函数的定义文件 添加实例属性 实例方法
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
/**
 * 定义了Vue 构造函数
 * @param {*} options
 * new Vue 传入的配置 {
 * el:"#app",
 * data:{
 * test:1
 * }
 * }
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    // Vue is a constructor and should be called with the `new` keyword
    warn('启动安全模式，应该使用new 关键字来调用Vue')
  }
  // init方法的调用
  this._init(options) // 执行 new Vue 的时候  this._init()方法被执行
}
// 将Vue作为参数传递给导入的5个方法
/**
 * Vue的原型中挂载方法
 * new Vue 的时候触发
 */
initMixin(Vue)
/**
 * Vue的原型中挂载方法
 * vm.$watch vm.$set vm.$delete
 */
stateMixin(Vue)
/**
 * Vue的原型中挂载方法
 * vm.$on vm.$once vm.$off vm.$emit
 */
eventsMixin(Vue)
/**
 * Vue的原型中挂载方法
 */
lifecycleMixin(Vue)
/**
 * Vue的原型中挂载方法
 */
renderMixin(Vue)
// 导出Vue
export default Vue

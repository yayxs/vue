import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
/**
 * 定义了Vue 构造函数
 * @param {*} options
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
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

export default Vue

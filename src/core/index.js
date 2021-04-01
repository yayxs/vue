/**
 * 主要作用是为Vue添加全局的api
 */
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
// 将Vue 构造函数作为参数传递给 initGlobalApi
initGlobalAPI(Vue)
/**
 * 添加$isServer 属性 该属性代理了 isServerRendering 方法
 */
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
/**
 * 在Vue.prototype 上添加 $ssrContext 属性
 */
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})
// 存储了当前Vue 的版本号
Vue.version = '__VERSION__'

export default Vue

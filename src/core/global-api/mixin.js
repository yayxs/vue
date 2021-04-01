/* @flow */

import { mergeOptions } from '../util/index'
/**
 * 添加mixin 全局Api
 * @param {*} Vue
 */
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}

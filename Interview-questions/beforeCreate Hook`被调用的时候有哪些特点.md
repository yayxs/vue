```js
// 初始化生命周期
    initLifecycle(vm)
    // 初始化事件
    initEvents(vm)
    // 生命周期钩子实现的方式
    initRender(vm)
    callHook(vm, 'beforeCreate')
```

所有`props` 与 `data` `methods` `computed` `watch` 都不可以使用
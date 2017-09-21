# Mirrorn

一款简洁、高效、易上手的 React Native 框架。（All inspired by [Mirror](https://github.com/mirrorjs/mirror) ：）

## 为什么？

我们热爱 React，Redux 和 React Native。

> 一个典型的 React/Redux 应用看起来像下面这样：
> * 一个 `actions/` 目录用来手动创建所有的 `action type`（或者 `action creator`）；
> * 一个 `reducers/` 目录以及无数的 `switch` 来捕获所有的 `action type`；
> * 必须要依赖 middleware 才能处理 `异步 action`；
> * 明确调用 `dispatch` 方法来 dispatch 所有的 action；
> * 手动创建 `history` 对象关联路由组件，可能还需要与 store 同步；
> * 调用 `history` 上的方法或者 dispatch action 来手动更新路由；
>
> 存在的问题？太多的 [样板文件](https://github.com/reactjs/redux/blob/master/docs/recipes/ReducingBoilerplate.md) 以及繁琐甚至重复的劳动。
>
> 实际上，上述大部分操作都是可以简化的。比如，在单个 API 中创建所有的 `action` 和 `reducer`；比如，简单地调用一个函数来 dispatch 所有的同步和异步 action，且不需要额外引入 middleware；再比如，使用路由的时候只需要关心定义具体的路由，不用去关心 `history` 对象，等等。
>
> 这正是 Mirror 的使命，用极少数的 API 封装所有繁琐甚至重复的工作，提供一种简洁高效的更高级抽象，同时保持原有的开发模式。

我们基于Mirror的优秀代码，适配了React Native的同时，集成了 react-navigation 作为路由。
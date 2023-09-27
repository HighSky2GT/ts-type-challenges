/*
  3 - 实现 Omit
  -------
  by Anthony Fu (@antfu) #中等 #union #built-in
  ### 题目
  不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。
  `Omit` 会创建一个省略 `K` 中字段的 `T` 对象。
  例如：
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  const todo: TodoPreview = {
    completed: false,
  }
  ```
  > 在 Github 上查看：https://tsch.js.org/3/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MyOmit<T, K extends keyof T> = { [key in keyof T as key extends K ? never : key]:T[key]}
// 笔记
// 1.  使用MyOmit输入泛型时的提示，要限制K的取值，(K extends keyof T)
// 2.  分析Omit的功能，返回一个对象，去除T中的K属性
// 2.1 返回的对象属性在T中：key in keyof T
// 2.2 并且对象属性不在K中：key extends K ? never : key
// 2.3 二者使用as连起来：将key断言成2.2就会剔除T中的K属性
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3/answer/zh-CN
  > 查看解答：https://tsch.js.org/3/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

/*
  4 - 实现 Pick
  ### 题目
  不使用 `Pick<T, K>` ，实现 TS 内置的 `Pick<T, K>` 的功能。
  **从类型 `T` 中选出符合 `K` 的属性，构造一个新的类型**。
  例如：
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
*/
/* _____________ 你的代码 _____________ */
// 题目
// type MyPick<T, K> = any
// 答题
type MyPick<T, K extends keyof T> = { [key in K]: T[key] }
/* 笔记
 * 1. keyof关键字：将对象类型的键组合成一个联合类型。
 * 2. { [key in K]: T[key] }中 [key in K] 的作用：取联合类型的值，主要用于数组和对象的构建
 */

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

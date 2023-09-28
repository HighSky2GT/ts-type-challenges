/*
  12 - 可串联构造器
  -------
  by Anthony Fu (@antfu) #中等 #application
  ### 题目
  在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，
  但在 TypeScript 中，你能合理的给它赋上类型吗？

  在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。
  你需要提供两个函数 `option(key, value)` 和 `get()`。
  在 `option` 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 `get` 获取最终结果。
  例如
  ```ts
  declare const config: Chainable
  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()
  // 期望 result 的类型是：
  interface Result {
    foo: number
    name: string
    bar: {
      value: string
    }
  }
  ```
  你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。
  你可以假设 `key` 只接受字符串而 `value` 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 `key` 只会被使用一次。
  > 在 Github 上查看：https://tsch.js.org/12/zh-CN
*/

/* _____________ 你的代码 _____________ */

// type Chainable<T extends Record<string,unknown>={}> = {
//   option<K extends string,V>(key: K extends keyof T ? V extends T[K] ?never:K:K, value: V) : Chainable<Omit<T, K> & Record<K, V>>
//   get():T
// }

// interface Chainable<T extends Record<string, unknown> = {}> {
//   option<K extends string, V>(key: K extends keyof T ? V extends T[K] ? never : K : K, value: V): Chainable<Omit<T, K> & Record<K, V>>
//   get(): T
// }

class Chainable<T extends Record<string, unknown> = {}>{
  option<K extends string, V>(key: K extends keyof T ? V extends T[K] ? never : K : K, value: V): Chainable<Omit<T, K> & Record<K, V>> {
    throw new Error('Method not implemented.')
  }
  get(): T {
    throw new Error('Method not implemented.')
  }
}

// 笔记
// 三种实现方式：type 、 interface 、 class 都类似。
// 1. 为类型添加泛型，限制范围是{string,unknown}的对象，并提供默认值{}
// 2. get最简单，直接返回泛型。
// 3. option方法首先可以判断返回类型是Chainable<T>
// 3.1  参数key限制为不可重复，所以 key: K extends keyof T ? V extends T[K] ? never : K : K
// 3.2  参数value不做限制。
// 3.3  又因为直接返回Chainable<T>不能将相同 key 的类型覆盖，所以使用Omit去掉相同类型的key，最后Chainable<Omit<T, K> & Record<K, V>>

/* _____________ 测试用例 _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/12/answer/zh-CN
  > 查看解答：https://tsch.js.org/12/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

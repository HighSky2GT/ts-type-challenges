/*
  43 - 实现 Exclude
  -------
  ### 题目
  实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。
  > 从联合类型 `T` 中排除 `U` 中的类型，来构造一个新的类型。
  例如：
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
*/

/* _____________ 你的代码 _____________ */
// 题目
// type MyExclude<T, U> = any
// 答题
type MyExclude<T, U> = T extends U ? never : T
// 笔记
// never类型：表示永远不会出现的值。

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


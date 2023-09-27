/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #简单 #utils

  ### 题目

  实现一个 `IF` 类型，它接收一个条件类型 `C` ，
  一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 
  `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

  例如：

  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```

  > 在 Github 上查看：https://tsch.js.org/268/zh-CN
*/

/* _____________ 你的代码 _____________ */

type If<C extends Boolean, T , F> = C extends true ? T : F

// 笔记
// type不能直接使用泛型作为三元运算符的条件判断，只能使用extends关键字做类型判断。

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/268/answer/zh-CN
  > 查看解答：https://tsch.js.org/268/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

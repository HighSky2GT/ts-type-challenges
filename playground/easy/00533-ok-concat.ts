/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #简单 #array
  ### 题目
  在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，
  这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
  例如：
  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```
  > 在 Github 上查看：https://tsch.js.org/533/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Concat<T extends readonly any[], U extends readonly any[]> = [...T,...U]
// 笔记
// as const：不让TS进行类型推断，将这个表达式推断为最具体的类型。
// 如：const tuple = [1] as const;
// tuple默认会被推断为数组类型，如果不用as const断言，数组中的值是可以被修改的。但被修饰后，tuple类型被固定成[1],不能改变。

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = [1] as const

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// @ts-expect-error
type error = Concat<null, undefined>

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/533/answer/zh-CN
  > 查看解答：https://tsch.js.org/533/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

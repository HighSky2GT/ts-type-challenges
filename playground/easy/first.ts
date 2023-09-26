/*
  14 - 第一个元素
  -------
  ### 题目
  实现一个`First<T>`泛型，它接受一个数组`T`并返回它的第一个元素的类型。
  例如：
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  type head1 = First<arr1> // 应推导出 'a'
  type head2 = First<arr2> // 应推导出 3
  ```
*/

/* _____________ 你的代码 _____________ */
// 题目
// type First<T extends any[]> = any
// 答题
type First<T extends any[]> = T extends [] ? never : T[0]
// 笔记
/* type类型可以使用三元运算符做类型运算  */

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


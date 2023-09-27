/*
  18 - 获取元组长度
  -------
  by sinoon (@sinoon) #简单 #tuple

  ### 题目

  创建一个`Length`泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

  例如：

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

*/

/* _____________ 你的代码 _____________ */
// 题目
// type Length<T> = any
// 答题
type Length<T extends readonly any[]> = T['length']
// 笔记
// 需求是接受只读数组，所以要限制泛型类型。
// 数组的length是数组的一个属性，限制类型后自然就可以通过T['length']获取

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]


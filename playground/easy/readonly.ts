/*
  7 - 对象属性只读
  -------
  ### 题目
  不要使用内置的`Readonly<T>`，自己实现一个。
  泛型 `Readonly<T>` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会是只读 (readonly) 的。
  也就是不可以再对该对象的属性赋值。
  例如：
  ```ts
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
*/

/* _____________ 你的代码 _____________ */
// 题目
// type MyReadonly<T> = any
// 答题
type MyReadonly<T> = { readonly [key in keyof T]: T[key] }
/* 笔记
   - readonly关键字：属性修饰符，把一个属性变成只读的，必须在声明的时候或者在类中对它进行初始化。
     -- 可以在 class interface type array-like 中使用它，也可以用来定义一个函数的参数
 */
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


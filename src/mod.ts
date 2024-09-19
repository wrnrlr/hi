export type {Getter,Setter,Callback} from './signal.ts'
export {signal,effect,sample,batch,memo,root,onMount} from './signal.ts'
export {nbsp} from './constants.ts'
export {wrap,Show,List2,List} from './flow.js'
export type {Runtime} from './runtime.ts'
import {runtime} from './runtime.ts'
export type {HyperScript,Child,Props} from './hyperscript.ts'
import {hyperscript} from './hyperscript.ts'

const r = runtime(window as any)

/** h
@example Element with a single child
```js
h('h1','Hello World!')
```
@example Element with multiple children
```js
h('p',['Hello ',h('em','World!')])
```
@example Component with event handler
```js
h(Input,{onInput:e => {}})
```
@group
*/
const h = hyperscript(r)

const render = r.render

import {signal} from './signal.ts'
import {wrap} from './flow.js'

/**
@group Utils
*/
export function $(a:any,b:any):any {
  const t = typeof a
  if (t==='function') return wrap(a,b)
  else return signal(a,b)
}

export {h,render}

import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayoutChunk" */ '../01-lazyload/layout/LazyLayout'
    )
)
// const Lazy2 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyCustom2" */ '../01-lazyload/pages/LazyPage2'
//     )
// )
// const Lazy3 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "LazyCustom3" */ '../01-lazyload/pages/LazyPage3'
//     )
// )

export const routes: Route[] = [
  { path: 'lazyload/*', Component: LazyLayout, name: 'Lazy Layout' },
  { path: 'no-lazy', Component: NoLazy, name: 'No Lazy' },
]

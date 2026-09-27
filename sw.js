// 沙水实验室（https://aixinshijie.github.io/sandlab/）自己的 Service Worker：什么也不拦（没有 fetch 处理，请求直接走网络），只占住 /sandlab/ 这一块。
// 为什么要它：同一个域名上的主站（老师端 / 学生端）有登录门，它的 /sw.js 管整个域名。浏览器按 scope 最长的那个 Service Worker 办事，
// 注册过这个的浏览器打开 /sandlab/ 下的页面就归它管，主站的门以后就算忘了放行 /sandlab 也拦不到这里。
// 只在线上版注册（app/sw-register.tsx；本地版挂在根路径，不注册）。要撤掉：把这个文件换成 install 时 skipWaiting、activate 时 self.registration.unregister() 的版本发上去。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

import { Router } from "./router.js"
const router = new Router()

router.add("/", "/Pages/home.html")
router.add("/the-universe", "/Pages/the-universe.html")
router.add("/exploration", "/Pages/exploration.html")
router.add(404, "/Pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
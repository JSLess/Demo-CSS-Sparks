
import { Application , Router } from 'Oak'
import { handleEvent } from './Event.ts'
import { serveStyle } from './Style.ts'
import { servePage } from './Page.tsx'


const app = new Application({
    logErrors : true
})


const router = new Router

router.get('/Style.css',serveStyle)
router.get('/Event',handleEvent)
router.get('/',servePage)


app.use(router.routes())
app.use(router.allowedMethods())


await app.listen({ port : 8000 })


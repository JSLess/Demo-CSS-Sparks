
export { serveStyle }

import { Context } from 'Oak'


const
    root = `${ Deno.cwd() }/Source/` ,
    path = `Style.css`


async function serveStyle ( context : Context ){
    await context.send({ root , path })
}

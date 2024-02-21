
export { middleware as servePage }

import { AsyncResponse } from './AsyncResponse.ts'
import { Context } from 'Oak'
import { render } from 'Preact/Render'
import { user } from './State.ts'


function middleware (
    context : Context
){

    const { response } = context

    const { headers } = response

    headers.set('Content-Type','text/html;charset=utf-8')
    headers.set('Transfer-Encoding','chunked')
    headers.set('Connection','keep-alive')
    headers.set('Keep-Alive',`timeout=${ 60 * 60 }`)

    user.connection = new AsyncResponse

    response.body = user.connection.readable

    const style = `
        .Element:hover {
            list-style-image : url('/Event?Action=Hover&Timestamp=${ Date.now() }') ;
        }
    `

    const html = `<!DOCTYPE html>` + render(
        <html>
            <head>

                <link
                    href = '/Style.css'
                    rel = 'stylesheet'
                />

                <style dangerouslySetInnerHTML = {{ __html : style }} />

            </head>
            <body>

                <div class = 'Element' >
                    Element
                </div>

                <div class = 'Indicator' >
                    Indicator
                </div>

            </body>
        </html>
    )

    user.connection.write(html)
}

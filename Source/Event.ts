
export { middleware as handleEvent }

import { Context } from 'Oak'
import { user } from './State.ts'


function middleware (
    context : Context
){

    const params = context.request.url.searchParams

    const action = params.get('Action')

    let css = ''

    switch ( action ){
    case 'Unhover' :

        css += `

            :root {
                ---Indicator : #7c4445 ;
            }

            .Element:hover {
                list-style-image : url('/Event?Action=Hover&Timestamp=${ Date.now() }') ;
            }
        `

        break
    case 'Hover' :

        css += `

            :root {
                ---Indicator : #477c46 ;
            }

            .Element {
                list-style-image : url('/Event?Action=Unhover&Timestamp=${ Date.now() }') ;
            }
        `

        break
    }

    user.connection?.write(`<style>${ css }</style>`)

    context.response.status = 200
}

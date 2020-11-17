import { api_domain, api_middleware_domain } from './config'

let api_route = (suffix: string) => `${api_domain}/${suffix}`
let middleware_api_route = (suffix: string) => `${api_middleware_domain}/${suffix}`

export const loginRoute: string = api_route('login')
export const syncRoute: string = middleware_api_route(`sync`)
export const appointmentStructureRoute: string = middleware_api_route(`sync/structure`)
export const reasonsRoute: string = api_route('administration/items')
export const userInfoRoute: string = api_route(`administration/users`)
export const clientsRoute: string = api_route(`administration/peoples`)
export const schedulingsRoute: string = middleware_api_route(`schedulings`)
export const appointmentsRoute: string = middleware_api_route('appointments')
export const startRoute: string = middleware_api_route('start')
export const finishRoute: string = middleware_api_route('finish')

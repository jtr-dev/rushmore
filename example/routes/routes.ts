import {
    All
} from './index'

export const routes = (app) => {
    /**
     *  API Routes
     */
    app.get('api/all', All)

}
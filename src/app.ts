import express, { json } from 'express'
import routes from './routes'

class App {
    public express: express.Application
    constructor() {
        this.express = express()
        this.routes()
    }
    
    private routes(): void {
        this.express.use(json())
        this.express.use(routes)
    }
}

export default new App().express
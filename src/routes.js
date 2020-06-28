import { Router } from 'express'
import UserController from './controllers/user.controller'
import AuthSecondLevel from 'auth-second-level'

const routes = Router()

routes.get('/uuid', AuthSecondLevel.validateUUID, UserController.index)
routes.get('/accountid', AuthSecondLevel.validateAccountId, UserController.index)
routes.get('/billing-profile', AuthSecondLevel.validateBillingProfile, UserController.index)
routes.get('/nrdocument', AuthSecondLevel.validateNrDocument, UserController.index)

export default routes
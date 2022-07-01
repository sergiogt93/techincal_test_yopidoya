import { highestOccurrence, maxSubarraySum, averagePair } from '../controllers/CalculateAlgorithms.controller'
import { Router } from 'express'

const calculateAlgorithmsRouter: Router = Router()

calculateAlgorithmsRouter.post('/highestOccurrence', highestOccurrence)
calculateAlgorithmsRouter.post('/maxSubarraySum', maxSubarraySum)
calculateAlgorithmsRouter.post('/averagePair', averagePair)

export default calculateAlgorithmsRouter

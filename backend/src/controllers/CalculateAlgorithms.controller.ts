import { Request, Response } from "express";

import {
  uniqueValuesArray,
  quantityOcurrence,
  indexesHighestChar,
  sumArray,
  sumSubsarray,
  isAverageEqual
} from "../services/calculateOperations";

/**
 * @param { Array<number | string> } operators need to list of numbers or chars
 * @returns list of numbers more occurences
*/
export function highestOccurrence(req: Request, res: Response) {
  try {
    const { operators } = req.body;

    const filterUniques: Array<number | string> = uniqueValuesArray(operators)
    const quantityRepeat: Array<number> = quantityOcurrence(filterUniques, operators)
    const indxsHighestChar: Array<number | undefined> = indexesHighestChar(quantityRepeat)
    const maxNumberOccurrence: Array<number | string> = indxsHighestChar.map((unique, index) => filterUniques[index])

    return res.send(maxNumberOccurrence)
  } catch (error) {
    return res.send('error')
  }
}

/**
 * @param { Array<number> } operators need to list of numbers
 * @returns max sum of multiples subarrays
*/
export function maxSubarraySum(req: Request, res: Response) {
  try {
    const { operators, length_subarray } = req.body;

    const subArray: number[] | null = sumSubsarray(operators, length_subarray)

    if(subArray === null) {
      return res.send("No hay resultado posible, ponga mas numeros")
    }

    const maxSum: number = Math.max(...subArray)

    return res.json(maxSum)
  } catch (error) {
    return res.send('error')
  }
}

/**
 * @param { Array<number> } operators need to list of numbers
 * @param { number } number_average need to a average expected
 * @returns is number passed to is equal to average of the array
*/
export function averagePair(req: Request, res: Response) {
  const { operators, number_average } = req.body;

  try {
    const sumTotal: number = sumArray(operators)

    const average: number = sumTotal / operators.length

    const isEqual: boolean = isAverageEqual(average, number_average)

    return res.json(isEqual)
  } catch (error) {
    return res.send('error')
  }
}
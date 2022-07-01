/**
 * @param { Array<string | number> } input need to list of numbers or char
 * @returns distinct numbers or char that exists in array
*/
export function uniqueValuesArray (input: Array<string | number>) {
  return Array.from(new Set(input))
}

/**
 * @param { Array<string | number> } filterUniques need to list of numbers or char
 * @returns quantity of repeat one number or char
*/
export function quantityOcurrence (filterUniques: Array<string | number>, inputs: Array<string | number>): Array<number> {
  const quantityRepeat: Array<number> = []

  filterUniques.forEach((input) => {
    let quantity:number = 0
    for (const character of inputs) {
      if(input === character) quantity++
    }
    quantityRepeat.push(quantity)
  })

  return quantityRepeat
}

/**
 * @param { Array<string | number> } array need to list of numbers
 * @returns indexes of repeat one number or char
*/
export function indexesHighestChar (array: Array<number>): Array<number | undefined> {
  const max:number = Math.max(...array);
  const indexes: Array<number | undefined> =  array.map((char, index) => {
    if(char === max) return index
  })
  const removeNulls: Array<number | undefined> =  indexes.filter(char => char !== undefined)
  return removeNulls
}

/**
 * @param { Array<number> } array need to list of numbers
 * @returns sum of the one part in the array numbers
*/
export function sumSubsarray (array: Array<number>, num: number): Array<number> | null {
  let index: number = 0, total: number = 0
  let valuesSumSubArray: number[] = []

  if(index > array.length) return null

  while(index < array.length - num) {
    const subArray: number[] = array.slice(index, index + num)
    total = sumArray(subArray)
    valuesSumSubArray.push(total)
    total = 0
    index++
  }

  return valuesSumSubArray
}


/**
 * @param { Array<number> } array need to list of numbers
 * @returns sum total in the array numbers
*/
export function sumArray (array: Array<number>): number {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  )
}

/**
 * @param { number } averagePair need to one number
 * @param { number } averageExpected need to one number
 * @returns determine if the average of the pair equals the target average.
*/
export function isAverageEqual (averagePair: number, averageExpected: number): boolean {
  averagePair = Math.round(averagePair)
  averageExpected = Math.round(averageExpected)
  return averageExpected >= averagePair - 1 && averageExpected <= averagePair + 1
}
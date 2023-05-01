export function Calculator(
  a: string | number, 
  b: string | number, 
  c: string | number) : any 
  {
    const calculation: number = (+a / (+b * 52) / 60 * +c)
    const convert: string = calculation.toString()

    let splitUp: string[] = convert.split('.')

    const twoPennies = (array: string[]) => {
      if (array[1] == undefined){
        return;
      } else {
      let pennies: string[] = array[1].split('')
      return `£${array[0]}.${pennies[0]}` + `${pennies[1]}`
      }
    }

    const earnings: string | undefined = twoPennies(splitUp)
    return earnings
  }
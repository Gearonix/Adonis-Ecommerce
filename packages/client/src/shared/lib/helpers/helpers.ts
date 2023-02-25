import {ObjectOptional} from 'shared/types/common'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

class Helpers {
  public nameToEmail(email: string) {
    return this.capitalize(email.split('@')[0])
  }

  public capitalize(str: string) {
    return str.toUpperCase()[0] + str.slice(1)
  }

  public attachStrings(...args: string[]) {
    return args.join(' ')
  }

  public isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0
  }

  public differenceBetweenObjects<T extends Object>(initialObject: T, changedObject: T) {
    const difference: ObjectOptional<T> = {}

    for (const key in initialObject) {
      if (initialObject[key] !== changedObject[key]) {
        difference[key] = changedObject[key]
      }
    }
    if (this.isObjectEmpty(difference)) {
      return null
    }

    return difference
  }
  public reformatMysqlDate(date: string) {
    return dayjs(date).format('LL')
  }
  public partial<T extends Object>(obj: T): Partial<T> {
    return JSON.parse(JSON.stringify(obj))
  }
  public toQuery<T extends Object>(obj: T) {
    return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&')
  }
  public strToUndefined(str: string) {
    return str === '' ? undefined : str
  }
  public cropped(str: string, char = 30) {
    return str.length > 30 ? str.slice(0, char) + '...' : str
  }
}

export default Helpers

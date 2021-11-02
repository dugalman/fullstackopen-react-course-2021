
import OneCountry from './OneCountry'
import ManyCountries from './ManyCountries'
import SomeCountries from './SomeCountries'

const Country = props => {
  const TOO_MANY_COUNTRIES = 10
  const listSort = props.list
  let out

  if (listSort.length === 0) return ''
  if (listSort.length > TOO_MANY_COUNTRIES) return ManyCountries
  if (1 < listSort.length && listSort.length <= TOO_MANY_COUNTRIES)
    return SomeCountries(listSort, props.handler)
  if (listSort.length === 1) return OneCountry(listSort[0])

  return out
}

export default Country

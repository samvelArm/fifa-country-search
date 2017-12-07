import { getCountry } from "./country";


export const getCountryData = () => {
  return (dispatch) => {
    dispatch(getCountry.request())
    setTimeout(() => {
      dispatch(getCountry.success('data'))
    }, 2000)
  }
}
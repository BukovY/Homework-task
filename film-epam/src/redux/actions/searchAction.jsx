import {API_KEY, SET_SEARCH_RESULT, SET_SEARCH_PAGE, SET_SEARCH_RENDER} from "../constants";

export const setSearchRezult = (data) => ({
    type:SET_SEARCH_RESULT,
    payload: data
})

export const setSearchPage = (num) => ({
    type: SET_SEARCH_PAGE,
    payload: num
})
export const setSearchRender = (act) => ({
    type:SET_SEARCH_RENDER,
    payload: act
})
export const getSearchData = (searchString, page) => {
    let search = searchString
    search = search.split(" ").join('%20')
    return async (dispatch) => {
        const urlGetFilmInfo = `
https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${search}&page=${page}`
        const info = await fetch(urlGetFilmInfo)
        const searchRezult = await info.json()
        console.log(searchRezult)
        dispatch(setSearchRezult('sdsd'))
    }
}
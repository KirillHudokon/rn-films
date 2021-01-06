import * as types from '../types'
const initialState = {
    loading: false,
    films: [],
    error: undefined
}
export function filmsReducer(state=initialState, action) {
    switch (action.type) {
        case types.GET_FILMS_LOADING:
        case types.DELETE_FILM_LOADING:  
        case types.SORT_FILMS_LOADING: 
        case types.SEARCH_FILMS_LOADING: 
        case types.IMPORT_FILE_LOADING:
            return { films: [], loading: true, error: undefined }  
        case types.ADD_FILM_LOADING:
            return {...state, loading: true, error: undefined }  
        case types.GET_FILMS_SUCCESS: 
        case types.ADD_FILM_SUCCESS:
        case types.DELETE_FILM_SUCCESS:    
        case types.SORT_FILMS_SUCCESS:
        case types.SEARCH_FILMS_SUCCESS:    
        case types.IMPORT_FILE_SUCCESS:
            return { ...state, films: action.payload, loading: false }
        case types.GET_FILMS_FAIL:
        case types.DELETE_FILM_FAIL:
        case types.SORT_FILMS_FAIL:
        case types.SEARCH_FILMS_FAIL:
        case types.IMPORT_FILE_FAIL:    
            return { films: [], loading: false, error: action.payload }    
        
        case types.ADD_FILM_FAIL: 
            return { ...state, loading: false, error: action.payload }         

        case types.RESET_ERROR:
            return {...state, error: undefined}    
        default:
            return state
    }
}
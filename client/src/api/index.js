import axios from 'axios'
const url = "http://localhost:5000/films"
export class FilmsApi {
    get(){
        return axios.get(url)
    }
    post(film){
        return axios.post(url, film)
    }
    delete(id){
        return axios.delete(`${url}/${id}`)
    }
}

export class FilmsActionsApi {
    sort(type){
        return axios.get(`${url}/sort/${type}`)
    }
    searchBy(how, text){
        return axios.post(`${url}/search/${how}`, {text})
    }
    import(file){
        const formData = new FormData()
        formData.append('file', file)
        return axios.post(`${url}/import/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
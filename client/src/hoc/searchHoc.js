import React, {useState} from 'react'
export default (Component) => (props) => {
    const timer = 1500;
    const [value, setValue] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(0)
    const searchTimeoutHandler = (value) => {
        const trimmedValue = value.trim()
        clearTimeout(searchTimeout)
        setSearchTimeout(setTimeout(()=>{
            if(!trimmedValue.length){
                props.getAll()
            }else{
                props.searchFilms()(trimmedValue)
            }
        },timer))
        

    }
    const changeValue =  val => {
        searchTimeoutHandler(val)
        setValue(val)
    } 
    return (
        <Component
            {...props}
            value = {value}
            changeValue = {changeValue}
        />
    )
}
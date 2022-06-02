import { useContext } from 'react'
import { dataContext } from '../../dataContext/dataContext'
import './search_input.css'

export const SearchInput = () =>{
    const {setSearchValue} = useContext(dataContext)
    const handleChange = (e) => {
        setSearchValue(e.target.value.toLowerCase())
    }
    
    return (
        <input type='text' className='page__movie__input' onChange={(e) => handleChange(e)} id='page__movie__input__value' placeholder='Search'/>
    )
}
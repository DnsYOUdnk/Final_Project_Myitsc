import './search_input.css'

export const SearchInput = ({setMediaData, localStorageMediaData, setReceivedData}) =>{
    const handleChange = (e) => {
        const searchValue = e.target.value.toLowerCase();

        if(searchValue.length < 3) {
            setReceivedData(localStorageMediaData);
            return
        };

        let searchMedia = localStorageMediaData.filter(({ title }) => {
            return ( title.toLowerCase().includes(searchValue) )
        }) 
        setMediaData({data: searchMedia, currentPage: 0, totalPages: 0})
    }
    
    return (
        <input type='text' className='page__movie__input' onChange={(e) => handleChange(e)} id='page__movie__input__value' placeholder='Search'/>
    )
}
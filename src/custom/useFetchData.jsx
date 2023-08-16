import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../store/dataStore'
import axios from 'axios'

const useFetchData = (url) => {

    const dispatch = useDispatch()

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(url, { page: 1 })
            dispatch(setData(response.data.results))
        } catch (error) {
            console.log(error)
        }
    }, [dispatch, url])


    useEffect(() => {
        fetchData()
    }, [fetchData])

    const fetchedData = useSelector(state => state.data)

    return (
        fetchedData
    )
}

export default useFetchData

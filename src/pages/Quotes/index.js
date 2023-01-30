import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../components/Routers/Error'
import Loading from '../../components/Routers/Loading'
import { errorSelector, fetchQuotes, quotesSelector, statusSelector } from '../../redux/quotesSlice'
import Item from './item'

function Quotes() {
  const data = useSelector(quotesSelector)
  const status = useSelector(statusSelector)
  const error = useSelector(errorSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuotes())
    }
  }, [dispatch])

  if (status === 'loading') {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <div>
      <h2>Quotes</h2>

      {status === 'succeeded' && data.map((quotes) => (
        <Item quotes={quotes} />
      ))}

      {status === 'succeeded' && <div style={{ textAlign: 'center', padding: 30 }}>{data.length} quotes</div>}
    </div>
  )
}

export default Quotes
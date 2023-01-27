import React, { useEffect } from 'react'

import './styles.css'
import Masonry from 'react-masonry-css'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCaracters } from '../../redux/charactersSlice'
import Loading from '../../components/Routers/Loading'
import Error from '../../components/Routers/Error'
import { Link } from 'react-router-dom'

function Home() {
  const characters = useSelector((state) => state.characters.items)
  const isLoading = useSelector((state) => state.characters.isLoading)
  const error = useSelector((state) => state.characters.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCaracters())
  }, [dispatch])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <div>
      <h1>Characters</h1>

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {characters.map((character) => (

          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img alt={character.name} src={character.img} className='character' />

              <div className='char_name'>{character.name} - <b>{character.nickname}</b></div>
            </Link>
          </div>
        ))}
      </Masonry >


    </div >
  )
}

export default Home
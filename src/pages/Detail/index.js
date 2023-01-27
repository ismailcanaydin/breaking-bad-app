import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCaracters } from '../../redux/charactersSlice'

function Detail() {
  const characters = useSelector((state) => state.characters.items)

  const dispatch = useDispatch()

  const { char_id } = useParams()

  useEffect(() => {
    dispatch(fetchCaracters())
  }, [dispatch]);

  const charakter_id = characters.map((character) => (
    character
  ))
  const searh_id = charakter_id.find(id => id.char_id == char_id)

  return (
    <div>
      Detail

      <div>
        <h2>{searh_id.name} - {searh_id.nickname}</h2>
        <img alt={searh_id.name} src={searh_id.img} style={{ width: '50%' }} />
      </div>

      <pre>{JSON.stringify(searh_id, null, 2)}</pre>
    </div>
  )
}

export default Detail
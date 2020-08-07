import React from 'react'
import { BuahProvider } from './BuahTugas15Context'
import BuahTugas15Form from './BuahTugas15Form'

const Buah = () => {

  return (
    <>
      <BuahProvider>
        <BuahTugas15Form />
      </BuahProvider>
    </>
  )
}

export default Buah
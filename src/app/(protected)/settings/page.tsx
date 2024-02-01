import React from 'react'
import { auth } from '../../../../auth'

const Settingpage = () => {
    const session = auth()
  return (
    <>
    {JSON.stringify(session)}
    </>
  )
}

export default Settingpage
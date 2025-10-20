import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader';

const override = {
    display: "block",
    margin: "100px auto",
}
const Spinner = ({ loading }) => {
  return (
    <MoonLoader 
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
        margin={2}
    />
  )
}

export default Spinner
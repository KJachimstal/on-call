import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    fetch("/data.csv").then(response => {
      // The API call was successful!
      return response.json();
    }).then(data => {
      // This is the JSON from our response
      console.log(data);
    }).catch(err => {
      // There was an error
      console.warn('Something went wrong.', err);
    });
  }, [])

  return (
    <>

    </>
  )
}

export default App

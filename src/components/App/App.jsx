import React, { useEffect } from 'react';
import Papa from 'papaparse';

import '../../assets/scss/index.scss';

const App = () => {

  useEffect(() => {
    fetch("/data.csv").then(response => {
      // The API call was successful!
      return response.text();
    }).then(data => {
      // This is the JSON from our response
      const result = Papa.parse(data, { header: true })
      console.log(result);
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

import React, { useEffect } from 'react';
import Papa from 'papaparse';
import Header from '../Header';
import Ads from '../Ads';
import Schedule from '../Schedule';

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
      <Header />
      <Ads />
      <Schedule />
    </>
  )
}

export default App

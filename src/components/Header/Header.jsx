import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/pl';

import logo from '../../assets/images/OpsTechIT_logo_on_BK_nosmile.png';

const Header = () => {
  const savedCallback = useRef();
  const [time, setTime] = useState(moment());

  useEffect(() => {
    savedCallback.current = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(savedCallback.current);
  }, []);

  return (
    <div className="header">
      <div className="header__time">
        <Moment date={time} locale="pl" interval={1000} format="DD MMMM YYYY, HH:mm:ss" />
      </div>
      <img src={logo} alt="ops-techIT" className="header__logo" />
    </div>
  )
}

export default Header

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData as setDataFromRedux } from './redux-state/reducers/data';
import { Routes, Route } from 'react-router-dom';
import Head from './components/views/global/Head';
import Main from './components/pages/Main';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan';

function App() {
  const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();

  const setData = (param) => dispatch(setDataFromRedux(param));

  return (
    <>
      <Head></Head>
      <Routes>
        <Route path="/main" element={<Main action={setData} />}></Route>
        <Route path="/stat/:viewType" element={<Stat statData={data} />}></Route>
        <Route path="/plan" element={<Plan statData={data} />}></Route>
        <Route path="*" element={<Main action={setData} />}></Route>
      </Routes>
    </>
  );
}

export default App;

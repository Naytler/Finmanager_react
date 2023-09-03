import React, { useState } from 'react';
import DataList from '../views/local/DataList';
import Foot from '../views/global/Foot';
import DataChart from '../views/local/DataChart';
import { useParams } from 'react-router-dom';

function Stat(props) {
  const { statData } = props;
  const [isShowChart, setIsShowChart] = useState(true);
  const { viewType } = useParams();

  return (
    <React.Fragment>
      <DataList viewType={viewType} setShow={setIsShowChart} data={statData}></DataList>
      <DataChart viewType={viewType} show={isShowChart} data={statData} />
      <Foot></Foot>
    </React.Fragment>
  );
}

export default Stat;

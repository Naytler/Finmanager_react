import React, { useState } from 'react';
import css from '../../../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import HOCButton from '../../comps/HOCHeaderButton';
import Button from '../../comps/Button';

const HOCButtonComponent = HOCButton(Button, { text: 'push on button again' });

const { HeaderContainer, HeaderCss } = css;

const buttonCss = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#B0F347',
  cursor: 'pointer',
  marginLeft: '10px',
};

function Head() {
  const navigate = useNavigate();
  const [inner, setInner] = useState(0);

  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCss.Logo>FINMANAGER</HeaderCss.Logo>
        <HeaderCss.MenuContainer>
          <HOCButtonComponent text={'/plan'} onClick={() => setInner(inner + 1)} inner={inner}></HOCButtonComponent>
          <HOCButtonComponent text={'/main'}>Главная</HOCButtonComponent>
          <HOCButtonComponent text={'/stat/расход'}>Статистика</HOCButtonComponent>
          <HOCButtonComponent text={'/plan'}>Планирование</HOCButtonComponent>
        </HeaderCss.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
}

export default Head;

import React, { useContext } from 'react';
import css from '../../../styles/styles.css';
import FooterContext from '../../../redux-state/context/footerContext';

const { FooterContainer } = css;

function Foot() {
  const footerText = useContext(FooterContext);

  return (
    <React.Fragment>
      <FooterContainer style={{ justifyContent: 'center' }}>{footerText} </FooterContainer>
    </React.Fragment>
  );
}

export default Foot;

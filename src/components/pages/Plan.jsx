import React, { useEffect, useState } from 'react';
import DataList from '../views/local/DataList';
import Foot from '../views/global/Foot';

class Plan extends React.Component {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate(props, state) {
  //   //для обновления компонента на основе прос и стейт
  //   //  return false - если обновлять не нужно
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   //срабатывает после отработки рендера
  //   //принимает предедущие значения до обновления
  //   //выполнение запросов к серверу
  //   // менять стейт нельзя
  // }

  // componentDidMount() {
  //   //не принимает никаких параметров и срабатывает если нет ошибок после рендер
  //   //выполнение запросов к серверу
  //   // менять стейт нельзя
  //   //получается цикличная ситуация из за этого
  // }

  // componentWillUnmount() {
  //   // метод для очистки памяти
  //   //вызывается перед размонтирование вашего компонента
  //   //основная функция в том что бы подчищать какие либо компонеты
  //   // после рендера таймеры и т.д
  // }

  render() {
    return (
      <>
        <DataList viewType={'расход'} data={this.props.statData}></DataList>
        <Foot></Foot>
      </>
    );
  }
}

export default Plan;

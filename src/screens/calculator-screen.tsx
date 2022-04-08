import React from 'react'
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/buttons/calculator/button';
import useCalculator from '../hooks/use-calculator';

enum Actions {
  CLEAR = 'clear',
  SIGN = 'sign',
  PERCENTAGE = 'percentage',
  DIVIDE = 'divide',
  MULTIPLY = 'multiply',
  SUBSTRAC = 'substract',
  ADD = 'add',
  FLOATING = 'floating',
  EQUAL = 'equal',
}

const keys = [
  [
    { key: 'C', color: '#9b9b9b', action: Actions.CLEAR },
    { key: '+/-', color: '#9b9b9b', action: Actions.SIGN },
    { key: '%', color: '#9b9b9b', action: Actions.PERCENTAGE },
    { key: '/', color: '#ff9427', action: Actions.DIVIDE },
  ],
  [
    { key: '7' }, { key: '8' }, { key: '9' },
    { key: '*', color: '#ff9427', action: Actions.MULTIPLY },
  ],
  [
    { key: '4' }, { key: '5' }, { key: '6' },
    { key: '-', color: '#ff9427', action: Actions.SUBSTRAC },
  ],
  [
    { key: '1' }, { key: '2' }, { key: '3' },
    { key: '+', color: '#ff9427', action: Actions.ADD },
  ],
  [
    { key: '0', large: true },
    { key: '.', action: Actions.FLOATING },
    { key: '=', color: '#ff9427', action: Actions.EQUAL },
  ],
];

const CalculatorScreen = () => {
  const { prev, current, calculate } = useCalculator();

  const { width } = useWindowDimensions();

  return (
    <View width={width}>
      <StatusBar />
      <TextView>
        {!!prev && <Prev>{prev}</Prev>}
        <Result adjustsFontSizeToFit>{current}</Result>
      </TextView>
        <ButtonsView>
          {keys.map((row, index) => (
            <Row key={index}>
              {row.map(key => (
                <Button
                  key={key.key}
                  text={key.key}
                  background={key.color}
                  large={key.large}
                  action={key.action}
                  onPress={calculate}
                />
              ))}
            </Row>
          ))}
        </ButtonsView>
    </View>
  )
}

export default CalculatorScreen;

const View = styled.View<{ width: number }>`
  background: black;
  flex: 1;
  padding: 0 20px;
  justify-content: flex-end;
  ${({ width }) => width > 360 ? 'flex-direction: row;' : '' }
`;

const Result = styled.Text`
  font-size: 60px;
  text-align: right;
`;

const Prev = styled.Text`
  font-size: 30px;
  text-align: right;
  color: rgba(255, 255, 255, .4);
`;

const StatusBar = styled.StatusBar`
  background: black;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 4px 0;
`;

const ButtonsView = styled.View``;

const TextView = styled.View``;

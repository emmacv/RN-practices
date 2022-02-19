import React from 'react'
import styled from 'styled-components/native';
import Button from '../components/buttons/calculator/button';

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

const INITIAL_STATE = { prev: '', current: '0', action: '' };

const calcReducer = (state: typeof INITIAL_STATE, { type, payload }: { type: string; payload: string }) => {
  switch (type) {
    case Actions.CLEAR:
      return INITIAL_STATE;
    case Actions.SIGN:
      return { prev: '', current: `${-state.current}`, action: ''};
    case Actions.PERCENTAGE:
      return { prev: state.current, current: `${+state.current / 100}`, action: type };
    case Actions.FLOATING:
      return { prev: '', current: `${state.current}.`, action: '' }
    case Actions.DIVIDE:
    case Actions.MULTIPLY:
    case Actions.SUBSTRAC:
    case Actions.ADD:
      return { prev: state.current, current: '0', action: payload };
    case Actions.EQUAL:
      return { prev: '', current: eval(`${state.prev} ${state.action} ${state.current}`), action: Actions.EQUAL  };
    default:
      return { ...state, current: state.action === Actions.EQUAL ? payload : `${state.current === '0' ? '' : state.current}${payload}`, action: state.action === Actions.EQUAL ? '' : state.action };
  }
};

const CalculatorScreen = () => {
  const [numbers, calcDispatcher] = React.useReducer(calcReducer, INITIAL_STATE);
  const [history, setHistory] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (numbers.action === Actions.EQUAL) {
      setHistory(prev => [...prev , numbers.current]);
    }
  }, [numbers]);

  console.log(history);

  return (
    <View>
      <StatusBar />
      <Prev>{numbers.prev}</Prev>
      <Result>{numbers.current}</Result>
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
                  onPress={calcDispatcher}
                />
              ))}
            </Row>
          ))}
        </ButtonsView>
    </View>
  )
}

export default CalculatorScreen;

const View = styled.View`
  background: black;
  flex: 1;
  padding: 0 20px;
  justify-content: flex-end;
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

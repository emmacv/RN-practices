import React from "react";

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

const INITIAL_STATE = { prev: '', current: '0', action: '' };


const calcReducer = (state: typeof INITIAL_STATE, { type, payload }: { type: string; payload: string }) => {
  switch (type) {
    case Actions.CLEAR:
      return INITIAL_STATE;
    case Actions.SIGN:
      return { ...state, current: `${-state.current}` };
    case Actions.PERCENTAGE:
      return { prev: state.current, current: `${+state.current / 100}`, action: type };
    case Actions.FLOATING:
      return { ...state, current: `${state.current.includes('.') ? state.current : state.current.concat('.') }` }
    case Actions.DIVIDE:
    case Actions.MULTIPLY:
    case Actions.SUBSTRAC:
    case Actions.ADD:
      return { prev: state.current.endsWith('.') ? state.current.slice(0, -1) : state.current, current: '0', action: payload };
    case Actions.EQUAL:
      return { prev: '', current: `${ state.action !== Actions.EQUAL ? eval(`${state.prev} ${state.action} ${state.current}`) : state.current }`, action: Actions.EQUAL };
    default:
      return {
        ...state,
        current:
          state.action === Actions.EQUAL ? payload : `${state.current === '0' ? '' : state.current}${payload}`,
        action: state.action === Actions.EQUAL ? '' : state.action,
      };
  }
};

const useCalculator = () => {
  const [numbers, calcDispatcher] = React.useReducer(calcReducer, INITIAL_STATE);
  const [history, setHistory] = React.useState<string[]>([]);


  React.useEffect(() => {
    if (numbers.action === Actions.EQUAL) {
      setHistory(prev => [...prev , numbers.current]);
    }
  }, [numbers]);

  return {
    ...numbers,
    history,
    setHistory,
    calculate: calcDispatcher,
  }
};

export default useCalculator;

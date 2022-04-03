// navigation.d.ts

import { RootStackParamas } from './src/navigation/stack-navigator-02';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamas {}
  }
}

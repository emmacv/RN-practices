// navigation.d.ts

import { RootStackParamas } from "./src/navigation/stack-navigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamas {}
  }
}
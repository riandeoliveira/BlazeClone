import { crashGame } from "features/crash-game";
import type { TabModeType } from "features/crash-game/store/controller.store";
import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

interface TabProps {
  children: ReactNode;
  mode: TabModeType;
}

export const Tab = observer(({ children, mode }: TabProps): ReactElement => {
  return (
    <span
      className={styles.tab}
      onClick={(): void => crashGame.controllerStore.setTabMode(mode)}
      data-selected={crashGame.controllerStore.tabMode === mode}
    >
      {children}
    </span>
  );
});

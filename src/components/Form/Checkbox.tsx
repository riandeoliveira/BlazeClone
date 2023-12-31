import { icons } from "assets";
import { observer } from "mobx-react-lite";
import type { MouseEventHandler } from "react";
import { type ReactElement } from "react";
import SVG from "react-inlinesvg";
import styles from "styles/components/Form/Checkbox.module.scss";

interface CheckboxProps {
  checked: boolean;
  label: string;
  onCheck: MouseEventHandler<HTMLElement>;
}

export const Checkbox = observer(({ checked, label, onCheck }: CheckboxProps): ReactElement => {
  return (
    <div className={styles.form_checkbox_area} onClick={onCheck}>
      <button type="button" className={styles.checkbox}>
        {checked ? <SVG src={icons.check} /> : <></>}
      </button>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
    </div>
  );
});

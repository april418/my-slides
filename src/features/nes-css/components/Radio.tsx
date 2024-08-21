import React, {
  ChangeEvent,
  createContext,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useContext,
  useState,
} from 'react';
import clsx from 'clsx';
import classes from './Radio.module.sass';

type RadioGroupContextProps = {
  name: string;
  value: string;
  disabled?: boolean;
  dark?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(
  undefined
);
const RadioGroupContextProvider = RadioGroupContext.Provider;

export type RadioButtonProps = {
  name?: string;
  value: string;
  disabled?: boolean;
  dark?: boolean;
  children?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function RadioButton(props: RadioButtonProps) {
  const groupContext = useContext(RadioGroupContext);

  const inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > = {
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onChange: props.onChange,
  };

  if (groupContext) {
    inputProps.name = groupContext.name;
    inputProps.checked = groupContext.value === props.value;
    inputProps.onChange = groupContext.onChange;
  }

  return (
    <label className={classes.radio__button}>
      <input
        {...inputProps}
        type="radio"
        className={clsx('nes-radio', {'is-dark': props.dark})}
      />
      <span className={classes['radio__button-label']}>{props.children}</span>
    </label>
  );
}

export type RadioGroupProps = {
  name: string;
  disabled?: boolean;
  dark?: boolean;
  vertical?: boolean;
  children?: ReactNode;
  onChange?: (value: string) => void;
};

export function RadioGroup({
  name,
  disabled,
  dark,
  vertical,
  children,
  onChange: _onChange,
}: RadioGroupProps) {
  const [value, setValue] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    _onChange?.(event.target.value);
  };

  return (
    <div
      className={clsx(classes.radio, {[classes['radio--vertical']]: vertical})}
    >
      <RadioGroupContextProvider
        value={{name, value, disabled, dark, onChange}}
      >
        {children}
      </RadioGroupContextProvider>
    </div>
  );
}

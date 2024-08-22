import React, {ButtonHTMLAttributes, InputHTMLAttributes} from 'react';
import clsx from 'clsx';

export type ButtonProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      color?: 'primary' | 'success' | 'warning' | 'error';
    })
  | (InputHTMLAttributes<HTMLInputElement> & {
      type: 'file';
      color?: 'primary' | 'success' | 'warning' | 'error';
    });

export function Button({color, children, ...props}: ButtonProps) {
  return props.type === 'file' ? (
    <label
      className={clsx('nes-btn', color && `is-${color}`, {
        'is-disabled': props.disabled,
      })}
    >
      <span>{children}</span>
      <input {...props} type="file" />
    </label>
  ) : (
    <button
      {...props}
      className={clsx('nes-btn', color && `is-${color}`, {
        'is-disabled': props.disabled,
      })}
    >
      {children}
    </button>
  );
}

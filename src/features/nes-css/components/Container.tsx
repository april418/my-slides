import React from 'react';
import clsx from 'clsx';

export type ContainerProps = {
  title?: string;
  titleCentered?: boolean;
  rounded?: boolean;
  dark?: boolean;
  children?: React.ReactNode;
};

export function Container({
  title,
  titleCentered,
  rounded,
  dark,
  children,
}: ContainerProps) {
  return (
    <div
      className={clsx('nes-container', {
        'with-title': !!title,
        'is-centered': titleCentered,
        'is-rounded': rounded,
        'is-dark': dark,
      })}
    >
      {title && <p className="title">{title}</p>}
      {children}
    </div>
  );
}

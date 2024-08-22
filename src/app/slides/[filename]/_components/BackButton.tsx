import React from 'react';
import Link from 'next/link';
import classes from './BackButton.module.sass';

export function BackButton() {
  return (
    <Link className={classes['back-button']} href="/">
      <span className={classes['back-button__icon']}>&lt;</span>
    </Link>
  );
}

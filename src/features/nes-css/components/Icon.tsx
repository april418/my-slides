import React from 'react';
import clsx from 'clsx';

export type IconProps = {
  name:
    | 'heart'
    | 'star'
    | 'like'
    | 'twitter'
    | 'facebook'
    | 'instagram'
    | 'github'
    | 'google'
    | 'gmail'
    | 'medium'
    | 'linkedin'
    | 'twitch'
    | 'youtube'
    | 'reddit'
    | 'whatsapp'
    | 'close'
    | 'trophy'
    | 'coin';
  size?: 'small' | 'medium' | 'large';
  half?: boolean;
  transparent?: boolean;
  empty?: boolean;
};

export function Icon({
  name,
  size = 'medium',
  half,
  transparent,
  empty,
}: IconProps) {
  return (
    <i
      className={clsx('nes-icon', name, {
        [`is-${size}`]: size,
        'is-half': half,
        'is-transparent': transparent,
        'is-empty': empty,
      })}
    />
  );
}

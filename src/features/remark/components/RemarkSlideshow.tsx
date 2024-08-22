'use client';

import React, {useContext, useEffect, useRef, useState} from 'react';
import {RemarkContext} from '../contexts/RemarkContext';
import settings from '../lib/settings';

export type Props = {
  doc: string;
  onShowSlide?: (slide: RemarkSlide, container: HTMLDivElement) => void;
  onHideSlide?: (slide: RemarkSlide, container: HTMLDivElement) => void;
  onInit?: (slideshow: RemarkSlideshow, container: HTMLDivElement) => void;
};

export function RemarkSlideshow({
  doc,
  onShowSlide,
  onHideSlide,
  onInit,
}: Props) {
  const context = useContext(RemarkContext);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (context?.remark && containerRef.current) {
      const slideshow = context.remark.create({
        ...settings,
        container: containerRef.current,
        source: doc,
      });

      slideshow.on('showSlide', (slide) => {
        onShowSlide?.(slide, containerRef.current!);
      });
      slideshow.on('hideSlide', slide => {
        onHideSlide?.(slide, containerRef.current!);
      });

      onInit?.(slideshow, containerRef.current);
    }
  }, [context?.remark, containerRef.current]);

  return <div ref={containerRef} style={{width: '100%', height: '100%'}} />;
}

'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {RadioButton, RadioGroup} from '@/features/nes-css/components/Radio';
import {Button} from '@/features/nes-css/components/Button';

export function SlideSelector({slides}: {slides: string[]}) {
  const [slide, setSlide] = useState<string>('');
  const router = useRouter();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <RadioGroup
        name="slide-radio"
        vertical
        onChange={value => setSlide(value)}
      >
        {slides.map(slide => (
          <RadioButton key={slide} value={slide}>
            {slide}
          </RadioButton>
        ))}
      </RadioGroup>
      <Button
        color="primary"
        disabled={!slide}
        onClick={() => router.push(`/slides/${slide}`)}
      >
        Start
      </Button>
    </div>
  );
}

'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {getSlides} from '@/actions/getSlides';
import {Container} from '@/features/nes-css/components/Container';
import {RadioButton, RadioGroup} from '@/features/nes-css/components/Radio';
import {Button} from '@/features/nes-css/components/Button';

export function SlideList() {
  const router = useRouter();
  const [slides, setSlides] = useState<string[]>([]);
  const [slide, setSlide] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      setSlides(await getSlides());
      console.log(slides);
    })();
  }, []);

  return (
    <Container title="Slides">
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
    </Container>
  );
}

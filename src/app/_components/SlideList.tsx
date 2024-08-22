import {getLocalSlides} from '@/features/local-files/lib/getLocalSlides';
import {Container} from '@/features/nes-css/components/Container';
import {getContentDescriptors} from '@/features/github/lib/github';
import {SlideSelector} from './SlideSelector';

export async function SlideList() {
  const slides =
    process.env.NODE_ENV === 'development'
      ? await getLocalSlides()
      : (await getContentDescriptors({path: 'slides'})).map(
          slide => slide.name
        );

  return (
    <Container title="Slides">
      <SlideSelector slides={slides} />
    </Container>
  );
}

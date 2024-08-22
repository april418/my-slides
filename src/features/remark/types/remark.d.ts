type RemarkSettings = {
  ratio?: string;
  navigation?: {
    scroll?: boolean;
    touch?: boolean;
    click?: boolean;
  };
  timer?: {
    startOnChange?: boolean;
    resetable?: boolean;
    enabled?: boolean;
    formatter: (elapsedTime: number) => string;
  };
  slideNumberFormat?: string | ((current: number, total: number) => string);
  countIncrementalSlides?: boolean;
  source?: string;
  sourceUrl?: string;
  includePresenterNotes?: boolean;
  highlightLanguage?: string;
  highlightStyle?: string;
  highlightLines?: boolean;
  highlightSpans?: boolean;
  container?: HTMLElement;
};

type RemarkSlide = {
  getSlideIndex: () => number;
  notes: string;
  properties: Record<string, string>;
  content: string;
};

type RemarkEventType = 'showSlide' | 'hideSlide';

type RemarkSlideshow = {
  gotoFirstSlide: () => void;
  gotoLastSlide: () => void;
  gotoNextSlide: () => void;
  gotoPreviousSlide: () => void;
  gotoSlide: (indexOrName: number | string) => void;
  pause: () => number;
  resume: () => number;
  getSlideCount: () => number;
  getCurrentSlideIndex: () => number;
  on: (event: RemarkEventType, callback: (slide: RemarkSlide) => void) => void;
};

type Remark = {
  create: (settings: RemarkSettings) => RemarkSlideshow;
};

declare var remark: Remark;

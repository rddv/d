import { Children, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Slider.css';

export default function Slider({ children, ariaLabel, onChange, peek = false }) {
  const slides = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: peek ? 'center' : 'start',
    containScroll: peek ? false : 'trimSnaps',
    loop: false,
  });
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const i = emblaApi.selectedScrollSnap();
    setIndex(i);
    onChange?.(i);
  }, [emblaApi, onChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const goTo = (i) => emblaApi?.scrollTo(i);

  return (
    <div className={'slider' + (peek ? ' slider--peek' : '')} role="region" aria-label={ariaLabel}>
      <div className="slider__viewport" ref={emblaRef}>
        <div className="slider__track">
          {slides.map((slide, i) => (
            <div
              className={'slider__slide' + (i === index ? ' is-active' : '')}
              key={i}
              aria-hidden={i === index ? undefined : true}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && (
        <div className="slider__dots" role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={'slider__dot' + (i === index ? ' is-active' : '')}
              aria-label={'Слайд ' + (i + 1)}
              aria-selected={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

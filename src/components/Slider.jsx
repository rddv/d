import { Children, useEffect, useRef, useState } from 'react';
import './Slider.css';

export default function Slider({ children, ariaLabel }) {
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const dragState = useRef({ startX: 0, delta: 0, active: false });

  useEffect(() => {
    if (index > slides.length - 1) setIndex(Math.max(0, slides.length - 1));
  }, [slides.length, index]);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    setIndex(clamped);
  };

  const onPointerDown = (e) => {
    dragState.current = { startX: e.clientX, delta: 0, active: true };
    trackRef.current?.setPointerCapture?.(e.pointerId);
    trackRef.current?.classList.add('slider__track--dragging');
  };

  const onPointerMove = (e) => {
    if (!dragState.current.active) return;
    dragState.current.delta = e.clientX - dragState.current.startX;
    if (trackRef.current) {
      trackRef.current.style.transform =
        'translateX(calc(' + -index * 100 + '% + ' + dragState.current.delta + 'px))';
    }
  };

  const onPointerUp = (e) => {
    if (!dragState.current.active) return;
    const width = trackRef.current?.offsetWidth ?? 1;
    const threshold = width * 0.2;
    const { delta } = dragState.current;
    dragState.current.active = false;
    trackRef.current?.classList.remove('slider__track--dragging');
    if (trackRef.current) trackRef.current.style.transform = '';
    if (delta > threshold) goTo(index - 1);
    else if (delta < -threshold) goTo(index + 1);
    try {
      trackRef.current?.releasePointerCapture?.(e.pointerId);
    } catch {
      // already released
    }
  };

  return (
    <div className="slider" role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className="slider__track"
        style={{ transform: 'translateX(' + -index * 100 + '%)' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {slides.map((slide, i) => (
          <div className="slider__slide" key={i}>
            {slide}
          </div>
        ))}
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

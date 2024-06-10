import { useEffect, useState, useRef, MutableRefObject } from 'react';

function useInView<T extends HTMLElement>(options: IntersectionObserverInit): [MutableRefObject<T | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}

export default useInView;

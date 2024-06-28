import { useEffect, useState, useRef, MutableRefObject } from 'react';

// Hook useInView que acepta un tipo genérico T que extiende HTMLElement
function useInView<T extends HTMLElement>(options: IntersectionObserverInit): [MutableRefObject<T | null>, boolean, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Estado adicional para controlar si la animación se ha ejecutado
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (!hasAnimated) {
          setHasAnimated(true); // Marca que la animación ya se ha ejecutado
        }
      } else {
        setIsIntersecting(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasAnimated]); // Asegúrate de incluir hasAnimated en las dependencias

  return [ref, isIntersecting, hasAnimated];
}

export default useInView;
//pasar los que recibe useInView de tipo generico que extiende de HTMLElement

// function useInView<T extends HTMLElement>(options: IntersectionObserverInit): [MutableRefObject<T | null>, boolean] {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef<T | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);

//   return [ref, isIntersecting];
// }

// export default useInView;

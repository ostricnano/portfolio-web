import useInView from '../../hooks/useInView';
import { motion } from "framer-motion";
import './Title.css'

interface TitleProps {
  title: string,
  subtitle?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  subtitle
}) => {
  const [ref, isInView, hasAnimated] = useInView<HTMLHeadingElement | HTMLDivElement>({
    threshold: 0.1  // Ajusta el umbral según sea necesario
  });
  return (
      <div 
        className='title-holder'
      >
        <motion.h2
          className='title'
          ref={ref}
          initial={{ translateX: '-100px', opacity: 0}}
          animate={ hasAnimated  ? { translateX: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className='subtitle'
          ref={ref}
          initial={{ translateX: '100px', opacity: 0}}
          animate={ hasAnimated  ? { translateX: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          {subtitle}
        </motion.div>
      </div>
  )
}

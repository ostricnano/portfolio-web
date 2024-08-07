import useInView from '../../hooks/useInView';
import { TitleProps } from '../../types';
import './Title.css'


export const Title: React.FC<TitleProps> = ({
  title,
  subtitle
}) => {
  const [ref, isInView, hasAnimated] = useInView<HTMLHeadingElement | HTMLDivElement>({
    threshold: 0.1  // Ajusta el umbral según sea necesario
  });
  console.log('isInView', isInView)
  return (
      <div 
        className='title-holder'
      >
        <h2
          ref={ref}
          className={`title ${hasAnimated  ? 'title-animated' : ''}`}
        >
          {title}
        </h2>
        <div 
          className={`subtitle ${hasAnimated  ? 'subtitle-animated' : ''}`}
          ref={ref}
        >
          {subtitle}
        </div>
      </div>
  )
}

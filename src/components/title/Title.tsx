import './Title.css'

interface TitleProps {
  title: string,
  subtitle?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  subtitle
}) => {
  return (
      <div 
        className='title-holder'
      >
        <h2>{title}</h2>
        <div className='subtitle'>{subtitle}</div>
      </div>
  )
}

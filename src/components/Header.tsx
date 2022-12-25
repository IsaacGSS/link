import { Iheader } from '../types/interface';

export const Header = ({srcHeader, altHeader, title, description}: Iheader) => {
  return (
    <div
    className='
      h-1/2
      flex
      flex-col
      justify-center
      items-center
      gap-2
      
    '
    >
      <img
      className='
      rounded-full
      w-36
      ' 
      src={srcHeader} 
      alt={altHeader} 
      />

      <div 
      className='text-center max-w-ms '
      >
        <h1
        className='text-2xl font-semibold '
        >{title}</h1>
        <p>{description}</p>
      </div>
      
    </div>
  )
}
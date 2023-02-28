import { Iheader } from '../types/interface'

export const Header = ({
  srcHeader,
  altHeader,
  title,
  description
}: Iheader) => {
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

      <div className='w-72 text-center max-w-ms '>
        <h1 className='text-2xl font-semibold '>{title}</h1>
        <p>{description}</p>
        <div className='w-72 flex flex-row gap-1 flex-wrap justify-center items-center '>
          <img
            src='../assets/icons8-html-5.svg'
            alt='html logo'
            width={30}
            className='w-8'
          />
          <img
            src='src/assets/icons8-css3.svg'
            alt='css3 logo'
            width={30}
            className='w-8'
          />
          <img
            src='src/assets/icons8-tailwindcss.svg'
            alt='tailwindcss logo'
            // width={30}
            className='w-8'
          />
          <img src='src/assets/icons8-sass.svg' alt='sass logo' width={30} />
          <img
            src='src/assets/icons8-javascript.svg'
            alt='javascript logo'
            width={30}
          />
          <img
            src='src/assets/icons8-typescript.svg'
            alt='typescript logo'
            width={30}
          />
          <img src='src/assets/icons8-react.svg' alt='react logo' width={30} />
          <img src='./assets/icons8-next.js.svg' alt='next logo' width={30} />
        </div>
      </div>
    </div>
  )
}

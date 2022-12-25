import { Ilink } from "../../types/interface"

export const Link = ({urlLink, children}: Ilink) => {
  return (
      <li 
      className='py-2'
      >
        <a 
        href={urlLink}>
          <div
          className="w-72 py-1 rounded-md bg-fuchsia-100"          
          >
          {children}
          </div>
        </a>
      </li>
  )
}
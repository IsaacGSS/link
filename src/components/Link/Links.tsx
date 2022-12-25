import { Link } from "./Link"

export const Links = () => {
  return (
    <div 
    className="h-1/2 flex flex-col justify-center items-center gap-2 text-center "
    >
      <ul>
        <Link
        urlLink="https://github.com/IsaacGSS"
        > Github 
        </Link>

        <Link
        urlLink="https://www.linkedin.com/in/isaac-gabriel-sousa-silvadev/"
        > Linkdin 
        </Link>

        <Link
        urlLink="https://t.me/Isaac_S_Silva"
        > Telegram 
        </Link>
        
        <Link
        urlLink="https://www.instagram.com/i5aac.exe/"
        > Instagram 
        </Link>
      </ul>
    </div>
  )
}
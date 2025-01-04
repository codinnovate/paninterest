import Image from "next/image";

export default function Header(){
    return (
        <div className="flex items-center justify-center p-5 ">
            <Image
             src='logo.svg' 
             alt='logo'
             width={52}
             height={52}
              />
            
        </div>
    )
}
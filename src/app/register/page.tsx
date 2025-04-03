import Image from "next/image";
import ImgRegist from "@/assets/images/register.jpeg"; // Perbaiki path import

export default function Register() {
    return (
        <div className="h-screen w-full flex">
            {/* Menggunakan next/image untuk optimasi gambar */}
            <div className="relative w-1/4 h-full">
                <Image 
                    src={ImgRegist} 
                    alt="Register Background" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
        </div>
    );
}

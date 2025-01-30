import Image from "next/image";
import Link from "next/link";

import "@/app/styles/components/Footer.scss";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="info">
                    <h6>Sam Roberts &copy; {(new Date().getFullYear())}</h6>
                </div>
                <div className="socials">
                    <Link href="https://github.com/samroberts707" target="_blank">
                        <Image src='/images/GitHub_SVG.svg' alt="Github Logo" width={40} height={40} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/samroberts707/" target="_blank">
                        <Image src='/images/LinkedIn_SVG.svg' alt="LinkedIn Logo" width={40} height={40} />
                    </Link>
                    <Link href="mailto:samroberts707@gmail.com" target="_blank">
                        <Image src='/images/Mail_SVG.svg' alt="Github Logo" width={35} height={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
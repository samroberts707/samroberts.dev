import "@/app/styles/pages/Homepage.scss";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="Landing">
          <div className="container">
            <div className="content">
              <h4>Hello there,</h4>
              <h1 className="c-persian-red">I'm Sam</h1>
              <p>I'm a Lead Web Developer, living in London.</p>
              <p>I work for <Link href="https://www.nucreative.co.uk" target="_blank" rel="noreferrer">NU Creative</Link>, a creative agency based in London Bridge.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

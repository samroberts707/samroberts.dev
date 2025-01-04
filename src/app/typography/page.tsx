import Link from "next/link";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Typography | Sam Roberts'
}  

export default function TypographyPage() {
    return (
        <div className="Typography">
            <div className="container">
                <h1>Heading 1 / <strong>Heading 1</strong></h1>
                <h2>Heading 2 / <strong>Heading 2</strong></h2>
                <h3>Heading 3 / <strong>Heading 3</strong></h3>
                <h4>Heading 4 / <strong>Heading 4</strong></h4>
                <h5>Heading 5 / <strong>Heading 5</strong></h5>
                <h6>Heading 6 / <strong>Heading 6</strong></h6>
                <p>Lorem Ipsum / <strong>Lorem Ipsum</strong></p>
                <p style={{width: "60%"}}>Nunc maximus porta purus eu consectetur. Donec maximus leo at arcu consequat rhoncus. Ut luctus tincidunt quam in fringilla. Ut ut arcu suscipit, mattis purus et, ornare nulla. Mauris enim libero, convallis et nibh ut, fringilla egestas erat. Nunc et nisi non elit elementum tristique ac a libero. Fusce sed scelerisque odio.</p>
                <p><Link href="/">Home link text</Link></p>
                <label style={{alignSelf: 'flex-start'}}>Label</label>
                <code>
                    <p><em>&#47;&#47; Test comment</em></p>
                    <p>console.<span>log</span>(&quot;Hello World&quot;);</p>
                </code>
            </div>
        </div>
    )
}
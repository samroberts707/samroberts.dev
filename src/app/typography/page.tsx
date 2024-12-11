import Link from "next/link";

export default function TypographyPage() {
    console.log("Hello World");
    return (
        <div className="Typography">
            <div className="container">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p>Lorem Ipsum</p>
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
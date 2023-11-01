/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WWZVFFF1RH" />
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || []; 
                    function gtag(){dataLayer.push(arguments); } 
                    gtag('js', new Date());
                    gtag('config', 'G-WWZVFFF1RH', {
                    page_path: window.location.pathname, });`,
                    }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
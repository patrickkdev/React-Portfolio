import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="fonts/inter/Inter-Black.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-ExtraBold.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-Bold.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-SemiBold.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-Medium.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-Regular.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-Light.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-ExtraLight.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/inter/Inter-Thin.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/intro/bold.otf" as="font" type="font/otf" crossOrigin='anonymous' />
        <link rel="preload" href="fonts/intro/normal.otf" as="font" type="font/otf" crossOrigin='anonymous' />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

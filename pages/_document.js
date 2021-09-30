import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CJK from '@/lib/cjk'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html
        lang={BLOG.lang}
        className={BLOG.appearance === 'dark' ? 'dark' : undefined}
      >
        <Head>
          {BLOG.font && BLOG.font === 'serif'
            ? (
            <>
              <link
                rel="preload"
                href="/fonts/SourceSerif.var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="/fonts/SourceSerif-Italic.var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
            </>
              )
            : (
            <>
              <link
                rel="preload"
                href="/fonts/IBMPlexSansVar-Roman.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="/fonts/IBMPlexSansVar-Italic.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
            </>
              )}

          {['zh', 'ja', 'ko'].includes(
            BLOG.lang.slice(0, 2).toLocaleLowerCase()
          ) && (
            <>
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                as="style"
                href={`https://fonts.googleapis.com/css2?family=Noto+${
                  BLOG.font === 'serif' ? 'Serif' : 'Sans'
                }+${CJK()}:wght@400;500;700&display=swap`}
              />
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=Noto+${
                  BLOG.font === 'serif' ? 'Serif' : 'Sans'
                }+${CJK()}:wght@400;500;700&display=swap`}
              />
              <noscript>
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=Noto+${
                    BLOG.font === 'serif' ? 'Serif' : 'Sans'
                  }+${CJK()}:wght@400;500;700&display=swap`}
                />
              </noscript>
            </>
          )}

          {BLOG.appearance === 'auto'
            ? (
            <>
            <meta name="theme-color" content={BLOG.lightBackground} media="(prefers-color-scheme: dark)"/>
            <meta name="theme-color" content={BLOG.darkBackground} media="(prefers-color-scheme: light)"/>
            </>
              )
            : (
            <meta name="theme-color" content={BLOG.appearance === 'dark' ? BLOG.darkBackground : BLOG.lightBackground} />
              )
          }

          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          {/* <link rel="apple-touch-icon" sizes="192x192" href="/logo.png"></link>
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed"></link> */}

          {/* 增加PWA配置 */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <meta name='apple-mobile-web-app-title' content='Snoword Blooog' />
          <meta name='format-detection' content='telephone=no' />
          
          <meta name='mobile-web-app-capable' content='yes' />

          <link rel='apple-touch-icon' href='/icons/logo.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icons/logo.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/logo.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/icons/logo.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/logo.svg' color='#2B5797' />

          {/* <!-- apple splash screen images --> */}

          {/* <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/icons/logo.png' sizes='640x1136' /> */}

        </Head>

        <body className="bg-gray-50 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

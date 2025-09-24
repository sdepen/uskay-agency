import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Balise Facebook pour vérification du domaine */}
        <meta
          name="facebook-domain-verification"
          content="6cs01g7onaexx94serj0jxgwy5roz"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Sora } from 'next/font/google'

import { Header, MainContainer, MainContent } from '@/styles/index.styles'
import Image from 'next/image'
import Headline from '../../public/headline.png'
import { Vsl } from '@/components/vsl'
import { Comentarios } from '@/components/Comentarios'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const Vietnam = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// Obtenha a data atual
const currentDate = new Date()

// Formate as datas para exibir apenas o dia e o mês em português
const currentFormatted = format(currentDate, "dd 'de' MMMM", {
  locale: ptBR,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Milagre da Visão</title>
        <meta name="description" content="Milagre da visão" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <>
        <MainContainer className={Vietnam.className}>
          <MainContent>
            <Header>
              <p>
                Atenção: esse vídeo está sendo perseguido e sairá do ar
                permanentemente no dia <b>{currentFormatted}.</b>
              </p>
            </Header>
            <Image alt="headline" quality={100} src={Headline} />
            <Vsl />
            <Comentarios />
          </MainContent>
        </MainContainer>
      </>
    </>
  )
}

import Perfil2 from '../../../public/perfil2.webp'
import Perfil3 from '../../../public/perfil3.webp'
import Perfil6 from '../../../public/perfil6.webp'
import Perfil13 from '../../../public/perfil13.webp'
import Perfil8 from '../../../public/perfil8.webp'
import Perfil17 from '../../../public/perfil17.webp'
import Perfil18 from '../../../public/perfil18.webp'
import Perfil20 from '../../../public/perfil20.webp'
import Perfil21 from '../../../public/perfil21.webp'
import Perfil25 from '../../../public/perfil25.webp'
import Perfil27 from '../../../public/perfil27.webp'
import Perfil28 from '../../../public/perfil28.webp'
import Perfil1 from '../../../public/perfil1.webp'

interface LocationProps {
  city: string
  region: string
}

export const comentarios = (location: LocationProps) => [
  {
    src: Perfil6,
    name: 'Carla Fernandes',
    desc: `Alguém aqui do ${
      location.region === 'undefined' ? 'Sul' : location.region
    } já testou? quero saber se ajuda mesmo.`,
    time: '2 horas',
    ammount: 67,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil2,
        name: 'Lúcia Oliveira',
        desc: `Oi carla, sim sou de ${
          location.city === 'undefined' ? 'Curitiba' : location.city
        }. aqui deu certo! Vale a pena.`,
        time: '1 hora',
        ammount: 49,
      },
      {
        src: Perfil6,
        name: 'Carla Fernandes',
        desc: 'que ótimo, vou começar a usar agora, obrigada',
        time: '1 hora',
        ammount: 32,
      },
    ],
  },
  {
    src: Perfil17,
    name: 'Caroline Vieira',
    desc: 'Meu pai ficou cego por complicações do glaucoma a muitos anos atrás, é muito triste isso porque ele nunca viu meu rosto!! 😭😭😭 estou com lágrimas nos olhos porque fizemos tudo o que o senhor falou e hoje de manhã ele disse estar conseguindo distinguir algumas figuras, estou muito emocionada... vamos continuar seguindo tudo, ainda não caiu a ficha que está funcionando...😭​',
    time: '7 horas',
    ammount: 76,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil1,
        name: 'Ana Maria',
        desc: 'me emocionei com seu relato. tenho glaucoma e vou seguir tudo que o vídeo ensina... agora estou confiante.​',
        time: '7 horas',
        ammount: 111,
      },
    ],
  },
  {
    src: Perfil27,
    name: 'Mário Cardoso',
    desc: 'ficar cego é meu maior medo. Sinto que minha visão está piorando a cada dia, mas ler os comentários e ver que tem dado resultado com outros me motivou bastante. obrigado a todos boa noite.​',
    time: '3 horas',
    ammount: 65,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil18,
    name: 'Claudielena Fabiola',
    desc: 'Eu não tenho palavras pra agradecer o senhor... Eu estava com tanto medo da escuridão... de nunca mais ver meus filhos... meus netos... de não poder cozinhar pra minha família. Estou em tratamento já fazem 3 anos mas não vi melhoras, pelo contrário só piora... Tem uma semana que assisti seu vídeo a primeira vez, e hoje 6 dias depois é a primeira vez em 3 anos que acordei de manhã e vi progresso. O senhor não sabe como estou feliz... ASSISTAM O VÍDEO!!!!!​',
    time: '8 horas',
    ammount: 126,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil13,
        name: 'Fabricia Okawa',
        desc: 'digo o mesmo que Deus abençoe este vídeo, foi um divisor de águas pros meus olhos pra minha vida​',
        time: '8 horas',
        ammount: 111,
      },
    ],
  },
  {
    src: Perfil20,
    name: 'Silvia Maria',
    desc: 'Tenho DMRI e tive ótimos resultados seguindo o vídeo, resultados que não tive com medicação. Grata pelo vídeo valioso.​',
    time: '5 horas',
    ammount: 45,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil25,
        name: 'Alessandro Silveira',
        desc: 'eu também, mas no meu caso é catarata. Morro de medo de cirurgia mas estou quase zero agora... A sensação agora é de alívio!​',
        time: '8 horas',
        ammount: 111,
      },
      {
        src: Perfil28,
        name: 'Cláudio Moura',
        desc: 'vc disse bem amigo... a sensação é de ALÍVIO...saber que minha visão está melhorando melhorou meu humor, meu estresse e meu sono. A vida é outra agora!​',
        time: '8 horas',
        ammount: 111,
      },
    ],
  },
  {
    src: Perfil3,
    name: 'Maria Lima',
    desc: 'Está me ajudando muito.​',
    time: '7 horas',
    ammount: 68,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil8,
    name: 'Helena Campos',
    desc: 'pessoal vou deixar aqui meu relato pra vcs. já tinha tudo em casa pra fazer, as instruções funcionam mesmo mas vocês tem que ver o vídeo até o final. é tudo muito simples independente de onde vc more vai ser muito facil achar tudo por menos de 10 reais... nos 2 primeiros dias nao senti efeito, no terceiro parecia que as coresestavam mais vivas, como se minha catarata tivesse diminuido... na semana seguinte coloquei meus oculos e incomodou sabe? como se estivessemos colocando um oculos com grau maior que o nosso. dito e feito! voltei no oftalmologista e ele disse que minha miopia e astigmatismo REGREDIRAM. isso mesmo... mais de 30 anos com miopia e estigmatismo e mesmo assim regrediu! ainda estou na segunda semana, mas já vi que funciona mesmo. recomendo a TODOS!!!!​',
    time: '7 horas',
    ammount: 68,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil21,
        name: 'Tuco Xavier',
        desc: 'bacana vou experimentar tbm​',
        time: '8 horas',
        ammount: 111,
      },
    ],
  },
]

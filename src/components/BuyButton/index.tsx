import { DownloadSimple } from 'phosphor-react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
}

export default function BuyButton({ title }: ButtonProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <ButtonContainer onClick={() => scrollToSection('precoSection')}>
        <DownloadSimple size={30} color="#fff" weight="fill" /> {title}
      </ButtonContainer>
    </>
  )
}

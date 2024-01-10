import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const MainContent = styled('div', {
  maxWidth: 1200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  marginBottom: '3.5rem',

  img: {
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  },

  '@media (max-width: 768px)': {
    gap: '2rem',
  },
})

export const Header = styled('div', {
  background: '#0874fc',
  width: '100vw',
  textAlign: 'center',
  padding: '1rem 0',

  p: {
    fontSize: '1rem',
    color: '#fff',
  },
})

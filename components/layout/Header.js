import React from 'react'
import  Buscar  from '../ui/Buscar'
import Navegacion from './Navegacion'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ContenedorHeader=styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media(min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`
const Logo=styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto Slab',serif;
  margin-right: 2rem;

`

const Header = () => {
  return (
    <header
      css={css`
        border-bottom: 2px solid #e1e1e1;
        padding: 1rem 0;
      `}
    >
        <ContenedorHeader>
            <div>
                <Link href="/">
                <Logo>P</Logo>
                </Link>
               
                <Buscar/>
                <Navegacion/>
            </div>
            <div>
                <p>Hola :Cesar</p>
                <button type='submit'>Cerrar Sesion</button>
                <Link href="/">Login</Link>
                <Link href="/">Cerrar Cuenta</Link>
            </div>
        </ContenedorHeader>
    </header>
  )
}
export  default Header

 
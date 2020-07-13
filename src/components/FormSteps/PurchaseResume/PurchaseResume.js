import React from 'react'
import { TitleSection } from '../FormSteps.styles'
import { Container, ZebraGrid, DataRow } from './PurchaseResume.styles'

export default function PurchaseResume() {
  return (
    <Container>
      <TitleSection>Dados</TitleSection>
      <ZebraGrid>
        <DataRow>
          <span>Nome</span>
          <span>Luís Felipe Leal</span>
        </DataRow>
        <DataRow>
          <span>Email</span>
          <span>felipelealdefaria@gmail.com</span>
        </DataRow>
        <DataRow>
          <span>CPF</span>
          <span>999.999.999-99</span>
        </DataRow>
      </ZebraGrid>
      <TitleSection>Entrega</TitleSection>
      <ZebraGrid>
        <DataRow>
          <span>CEP</span>
          <span>85660-000</span>
        </DataRow>
        <DataRow>
          <span>Estimativa de entrega</span>
          <span>5-15 dias</span>
        </DataRow>
        <DataRow>
          <span>Endereço</span>
          <span>Rua Castro Alves</span>
        </DataRow>
        <DataRow>
          <span>Complemento</span>
          <span>Apto 302</span>
        </DataRow>
        <DataRow>
          <span>Bairro</span>
          <span>Centro Norte</span>
        </DataRow>
        <DataRow>
          <span>Cidade</span>
          <span>Dois Vizinhos</span>
        </DataRow>
        <DataRow>
          <span>UF</span>
          <span>PR</span>
        </DataRow>
        <DataRow>
          <span>Celular</span>
          <span>+55 (31) 99761-0524</span>
        </DataRow>
      </ZebraGrid>
      <TitleSection>Pagamento</TitleSection>
      <ZebraGrid>
        <DataRow>
          <span>Cartão de Crédito</span>
          <span>10x sem juros</span>
        </DataRow>
      </ZebraGrid>
    </Container>
  )
}

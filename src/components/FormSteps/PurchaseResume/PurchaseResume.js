import React from 'react'
import { TitleSection } from '../FormSteps.styles'
import { useFormDataContext } from '../../../context/FormDataContext'
import { Container, ZebraGrid, DataRow } from './PurchaseResume.styles'

export default function PurchaseResume() {
  const { userData } = useFormDataContext()
  const { user } = userData
  console.log(userData)

  return (
    <Container>
      <TitleSection>Dados</TitleSection>
      <ZebraGrid>
        <DataRow>
          <span>Nome</span>
          <span>{user?.fullName}</span>
        </DataRow>
        <DataRow>
          <span>Email</span>
          <span>{user?.email}</span>
        </DataRow>
        <DataRow>
          <span>CPF</span>
          <span>{user?.cpf}</span>
        </DataRow>
      </ZebraGrid>
      <TitleSection>Entrega</TitleSection>
      <ZebraGrid>
        <DataRow>
          <span>CEP</span>
          <span>{user?.zipCode}</span>
        </DataRow>
        <DataRow>
          <span>Estimativa de entrega</span>
          <span>5-15 dias</span>
        </DataRow>
        <DataRow>
          <span>Endereço</span>
          <span>{user?.street}</span>
        </DataRow>
        <DataRow>
          <span>Complemento</span>
          <span>{user?.complement}</span>
        </DataRow>
        <DataRow>
          <span>Bairro</span>
          <span>{user?.neighborhood}</span>
        </DataRow>
        <DataRow>
          <span>Cidade</span>
          <span>{user?.city}</span>
        </DataRow>
        <DataRow>
          <span>UF</span>
          <span>{user?.uf}</span>
        </DataRow>
        <DataRow>
          <span>Celular</span>
          <span>{user.phone}</span>
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

import styled from 'styled-components'

const StyledFiller = styled.div`
color: white;
padding: 1rem;
max-width: 1366px;
margin: 0 auto;
display: grid;
place-items: center;
@media (min-width: 768px) {
  padding: 1rem 1.25rem;
}
@media (min-width: 1368px) {
  padding: 1rem 0;
}
p {
  text-align: center;
}
`

const InDev = () => {
  return (
    <StyledFiller>
      <div>
        <h1>Under Construction</h1>
        <p>Thank you for understanding.</p>
      </div>
    </StyledFiller>
  )
}

export default InDev

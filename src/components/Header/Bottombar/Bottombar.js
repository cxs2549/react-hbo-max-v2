import styled from 'styled-components'

const StyledBottombar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: var(--brandBlack);
  z-index: 10;
  @media (min-width: 640px) {
    display: none;
  }
  #holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 75%;
    margin: 0 auto;
  }

  ion-icon {
    font-size: 1.5rem;
  }
`

const Bottombar = () => {
  return (
    <StyledBottombar className='globalPadding'>
      <div id="holder">
        <ion-icon id="icon" name="home-outline"></ion-icon>
        <ion-icon id="icon" name="search-outline"></ion-icon>
        <ion-icon id="icon" name="person-outline"></ion-icon>
      </div>
    </StyledBottombar>
  )
}

export default Bottombar

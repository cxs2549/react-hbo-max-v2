import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  transition: 1s;
  z-index: -1;
  /* display: none; */
  @media (min-width: 640px) {
    left: 60px;
  }
  @media (min-width: 1280px) {
    left: 0;
  }
`

const Overlay = ({open, clicked}) => {
  return (
    <StyledOverlay open={open} onClick={clicked}>
      
    </StyledOverlay>
  )
}

export default Overlay

import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  transition: 1s;
  @media (min-width: 640px) {
    left: 60px;
  }
`

const Overlay = ({open, clicked}) => {
  return (
    <StyledOverlay open={open} onClick={clicked}>
      
    </StyledOverlay>
  )
}

export default Overlay

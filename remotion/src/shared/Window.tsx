import styled from 'styled-components'

type Theme = 'dark' | 'light'

const WindowStyles = styled.div<{ theme: Theme, width?: string, height?: string }>`
  width: ${props => props.width || '80%'};
  height: ${props => props.height || '80%'};
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme === 'light' ? '#e0e0e0' : 'rgb(40, 45, 53)'};
  font-family: Monaco, Consolas, Menlo, 'Bitstream Vera Sans Mono', 'Powerline Symbols', monospace;
  box-shadow: 0px 15px 3em #00000017;
`

const WindowHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  align-items: center;
  padding: 1em;
`

const HeaderButtons = styled.div`
  white-space: nowrap;
`
const HeaderButton = styled.div`
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  margin: 0.5em;
  border-radius: 1em;
  display: inline-block;
`

const AddressBar = styled.div`
  border-radius: 2rem;
  background: white;
  width: 100%;
  height: 3rem;
  padding: 0.4rem 1rem;
  line-height: 2rem;
  color: #868686;
  font-size: 1.6em;
`


const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0 0 1em 1em;
`

export function Window(props: { theme?: Theme, address?: string, width: string, height: string, children: React.ReactNode }) {
  return <WindowStyles width={props.width} height={props.height} theme={props.theme || 'dark'}>
    <WindowHeader>
      <HeaderButtons>
        <HeaderButton style={{ background: '#ff5f58' }} />
        <HeaderButton style={{ background: '#ffbd2e' }} />
        <HeaderButton style={{ background: '#18c132' }} />
      </HeaderButtons>
      {typeof props.address !== 'undefined' && (
        <AddressBar>{props.address}</AddressBar>
      )}
    </WindowHeader>
    <Content>
      {props.children}
    </Content>
  </WindowStyles>
}

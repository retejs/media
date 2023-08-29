import { staticFile } from 'remotion'
import { Terminal } from '../../shared/Terminal'

const cast = staticFile('/rete-kit-app.cast')

export function KitTerminal() {
  return <Terminal src={cast} speed={1.5} width='80%' height='80%' />
}

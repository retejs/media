import { staticFile } from 'remotion'
import { Terminal } from '../../shared/Terminal'

const runDev = staticFile('/dev.cast')

export function RunAppTerminal() {
  return <Terminal src={runDev} speed={1.6} width='60%' height='60%' />
}

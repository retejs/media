import { Center } from './Center';
import { Window } from './Window'

export function Browser(props: { address: string, children: React.ReactNode }) {
  return (
    <Center>
      <Window width="90%" height="90%" theme='light' address={props.address}>
        {props.children}
      </Window>
    </Center>
  )
}

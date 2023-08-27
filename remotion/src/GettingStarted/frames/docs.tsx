
import { ShowcaseVideo } from '../../shared/ShowcaseVideo'
import docs from '../../../assets/getting-started/docs.mp4'

export function DocsFrame() {
  return (
    <>
      <ShowcaseVideo src={docs} start={0} rate={1} />
    </>
  )
}

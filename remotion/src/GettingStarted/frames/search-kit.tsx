import { ShowcaseVideo } from '../../shared/ShowcaseVideo';
import search from '../../../assets/getting-started/search-kit.mp4'

export function SearchKit() {
  return (
    <>
      <ShowcaseVideo src={search} start={0} rate={1} />
    </>
  )
}

import { ShowcaseVideo } from '../../shared/ShowcaseVideo';
import codeReviewSrc from '../../../assets/getting-started/code-review.mp4'

export function CodeReview() {
  return <ShowcaseVideo src={codeReviewSrc} start={0} rate={1.15} />
}

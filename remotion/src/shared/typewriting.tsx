import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

function getCommonStart(a: string, b: string) {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  return a.slice(0, i)
}

export function useTypewriting(texts: string[], inputRange: number[], outputRange: number[]) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const t = interpolate(
    frame / fps,
    inputRange,
    outputRange,
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )
  const i = Math.floor(t)
  const from = texts[i]
  const to = i + 1 < texts.length ? texts[i + 1] : from
  const k = t % 1

  const common = getCommonStart(from, to)
  const removing = from.slice(common.length)
  const appending = to.slice(common.length)

  const total = removing.length + appending.length
  const chunks = [
    ...new Array(removing.length).fill(0).map((_, i) => removing.substring(0, removing.length - i)),
    ...new Array(appending.length).fill(0).map((_, i) => appending.substring(0, i)),
  ]
  const append = chunks[Math.floor(k * total)] || ''

  return common + append
}

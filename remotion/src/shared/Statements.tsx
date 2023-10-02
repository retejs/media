import { AbsoluteFill } from 'remotion'
import styled from 'styled-components'
import { HighlightTitleStyle, HighlightTitle } from './HighlightTitle'

const black = '#2e2e2e'

export const Statements = styled(AbsoluteFill)`
  display: flex;
  align-items: center;
  gap: 15%;
  justify-content: center;
`

export const StatementsRow = styled.div`
  text-align: center;
  width: max-content;
  & > *:not(:first-child) {
    margin-left: -0.5em;
  }
`

const StatementStyles = styled(HighlightTitleStyle)`
  position: static;
  display: inline-block;
  text-align: center;
  transform: none;
`

const DarkStatementStyles = styled(StatementStyles)`
  color: #fff;
  background: ${black};
`


export function Statement({ theme, start, end, children, ...props }: { start: number, end: number, theme?: 'dark' | 'light', children: React.ReactNode }) {
  return (
    <HighlightTitle {...props} component={theme === 'dark' ? DarkStatementStyles : StatementStyles} start={start} end={end}>
      {children}
    </HighlightTitle>
  )
}

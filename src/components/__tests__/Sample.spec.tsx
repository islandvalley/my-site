import { Sample } from '../Sample'
import { render } from '@testing-library/react'

describe('Sample', () => {
  test('テキスト一致', () => {
    const { getByText } = render(<Sample />)
    expect(getByText('hello world')).toBeTruthy()
    expect(getByText('hogefoo')).toBeTruthy()
  })
})

import { dir } from 'tmp-promise'
import { action } from '../lib/action.js'

// General

describe('General', () => {
  it('main', async () => {
    const { path } = await dir()
    process.chdir(path)
    await action()
  })
})

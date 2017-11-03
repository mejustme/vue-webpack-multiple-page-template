import * as moduleOneGetter from './one'
import * as moduleTwoGetter from './two'

export default Object.assign({}, moduleOneGetter, moduleTwoGetter)

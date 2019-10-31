import queryString from 'query-string'

import { withMixin } from '../helpers/dva'

export default withMixin({
  namespace: 'app',
  state: {
    locationPathname: '',
    locationQuery: {}
  },
  subscriptions: {
    setHistory({ dispatch, history }) {
      return history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search)
          }
        })
      })
    }
  },
  reducers: {}
})

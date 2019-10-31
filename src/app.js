import router from 'umi/router'
import PageNotFoundError from './helpers/errors/PageNotFoundError'
import { Toast } from 'antd-mobile'

import debounce from 'lodash/debounce'

export const dva = {
  config: {
    onError: debounce(function(err, dispatch) {
      if (err instanceof PageNotFoundError) {
        return router.push({
          pathname: '/404',
          query: {
            from: err.path
          }
        })
      }
      Toast.fail(err.message)
    }, 200)
  }
}

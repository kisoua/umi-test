import { setLocale, getLocale } from 'umi-plugin-react/locale'
import classnames from 'classnames'

import styles from './index.less'

const currentLang = getLocale()

function LanguageSwitch() {
  return (
    <div>
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'zh-CN' })}
        onClick={() => setLocale('zh-CN')}
      >
        中
      </span>{' '}
      |{' '}
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'en-US' })}
        onClick={() => setLocale('en-US')}
      >
        En
      </span>
    </div>
  )
}

export default LanguageSwitch

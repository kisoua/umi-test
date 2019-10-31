/**
 * title: Overview
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WhiteSpace, WingBlank, Flex, Card } from 'antd-mobile'
import { connect } from 'dva'
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale'

import LanguageSwitch from '../../components/LanguageSwitch'

class Overview extends Component {
  static propTypes = {
    loading: PropTypes.object,
    dispatch: PropTypes.func
  }

  render() {
    return (
      <WingBlank size="md">
        <WhiteSpace size="lg" />

        <Flex justify="end">
          <LanguageSwitch />
        </Flex>

        <Flex justify="center" align="center">
          <FormattedMessage id="OVERVIEW_WELCOME" />
        </Flex>
        <WhiteSpace size="lg" />

        <Card>
          <Card.Header
            title={formatMessage({
              id: 'OVERVIEW_CARD_TITLE'
            })}
          />
          <Card.Body>
            <div>
              <FormattedMessage id="OVERVIEW_CARD_CONTENT" />
            </div>
          </Card.Body>
          <Card.Footer
            content={formatMessage({
              id: 'OVERVIEW_CARD_FOOTER'
            })}
          />
        </Card>
      </WingBlank>
    )
  }
}

export default connect(({ app, loading }) => {
  return {
    loading
  }
})(Overview)

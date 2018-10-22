import * as React from 'react';
import { Footer, Header } from 'app/components';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router'
import Router from 'next/router'

import 'styles/reset.css';
import 'styles/index.css';
import 'styles/hljs/tomorrow-night-bright.css';

class WrapperClass extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    lang: PropTypes.string,
    documentation: PropTypes.bool
  }

  componentDidMount() {
    // const { asPath } = this.props.router;
    if (window['rstat']) {
      window['rstat']('page');
    }
  }

  render() {
    const { headerBgActive, linkMenuPosition, lang, documentation, activeSection } = this.props;
    return (
      <div className={'rockstat-container'} style={{ width: '100%' }}>
        <Header
          lang={lang}
          headerBgActive={headerBgActive}
          linkMenuPosition={linkMenuPosition}
          documentation={documentation}
          activeSection={activeSection}
        />
        <div className={'rockstat-container-content'}>
          {this.props.children}
        </div>
        <Footer lang={lang} />
      </div>
    )
  }
}

export const Wrapper = withRouter(WrapperClass);

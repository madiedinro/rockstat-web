import React from 'react';
import { Wrapper } from '../containers';
// import { Head } from '../components';
import { Documentation } from '../containers';
import { docsMenu, docsItems } from '../utils/menuData'
// import dynamic from 'next/dynamic';

// import { Link } from '../routes'

import * as fetch from 'isomorphic-fetch';

const defaultPage = 'about-platform';
const staticSrv = 'http://127.0.0.1:4444/'

export default class extends React.Component {

  static async getInitialProps({ query }) {
    const slug = query.slug || defaultPage;
    const item = docsItems[slug];

    console.log('init props', `${item.out}`)

    // const fn = `http://localhost:3000/static/${doc}.json`;
    // return fetch(fn).then(resp => resp.json())

    return Promise.resolve()
      .then(() => {
        console.log('requesting', `${item.out}`)
        // return require(`../${item.out}`)
        return fetch(staticSrv + item.out).then(resp => resp.json())
      })
      .then(content => content.data)
      .then(content => {
        return {
          content, query
        }
      })
      .catch(error => {
        console.log('docs catched err', error);
      })
  }
  componentDidMount() {
    document.querySelector('html').style.backgroundColor = '#fff';
  }


  // componentWillReceiveProps(props) {
  //   // console.log(props);
  // }

  render() {
    const { query, content } = this.props;

    return (
      <span>
        {/* <Head /> */}
        <Wrapper activeSection={'docs'} {...this.props} lang={query.lang} headerBgActive={true} documentation={true}>
          <Documentation {...this.props} content={content} lang={query.lang} docsMenu={docsMenu} />
        </Wrapper>
      </span>
    )
  }
}

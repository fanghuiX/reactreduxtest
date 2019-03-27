import React, { Component } from 'react'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import hashHistory from 'react-router/lib/hashHistory'

import { withAuth } from './helpers'
import Root from 'root'

const routes = (
  <Route component={Root}>
    <Route path="/" comp="home/components/index">
      <Route path="plus" comp="home/components/indecrase/index"/>
      <Route path="list" comp="home/components/getlist/index"/>
      <Route path="jsondata" comp="home/components/postJson/jsonList"/>
      <Route path="403" comp="shared/error/components/error403"/>
      <Route path="404" comp="shared/error/components/error404"/>
    </Route>
    <Route path="re" comp="home/components/reindex"/>
  </Route>
)

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory} routes={withAuth(routes)} />
    )
  }
}

import React, { Component } from 'react'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import hashHistory from 'react-router/lib/hashHistory'

import { withAuth } from './helpers'
import Root from 'root'

const routes = (
  <Route breadcrumbName="Root" component={Root}>
    <Route breadcrumbName="Home" path="/" comp="home/components/index">
      <Route breadcrumbName="计数器" path="plus" comp="home/components/indecrase/index"/>
      <Route breadcrumbName="list数据" path="list" comp="home/components/getlist/index"/>
      <Route breadcrumbName="json数据" path="jsondata" comp="home/components/postJson/jsonList"/>
      <Route breadcrumbName="403" path="403" comp="shared/error/components/error403"/>
      <Route breadcrumbName="404" path="404" comp="shared/error/components/error404"/>
    </Route>
    <Route breadcrumbName="评论分页" path="re" comp="home/components/reindex"/>
    <Route breadcrumbName="表格" path="table" comp="home/components/table"/>
  </Route>
)

export default class extends Component {
  render() {
    return (
      <Router history={hashHistory} routes={withAuth(routes)} />
    )
  }
}

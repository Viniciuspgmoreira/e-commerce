import React from 'react'
import colletionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route
      path={`${match.path}/:collectionId`}
      component={colletionPage}
    ></Route>
  </div>
)

export default ShopPage

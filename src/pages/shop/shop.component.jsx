import React from 'react'
import { connect } from 'react-redux'
import colletionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import WithSpinner from '../../components/with-spinner/with-spiner.component'
import { Route } from 'react-router-dom'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(colletionPage)

class ShopPage extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }

  unsubscribeFromSnapshop = null

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}></CollectionsOverviewWithSpinner>}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading}{...props}></CollectionPageWithSpinner>}
        ></Route>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)

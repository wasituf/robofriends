import { useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
})

const App = ({
  searchField,
  onSearchChange,
  onRequestRobots,
  robots,
  isPending,
}) => {
  useEffect(() => {
    onRequestRobots()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredRobots = robots.filter(user =>
    user.name.toLowerCase().includes(searchField.toLowerCase()),
  )

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchfield={searchField} searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          {isPending ? <h1>Loading</h1> : <CardList robots={filteredRobots} />}
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

import { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

const App = () => {
  const [robotsList, setRobotsList] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setRobotsList(users)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSearchChange = event => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robotsList.filter(user =>
    user.name.toLowerCase().includes(searchfield.toLowerCase()),
  )

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchfield={searchfield} searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}
export default App

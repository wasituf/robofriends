import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.length ? (
        robots.map((user, i) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          )
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  )
}
export default CardList

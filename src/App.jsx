import GetContext from './GetContext'
import MyContext from './MyContext'

function App() {

  return (
    <>
      <MyContext.Provider value={"newContext"}>
        <GetContext/>
      </MyContext.Provider>
    </>
  )
}

export default App










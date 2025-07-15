import ClassComponentWithState from './ClassComponentWithState'
import ComponentWithCustomHook from './ComponentWithCustomHook'
import FunctionalComponentWithState from './FunctionalComponentWithState'
import GetContext from './GetContext'
import MyContext from './MyContext'
import PropsComponent from './PropsComponent'

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










import { Posts } from '../features/posts/posts';
import { SearchBar } from '../features/searchBar/searchBar';
import './App.css';

function App() {

  return (
    <>
      <section>
        <SearchBar/>
        <Posts/>
      </section>
    </>
  )
}

export default App;

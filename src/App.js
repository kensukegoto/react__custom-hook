import useJazzyNews from './useJazzyNews';

function App() {

  const posts = useJazzyNews();
  
  return (
    <div className="App">
      <ul>
      { posts.map((post,index) => {
        return <li key={index}>{ post }</li>;
      })}
      </ul>
    </div>
  );
}

export default App;

import React from "react";
import { TOKEN, SEARCH_URL } from "./config";
import Gif from "./Gif";

async function getGifs(query) {
  const response = await fetch(
    `${SEARCH_URL}?api_key=${TOKEN}&q=${query}&limit=27&offset=0&rating=G&lang=en`
  );
  const data = await response.json();

  return data;
}

function GifList(props) {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [gifs, setGifs] = React.useState([]);

  React.useEffect(() => {
    if (search.length === 0) {
      return;
    }

    async function searchGifs() {
      setLoading(true);
      const giphyData = await getGifs(search);
      setGifs(giphyData.data);
      setLoading(false);
    }

    searchGifs();
  }, [search]);

  return (
    <div className="App">
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="gif-list">
          {gifs.map(gif => {
            return <Gif key={gif.id} gif={gif} />;
          })}
        </div>
      )}
    </div>
  );
}

export default GifList;

import React, { useState, useEffect } from "react";
import{ Columns,Button} from "react-bulma-components/lib/components/columns";


function Saved() {
  // Setting our component's initial state
  const [news, setNews] = useState([]);

  // Load all news and store them with setNews
  useEffect(() => {
    loadSavedNews();
  }, []);

  // Loads all saved news and sets them to news
  function loadSavedNews() {
    API.getSavedNews()
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes news from the database with a given id, then reloads books from the db
  function deleteNews(id) {
    API.deleteNews(id)
      .then((res) => loadSavedNews())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {news.map((item) => (
        <Columns>
          <Columns.Column size={4}>
            <Card articles={item}> </Card>
            <Button onClick={() => deleteNews(item._id)} 
             color="success">
              Delete
            </Button>
          </Columns.Column>
        </Columns>
      ))}
    </div>
  );
}

export default Saved;

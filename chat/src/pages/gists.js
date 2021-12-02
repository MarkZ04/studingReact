import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getGists, gistsSelector, searchGistsByUserName } from "../store/gists";
import debounce from "lodash.debounce";

const searchGistsDebounsed = debounce((query, dispatch) => {
  dispatch(searchGistsByUserName(query));
}, 500);

export const GistsPage = () => {

  const {
    gists,
    gistsPending,
    gistsError,
    gistsByName,
    gistsByNamePending,
    gistsByNameError
  } = useSelector(gistsSelector);

  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    searchGistsDebounsed(value, dispatch);
  }, [value, dispatch]);

  if (gistsError) {
    return <h1>Error gists</h1>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Gists</h1>

        {gistsPending ? (
          <h1>Loading ....</h1>
        ) : (
          gists.map((gist, index) => <h3 key={index}>{gist.forks_url}</h3>)
        )}
      </div>
      <div >
        <h1>Gists Search</h1>
        <input
          placeholder="User name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {gistsByNamePending ? (
          <h1>Loading ....</h1>
        ) : (
          gistsByName.map((gist, index) => (
            <h3 key={index}>{gist.forks_url}</h3>
          ))
        )}
      </div>
    </div>
  )
}
// Home.js

import { useStoreState } from "easy-peasy";
import { Outlet, useLocation } from "react-router-dom";
import Feed from "./Feed";

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="Home">
      {isHome ? (
        <>
          {isLoading && <p className="statusMsg">Loading posts...</p>}
          {!isLoading && fetchError && (
            <p className="statusMsg" style={{ color: "red" }}>
              {fetchError}
            </p>
          )}
          {!isLoading &&
            !fetchError &&
            (searchResults.length ? (
              <Feed posts={searchResults} />
            ) : (
              <p style={{ marginTop: "2rem" }}>No posts to display</p>
            ))}
        </>
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export default Home;

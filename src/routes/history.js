import createHistory from 'history/createBrowserHistory';

export default createHistory({
    basename: '/blog',      // The base URL of the app (see below)
    forceRefresh: false,   // Set true to force full page refreshes
});
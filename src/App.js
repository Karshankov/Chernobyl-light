import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import './globalStyles.css';
import Loading from './components/UI/Loading';

const PowerButton = lazy(() => import('./components/UI/HomeButton'));

const Main = lazy(() => import('./components/Main/Main'));
const BlogPage = lazy(() => import('./components/Likvidators/BlogPage'));
const VillagePage = lazy(() => import('./components/Village/VillagePage'));
const HistoryPage = lazy(() => import('./components/History/HistoryPage'));
const Documents = lazy(() => import('./components/Documents/Documents'));
const AlbumPage = lazy(() => import('./components/Album/albumPage'));
const ChernobylTests = lazy(() => import('./components/Tests/ChernobylTests'));

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PowerButton />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/village" element={<VillagePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/photoalbum" element={<AlbumPage />} />
            <Route path="/ChernobylTests" element={<ChernobylTests />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
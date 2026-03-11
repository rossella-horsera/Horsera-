import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import RidesPage from './pages/RidesPage';
import RideDetailPage from './pages/RideDetailPage';
import InsightsPage from './pages/InsightsPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/rides" element={<RidesPage />} />
          <Route path="/rides/:id" element={<RideDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

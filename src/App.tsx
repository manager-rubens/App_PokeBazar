import { Navigate, Route, Routes } from "react-router-dom";
import { AppFrame } from "./components/AppFrame";
import { BackpackPage } from "./pages/BackpackPage";
import { DetailPage } from "./pages/DetailPage";
import { ExplorePage } from "./pages/ExplorePage";
import { SuccessPage } from "./pages/SuccessPage";
import { TradeScalePage } from "./pages/TradeScalePage";

export default function App() {
  return (
    <AppFrame>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/item/:itemId" element={<DetailPage />} />
        <Route path="/mochila" element={<BackpackPage />} />
        <Route path="/balanca" element={<TradeScalePage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppFrame>
  );
}

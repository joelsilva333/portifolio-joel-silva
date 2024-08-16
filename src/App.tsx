import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFoundPage from "./pages/404"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/portifolio-joel-silva" element={<Home />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}

export default App

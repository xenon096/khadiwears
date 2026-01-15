import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { businessDetails } from './data';

function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-khadi-50 text-khadi-800 transition-colors duration-300 dark:bg-khadi-900 dark:text-khadi-100 font-sans">
            <Navbar />

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>

            <footer className="bg-khadi-900 text-khadi-200 py-12 text-center text-sm border-t border-khadi-800">
              <div className="max-w-4xl mx-auto px-4">
                <p className="font-serif text-xl mb-4 text-white">{businessDetails.name}</p>
                <p className="mb-8 opacity-70">{businessDetails.address}</p>
                <div className="border-t border-khadi-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-khadi-500 gap-4">
                  <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                  <p>Certified Khadi Institution: {businessDetails.kvicCode}</p>
                </div>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
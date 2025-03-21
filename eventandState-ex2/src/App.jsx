import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const handleCompute = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      setResult(numA + numB);
    } else {
      setResult('A and B should be numbers!');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <div className="flex justify-center items-center bg-purple-300">
          <div className="flex justify-center items-center bg-purple-300">
            {/* Calculator Container */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
              {/* Title */}
              <h1 className="text-white text-2xl font-bold mb-4 text-center">CALCULATOR</h1>

              {/* Input A */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm">A :</label>
                <input
                  type="text"
                  value={a}
                  onChange={(e) => setA(e.target.value)}
                  placeholder="Enter number for A"
                  className="w-full mt-1 p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Input B */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm">B :</label>
                <input
                  type="text"
                  value={b}
                  onChange={(e) => setB(e.target.value)}
                  placeholder="Enter number for B"
                  className="w-full mt-1 p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Result A + B */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm">A + B :</label>
                <input
                  type="text"
                  value={result}
                  placeholder="A and B should be numbers!"
                  className="w-full mt-1 p-2 bg-gray-700 text-red-500 rounded focus:outline-none"
                  disabled
                />
              </div>

              {/* Compute Button */}
              <button
                onClick={handleCompute}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
              >
                Compute
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

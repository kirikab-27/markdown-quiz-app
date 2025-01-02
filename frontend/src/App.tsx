// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // Tailwind化するなら、既存の App.css は不要になるかもしれません
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // Tailwindのユーティリティクラスで背景・レイアウト指定
//     <div className="text-center bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
//       {/* 上部にロゴを並べる部分（必要なければ削除してOK） */}
//       <div className="flex gap-8 mb-8">
//         <a href="https://vite.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="w-16 h-16" alt="React logo" />
//         </a>
//       </div>

//       {/* タイトル部分 */}
//       <h1 className="text-3xl font-bold text-blue-500 mb-4">Hello Tailwind!</h1>

//       {/* カウント操作ボタン */}
//       <div className="card bg-white p-4 rounded shadow-md">
//         <button
//           onClick={() => setCount((count) => count + 1)}
//           className="mt-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           count is {count}
//         </button>
//         <p className="mt-4 text-gray-600">
//           Edit <code className="bg-gray-200 px-1">src/App.tsx</code> and save to test HMR
//         </p>
//       </div>

//       <p className="read-the-docs mt-6 text-gray-500">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

function App() {
  return (
    <div className="text-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  )
}

export default App

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import './tailwindWrapperCSS.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
       <h1 className="text-3xl font-bold">Tabla de puntuaciones</h1>

        <br></br>

        <div className="grid grid-cols-4 gap-4">
       {/* GALLO APUESTAS */}
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <label className="text-2xl font-bold">Gallo</label>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Personaje</th>
                <th className="px-6 py-3">Muerto</th>
                <th className="px-6 py-3">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personaje1 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje2 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje3 </td>
                <td>No</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <label className="text-1xl font-bold">Total: 0</label>
          </div>

{/* LIDIA APUESTAS  */}
   
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <label className="text-2xl font-bold">Lidia</label>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Personaje</th>
                <th className="px-6 py-3">Muerto</th>
                <th className="px-6 py-3">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personaje1 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje2 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje3 </td>
                <td>No</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <label className="text-1xl font-bold">Total: 0</label>
          </div>
       {/* MARTA APUESTAS */}
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <label className="text-2xl font-bold">Marta</label>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Personaje</th>
                <th className="px-6 py-3">Muerto</th>
                <th className="px-6 py-3">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personaje1 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje2 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje3 </td>
                <td>No</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <label className="text-1xl font-bold">Total: 0</label>
          </div>
                 {/* CARMEN APUESTAS */}
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <label className="text-2xl font-bold">Carmen</label>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Personaje</th>
                <th className="px-6 py-3">Muerto</th>
                <th className="px-6 py-3">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personaje1 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje2 </td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
              <td>Personaje3 </td>
                <td>No</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <label className="text-1xl font-bold">Total: 0</label>
          </div>
</div>
      </div>
    </main>
  )
}

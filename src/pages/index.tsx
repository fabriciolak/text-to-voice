import { Inter, Atkinson_Hyperlegible } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const atkinsonHyperlegible = Atkinson_Hyperlegible({ subsets: ['latin'], weight: ["400"] })

export default function Home() {
  async function generateVoice() {
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()

    console.log(data)
  }

  return (
    <main className='container w-[80rem] my-32 mx-auto rounded-lg border-2 border-black/10'>
      <div className='p-8'>
        <h1 className={`${inter.className} text-2xl font-bold`}>Text to Voice</h1>
      </div>
      <div className='p-8 border-t-2'>
        <p className={`${atkinsonHyperlegible.className}`}>Settings</p>
        <div className='flex flex-col w-max mx-auto'>
          <select className={`w-[56.25rem] px-4 py-2 rounded-lg border-2 text-sm ${inter.className}`} id="voice">
            <option value="premade/adam">Premade/Adam</option>
          </select>
          <div className='w-[56.25rem] mt-5 px-4 py-2 rounded-lg border-2'>
            <p className={`${inter.className} text-sm`}>Voice settings</p>
          </div>
        </div>
      </div>
      <div className='p-8 border-t-2'>
        <p className={`${atkinsonHyperlegible.className}`}>Text</p>
        <div className='flex flex-col w-max mx-auto'>
          <textarea className='w-[56.25rem] p-2 border-2' cols={0} rows={20}></textarea>
          <button
            className={`w-[56.25rem] mt-8 p-2 bg-sky-600 cursor-pointer`}
            onClick={generateVoice}
          >
            Generate
          </button>
        </div>
      </div>
    </main>
  )
}

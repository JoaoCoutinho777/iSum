import { logo } from '../assets';
import Export from './Export';

function Hero() {

  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="iSum_logo" className='w-28 object-contain' />
            <Export />
            {/* <button type='button' onClick={() => window.open('https://github.com/JoaoCoutinho777/iSum')} className='black_btn'>GitHub</button> */}
        </nav>

        <h1 className='head_text'>
            Summarize Articles
        </h1>
        <h2 className='desc'>
            Simplify your reading with iSum, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
  }

export default Hero
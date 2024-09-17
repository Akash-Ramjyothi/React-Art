import logo from '../assets/logo.png';

// Header function
export default function Header() {
  return (
    // Tailwind
    <header className='flex flex-col items-center mt-8 mb-16'>
      {/* IMG Component */}
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain' />
      <h1 className='text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title'>
        ReactArt
      </h1>
      <p className='text-stone-500'>A community of artists and art-lovers.</p>
    </header>
  );
}

import Navlinks from './nav-links';

export default function NavBar() {
  return (
    <div className='flex flex-row w-2/5 h-full ml-auto pr-16 justify-between items-end'>
        <Navlinks />
    </div>
  );
}
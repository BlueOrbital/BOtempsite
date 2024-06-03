import Navlinks from './nav-links';

export default function NavBar() {
  return (
    <div className='z-50 flex flex-row w-2/5 h-full ml-auto justify-between items-end'>
        <Navlinks />
    </div>
  );
}
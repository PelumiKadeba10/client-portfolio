// component/ProjectsNav.jsx
export default function ProjectsNav({ scrollTo, refs }) {
  return (
    <>
      {/* Desktop View: Fixed Navigation on Right */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 ml-52 bg-slate-200 hidden lg:flex md:flex justify-center">        
        <button onClick={() => scrollTo(refs.flyersRef)} className="hover:bg-amber-300 p-5">Flyers</button>
        <button onClick={() => scrollTo(refs.postersRef)} className="hover:bg-amber-300 p-5">Posters</button>
        <button onClick={() => scrollTo(refs.carouselsRef)} className="hover:bg-amber-300 p-5">Carousels</button>
        <button onClick={() => scrollTo(refs.webDesignRef)} className="hover:bg-amber-300 p-5">Web Design</button>
      </nav>

      {/* Mobile View: Bottom Sticky Navigation */}
      <div className="fixed bg-slate-200 bottom-0 left-0 right-0 md:hidden z-30 shadow-t p-">
        <div className="flex gap-9 justify-center items-center text-sm font-medium text-slate-700">
          <button onClick={() => scrollTo(refs.flyersRef)} className="hover:bg-amber-300 p-5">Flyers</button>
          <button onClick={() => scrollTo(refs.postersRef)} className="hover:bg-amber-300 p-5">Posters</button>
          <button onClick={() => scrollTo(refs.carouselsRef)} className="hover:bg-amber-300 p-5">Carousels</button>
          <button onClick={() => scrollTo(refs.webDesignRef)} className="hover:bg-amber-300 p-5">Web</button>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import logo1 from '/src/assets/imgs/sarovic.png'
import logo2 from '/src/assets/imgs/s.png'
import img1 from '/src/assets/imgs/img1.png'
import img2 from '/src/assets/imgs/img2.png'
import img3 from '/src/assets/imgs/img3.png'

function App() {
  return (
    <div className='flex flex-col w-[100%]'>
      <nav className='w-[100%] h-[100px]'>
        <div className='h-[5vw] bg-black'>
          <img className='h-[6.4vw]' src={logo1} alt="" />
        </div>
        <div className='h-[3vw] bg-red-900'>
          <img className='h-[2.6vw] ml-[15vw]' src={logo2} alt="" />
        </div>
      </nav>
      <section className='w-[100%] flex justify-around h-[50vw] md:mt-[10vw] gap-[2vw]'>
        <div className='w-[50vw] h-[50vw]'>
          <div className='grid grid-cols-2 relative left-1 gap-[1vw]'>
            <img className='w-[24vw] border-[6px] border-black' src={img2} alt="" />
            <div className='w-[24vw] font-[700] font-mono px-[1vw] leading-[3.2vw] py-[8vw] bg-red-900 text-white'>
             <h1 className='text-[3.3vw]'>BIOKLIMATSKA</h1> 
             <h2 className='text-[3.5vw] ml-[3vw]'>PERGOLA</h2>
            </div>
            <img className='w-[24vw] border-[6px] border-black' src={img3} alt="" />
            <img className='w-[24vw] border-[6px] border-black' src={img1} alt="" />
          </div>
        </div>
        <div className='w-[50vw] h-[50vw] flex-col gap-2 font-mono text-[2vw] font-[500] tracking-[0%] leading-[2.2vw]'>
          <h1 className='font-[900] w-[100%]'>BIOKLIMATSKA PERGOLA KAO STRATEŠKA INVESTICIJA U VRIJEDNOST OBJEKTA</h1>
            <p>Pergola dimenzija 10×10 m na vrhu objekta nije standardan proizvod, već ozbiljan građevinsko–arhitektonski projekat koji zahtijeva precizno projektovanje, kvalitetnu izradu i sigurnu montažu.</p>
            <p> U ovom slučaju, pergola ne predstavlja samo zaštitu od sunca i kiše, već ključni element koji definiše izgled, funkcionalnost i prestiž prostora. </p>
            <p>Zbog svoje pozicije, izloženosti vjetru i statičkih zahtjeva, svaki detalj sistema mora biti pažljivo dimenzionisan i tehnički opravdan.</p>
            <p>Naša rješenja su projektovana po principu dugotrajnosti, sigurnosti i maksimalnog komfora, uz korišćenje provjerenih materijala, industrijskih profila i pouzdanih mehanizama, prilagođenih zahtjevnim krovnim instalacijama.</p>
          </div>
      </section>
      <footer>
        <div className='w-[100%] text-[1.6vw] font-semibold flex flex-col gap-[2vw] mt-[10vw]'>
          <h1 className='font-[800]'>KLIZNA STAKLA - MINIMALISTIČKI SISTEM BEZ VIZUELNIH BARIJERA</h1>
          <h2>Primijenjen je minimalistički sistem kliznih stakala Feal FR18, sa:</h2>
          <ul className='ml-[1.7vw] list-disc'>
            <li>kaljenim Parsol staklom debljine 10 mms</li>
            <li>maksimalnom transparentnošću</li>
            <li>visokom mehaničkom otpornošću</li>
          </ul>
          <p>Ovim rješenjem prostor ostaje vizuelno otvoren, uz potpunu zaštitu od vjetra i padavina.</p>
        </div>
      </footer>
      <hr className='h-[4px] mt-[20vw] bg-red-800'/>
      <h1 className='flex justify-center items-center mt-6 text-[1.5vw] font-[600]'>www.sarovic.me</h1>
    </div>
  )
}

export default App

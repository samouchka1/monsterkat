import React from 'react'

const Content = () => {
  return (
    <article>
        <section className="relative max-w-screen-xl mx-auto mt-[100px] pt-10">
            <div className="w-full grid grid-cols-[24px,480px,1fr] gap-1">
                <div>
                    <div className="absolute bottom-0 rotate-[180deg] text-neutral-50" style={{writingMode: 'vertical-rl'}}>
                        <span className="text-monsterkat-green">Instinct</span> — Released May 22, 2020
                    </div>
                </div>
                <div>
                    <img src="/album_cover.png" alt="album cover" width="480" />
                </div>
                <div className="flex flex-col pl-16">
                    <div>
                        <h1 className="text-neutral-50 text-6xl">Level Days</h1>
                        <p className="text-neutral-50 text-4xl">conro</p>
                    </div>
                    <div className="Gruppo flex gap-2"> {/*font family not working*/}
                        <button className="text-neutral-50 text-2xl bg-monsterkat-green py-2 w-[213px] align-middle">listen now</button>
                        <button className="text-neutral-50 hover:text-neutral-900 text-2xl bg-transparent hover:bg-white py-[6.4px] w-[153px] align-middle border-solid border-2 border-neutral-50">share</button>
                        {/*hover not working*/}
                    </div>
                </div>
            </div>
        </section>

    </article>
  )
}

export default Content
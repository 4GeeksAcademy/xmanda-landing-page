import React from 'react'

//object for data to run through cards

let CardInfo = [

    {
        image: "https://i.pinimg.com/564x/70/ce/fe/70cefeeab5760062e5c2ff51981ba361.jpg",
        title: "Jake Grewal",
        description: "Contrast and light studies to give depth. Brings you on a journey through his colourful landscapes.",
    },
    {
        image: "https://i.pinimg.com/564x/98/5a/66/985a662ce387287d08b04223818ef8df.jpg",
        title: "Anthony Kudahy",
        description: "Through a monocromatic lens. Works and investigation of single color values to bring paintings to life",
    },
    {
        image: "https://i.pinimg.com/564x/6a/33/a3/6a33a3ef341220184cd743ef3704a693.jpg",
        title: "Lisa Brice",
        description: "Colors that incite violence. Harsh lines and passionate expressions. An intense walk-through this artist's vision.",
    },
        {
        image: "https://i.pinimg.com/564x/6f/cf/fc/6fcffc66c2487a8b5e7db32350a74d19.jpg",
        title: "Louise Zhang",
        description: "Abstract works that capture your attention. Wobbly lines and thick brush strokes. A collection on this fun style.",
    },
];


const CardList = () => {
    return (
        <div className='d-flex justify-content-center m-5'>
            {CardInfo.map((card, index) => (
                <div className="card m-2 text-center" key={index}>
                    <img src={card.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                    </div>
                    <div className='p-2 border bg-light'>
                        <a className="btn btn-primary">Check this artist</a>
                    </div>
                    </div>
            ))}
               </div>
            )
};

export default CardList
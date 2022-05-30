import React from 'react';
const serchtest = () =>{
    console.log("test click search");
}
const Searchtop = () => {
    const serchtest = (e) => {
        e.preventDefault();

        console.log("test demo click search");
    }
    return (
        <div>
            <section className='searchtop'>
                <form className='formserche' onSubmit={serchtest}>
                    <div class="chmaps">
                        <input type="text" placeholder='Vente' />
                    </div>
                    <div class="chmaps">
                        <input type="text" placeholder='Vente' />
                    </div>
                    <div class="chmaps">
                        <input type="text" placeholder='Vente' />
                    </div>
                    <div class="chmaps">
                        <input type="text" placeholder='Vente' />
                    </div>
                    <button type='submit'>
                        RECHERCHER
                    </button>
                </form>

            </section>
        </div>
    );
};

export default Searchtop;
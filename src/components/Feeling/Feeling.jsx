import Header from "../Header/Header";

function Feeling(){
    return(
        <>
    <header>
        <Header />
    </header>
        <h1>How Are You Feeling Today?</h1>
    <div>
        <label for="feeling">Feeling? (0-5) </label>
        <input type="number" id="feeling" name="feeling"
        min="0" max="5"/>
    </div>
        <button>Next</button>
        </>
    )
}

export default Feeling;
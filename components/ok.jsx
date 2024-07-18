function Ok(){
    const ok = () =>{
        document.getElementById("overlay-1").style.display="none"
    }
    return(
        <button className="ok" onClick={ok}>Ok</button>
    )
}

export default Ok
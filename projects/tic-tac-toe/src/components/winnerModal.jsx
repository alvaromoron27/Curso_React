import './winnerModal.css'

function WinnerModal(winner, onclose){

    if (!winner) return null;

    return(
        <div className='container-modal'>
            <p>{winner ? `El ganador es ${winner}` : 'Empate'}</p>
            <button>Aceptar</button>
        </div>
    )
}

export default WinnerModal;
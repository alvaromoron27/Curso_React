import './winnerModal.css'

// eslint-disable-next-line react/prop-types
function WinnerModal({winner, onclose}){

    if (!winner) return null;

    return(
        <div className='container-modal'>
            <p className='infoWinner'>{winner === 'Empate' ? 'Empate' : `El ganador es ${winner}`}</p>
            <button onClick={onclose}>Aceptar</button>
        </div>
    )
}

export default WinnerModal;
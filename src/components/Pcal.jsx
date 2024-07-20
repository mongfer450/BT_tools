import React from 'react'

const Pcal = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center'>
        <h1 className='text-2xl mt-20'>Prestige Calculator</h1>
        <div className="container flex flex-col items-center justify-center space-y-4" >
            <div className="tokenCal flex items-center">
                <label htmlFor="tokenSelect" className="m-2">Tokens:</label>
                <select id="tokenSelect" className="m-2 p-2 border rounded text-black">
                    <option value="btt">Bigtime Token</option>
                    <option value="tc">Time Crystal</option>
                    <option value="at">A-Terracore</option>
                    <option value="ab">A-Blushfire</option>
                </select>
                <label htmlFor="inputToken" className="m-2">Used:</label>
                <input className="text-black p-2 border rounded" type="text" id="inputToken" />
            </div>

            <div className="PModCal flex flex-col items-center">
                <label htmlFor="inputPMod" className="m-2">P-Modchip used:</label>
                <input className="text-black p-2 border rounded" type="text" id="inputPMOD" />
            </div>
            
            <div className="hgtCal flex flex-col items-center">
                <label htmlFor="inputHgT" className="m-2">HG Time used:</label>
                <input className="text-black p-2 border rounded" type="text" id="inputHgT" />
            </div>

            <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={() => calAll()}>Calculate</button>
        </div>

        <div className="outputBox mt-4">
            <p id="outputResult"></p>
        </div>
    </div>
    
  )
}

export default Pcal

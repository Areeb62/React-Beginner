import React from 'react'

const Color = ({ color, textColor = "black", bgChanger, className }) => {
    return (
        <button onClick={() => bgChanger(color)} style={{ background: color, color: textColor }} className={`${className} md:flex-1 flex-[0_0_calc(100%/3-12px)] p-4 rounded-2xl`}>{color}</button>
    )
}

export default Color

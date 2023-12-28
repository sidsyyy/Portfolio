import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>

            {['home', 'about', 'work', 'skills', 'certificates', 'contact'].map(
                (item, index) => (
                    <div
                        key={item + index}
                        onClick={() => {window.open(`#${item}`, '_self')}}
                        className="app__navigation-dot"
                        style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    />
                )
            )}
        </div>
    )
}

export default NavigationDots
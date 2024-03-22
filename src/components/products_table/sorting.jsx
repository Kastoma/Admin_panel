import { useRef } from "react";

export function Sort({ options, selectedSort, onClick }) {
    const methods = useRef(null)

    function sortClick() {
        methods.current.style.display = 'block';
    }

    return (
            <div className="select-item" onClick={sortClick} onMouseLeave={() => methods.current.style.display = 'none'}>
                <span style={{ margin: '0 0 2px 5px' }} >{selectedSort ? selectedSort : 'Sort'}</span>
                <div ref={methods} className="options-container">
                    {options.map((obj) => {
                        return <div key={obj.value} id={obj.value} onClick={e => onClick(e, e.target.textContent)} className="select-option">{ obj.name }</div>
                    })}
                </div>
            </div>
    )
}
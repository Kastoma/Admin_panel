export function FilterColor({ rows, setColor }) {
    
    let colors = []
    let allColors = []
        rows.map((el) => {
            el.colors.map((obj) => allColors.push(obj.color))
        })

    colors = [...new Set(allColors)]
    console.log(colors)

    function rgb2hex(rgb) {
        var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    };

    return (
        <div className="filter-color_container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
            {colors.map((color, i) => {
                return (<div key={i} className="filter-color_block" style={{width: '30px', height: '30px', backgroundColor: color, border: '1px solid black', margin: '1px', cursor: 'pointer'}} onClick={(e) => setColor(rgb2hex(e.target.style.backgroundColor))}></div>)
            })}
        </div>
    )
}
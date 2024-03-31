export function Modal({ handleInputChange, selectedOption, handleCheckboxChange, AddCategory }) {
    return (
        <div  style={{display:  'none'}} class="modal-input-window">
        <input onChange={event => handleInputChange(event)}/>
        <div id="">
          <label>
            <input
              type="checkbox"
              checked={selectedOption === 'Above'}
              onChange={() => handleCheckboxChange('Above')}
            />
            Above
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedOption === 'Inside'}
              onChange={() => handleCheckboxChange('Inside')}
            />
            Inside
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedOption === 'Below'}
              onChange={() => handleCheckboxChange('Below')}
            />
            Below
          </label>
        </div>

        <button id="md-button" onClick={AddCategory}>Add</button>

    </div>
    )
}
import React, { useState } from 'react';

function Events() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceEstimation, setPriceEstimation] = useState('');
  const [rsvpInput, setRsvpInput] = useState(['']);


  const handleAddRsvpInput = () => {
    setRsvpInput([...rsvpInput, '']); 
  };

  const handleRsvpInputChange = (index, value) => {
    const updatedRsvpInputs = [...rsvpInput];
    updatedRsvpInputs[index] = value;
    setRsvpInput(updatedRsvpInputs);
  };


  const handleDeleteRsvpInput = (index) => {
    const updatedRsvpInputs = [...rsvpInput];
    updatedRsvpInputs.splice(index, 1);
    setRsvpInput(updatedRsvpInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { title, description, priceEstimation, rsvpInput });

    setTitle('');
    setDescription('');
    setPriceEstimation('');
    setRsvpInput(['']); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Title</h3>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <h3>Description</h3>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <h3>Price Estimation</h3>
        <input type="number" min="1" value={priceEstimation} onChange={(e) => setPriceEstimation(e.target.value)} />

        <h3>RSVP</h3>
        {rsvpInput.map((inputValue, index) => (
          <div key={index}>
            <input type="text" value={inputValue} onChange={(e) => handleRsvpInputChange(index, e.target.value)} />
            <button type="button" onClick={() => handleDeleteRsvpInput(index)}>Close</button>
          </div>
        ))}
        <button type="button" onClick={handleAddRsvpInput}>
          + Add RSVP
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Events;

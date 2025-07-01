import React, { useState } from 'react';

const App = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleChange = (index, e) => {
    const updatedFields = [...fields];
    updatedFields[index][e.target.name] = e.target.value;
    setFields(updatedFields);
  };

  const handleAdd = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemove = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', fields);
  };

  return (
    <div style={{ paddingTop: '40px', fontFamily: 'Arial' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0, // no vertical gap
        }}
      >
        {fields.map((field, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0px', // remove gap
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
              required
              style={{
                border: '1px solid #ccc',
                height: '30px',
                marginRight: '0px',
              }}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              required
              style={{
                border: '1px solid #ccc',
                height: '30px',
                marginRight: '0px',
              }}
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              style={{
                height: '34px',
                marginRight: '0px',
              }}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add & Submit with no space from above */}
        <div style={{ display: 'flex', marginTop: '0px' }}>
          <button type="button" onClick={handleAdd} style={{ borderRadius: 0 }}>
            Addmore
          </button>
          <button type="submit" style={{ borderRadius: 0 }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

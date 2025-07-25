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
    console.log(fields);  // Log array directly to match Cypress expectation
  };

  return (
    <div style={{ paddingTop: '40px', fontFamily: 'Arial' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
        }}
      >
        {fields.map((field, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0px',
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

        <div style={{ display: 'flex', marginTop: '0px' }}>
          <button type="button" onClick={handleAdd} style={{ borderRadius: 0 }}>
            Add More...
          </button>
          <button type="submit" style={{ borderRadius: 0 }}>
            Submit
          </button>
        </div>
        <h2>After clicking submit check console for data</h2>
      </form>
    </div>
  );
};

export default App;

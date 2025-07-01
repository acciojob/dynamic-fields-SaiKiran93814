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
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
              required
              style={{ marginRight: '10px' }}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              required
              style={{ marginRight: '10px' }}
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemove(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAdd} style={{ marginRight: '10px' }}>
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

// App.jsx

import React from 'react';
import Button from './components/Buttons/Buttons';
import './App.scss';

const App = () => (
  <div className="app">
    <h1 className="app__title">Hello, React!</h1>
    <p className="app__description">This is a basic React app setup with SCSS.</p>
    <div className="app__buttons">
      <Button
        variant="submit"
        svgIconPath="/src/assets/icons/search.svg"
        text="Submit"
        onClick={() => console.log("Submit button clicked")}
        color="#28a745"
        borderRadius="5px"
        padding="12px 24px"
      />
      <Button
        variant="cancel"
        svgIconPath="/src/assets/icons/search.svg"
        text="Cancel"
        onClick={() => console.log("Cancel button clicked")}
        color="#dc3545"
        borderRadius="5px"
        padding="12px 24px"
      />
      <Button
        variant="add"
        svgIconPath="/src/assets/icons/search.svg"
        text="Add"
        onClick={() => console.log("Add button clicked")}
        color="#17a2b8"
        borderRadius="5px"
        padding="12px 24px"
      />
      <Button
        variant="no-icon"
        text="No Icon Button"
        onClick={() => console.log("No Icon button clicked")}
        color="#6c757d"
        borderRadius="5px"
        padding="12px 24px"
      />
    </div>
  </div>
);

export default App;

import React, {useState} from 'react';
import Content from './Components/Content';


function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div >
      <Content 
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}

export default App;

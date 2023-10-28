import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Page2 from '../pages/Page2';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>

      
      <Routes>
        <Route
          path="/"
          Component={Home}
        />
        <Route
          path="/page-2"
          Component={Page2}
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;

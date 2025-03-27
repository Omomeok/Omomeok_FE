import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';

export const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

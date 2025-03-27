import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import {
  Edit,
  MainPage,
  PostDetail,
  SuggestionReview,
  SuggestionReviewDetail,
  Write,
} from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/post/:id',
        element: <PostDetail />,
      },
      {
        path: '/suggestion-review',
        element: <SuggestionReview />,
      },
      {
        path: '/suggestion-review-detail/:id',
        element: <SuggestionReviewDetail />,
      },
      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/edit',
        element: <Edit />,
      },
    ],
  },
]);

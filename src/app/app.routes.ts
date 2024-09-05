import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/pre-step/pre-step.component').then(
        (m) => m.PreStepComponent
      ),
  },

  {
    path: 'select',
    loadComponent: () =>
      import(
        './pages/selection/components/house-type/house-type.component'
      ).then((m) => m.HouseTypeComponent),
    children: [
      {
        path: 'location',
        loadComponent: () =>
          import(
            './pages/selection/components/location/location.component'
          ).then((m) => m.LocationComponent),
      },
      {
        path: 'house',
        loadComponent: () =>
          import(
            './pages/selection/components/house-type/house-type.component'
          ).then((m) => m.HouseTypeComponent),
      },
      { path: '', redirectTo: 'select', pathMatch: 'full' },
    ],
  },

  {
    path: 'send',
    loadComponent: () =>
      import('./pages/prob/prob.component').then((m) => m.ProbComponent),
    children: [
      {
        path: 'description',
        loadComponent: () =>
          import(
            './pages/prob/components/description-house/description-house.component'
          ).then((m) => m.DescriptionHouseComponent),
      },
      {
        path: 'message',
        loadComponent: () =>
          import(
            './pages/prob/components/send-msg-house/send-msg-house.component'
          ).then((m) => m.SendMsgHouseComponent),
      },
      { path: '', redirectTo: 'description', pathMatch: 'full' },
    ],
  },

  {
    path: 'submissions',
    loadComponent: () =>
      import('./pages/submissionl/submissionl.component').then(
        (m) => m.SubmissionlComponent
      ),
    children: [
      {
        path: 'pendding',
        loadComponent: () =>
          import(
            './pages/submissionl/components/message-pendding/message-pendding.component'
          ).then((m) => m.MessagePenddingComponent),
      },
      {
        path: 'success',
        loadComponent: () =>
          import(
            './pages/submissionl/components/message-success/message-success.component'
          ).then((m) => m.MessageSuccessComponent),
      },
      { path: '', redirectTo: 'pendding', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'home' },
];

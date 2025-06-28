// src/App.tsx
// Entry point of NutriScan AI app with basic routing

import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import { MainMenu } from './pages/MainMenu';
import { ProfileSetup } from './pages/ProfileSetup';
import { SearchProduct } from './pages/SearchProduct';

export const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/menu" component={MainMenu} />
        <Route path="/profile" component={ProfileSetup} />
        <Route path="/search" component={SearchProduct} />
        {/* TODO: more routes for other pages */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

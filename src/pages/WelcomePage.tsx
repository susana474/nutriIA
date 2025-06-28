// src/pages/WelcomePage.tsx
// P1: Pantalla de bienvenida con logo

import { IonPage, IonContent, IonImg } from '@ionic/react';

export const WelcomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <IonImg src="assets/logo.png" alt="NutriScan AI logo" />
        {/* TODO: add start button to navigate to MainMenu */}
      </IonContent>
    </IonPage>
  );
};

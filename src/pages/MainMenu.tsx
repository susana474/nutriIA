// src/pages/MainMenu.tsx
// P2: Menú principal con íconos grandes para cada función

import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { camera, search, time, menu } from 'ionicons/icons';
import { useHistory } from 'react-router';

export const MainMenu: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={() => history.push('/scan')}>
                <IonIcon icon={camera} /> Escanear
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" onClick={() => history.push('/search')}>
                <IonIcon icon={search} /> Buscar
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={() => history.push('/history')}>
                <IonIcon icon={time} /> Historial
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" onClick={() => history.push('/menu')}>
                <IonIcon icon={menu} /> Menú
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

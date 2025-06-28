// src/pages/ProfileSetup.tsx
// P3: Configuración rápida de perfil

import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useState } from 'react';

interface Profile {
  age: number;
  gender: string;
  condition: string;
}

export const ProfileSetup: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({ age: 0, gender: '', condition: '' });

  const saveProfile = () => {
    // TODO: persist profile, then navigate to main menu
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Edad</IonLabel>
          <IonInput
            type="number"
            value={profile.age}
            onIonChange={e => setProfile({ ...profile, age: parseInt(e.detail.value!, 10) })}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Género</IonLabel>
          <IonSelect
            value={profile.gender}
            onIonChange={e => setProfile({ ...profile, gender: e.detail.value })}
          >
            <IonSelectOption value="male">Masculino</IonSelectOption>
            <IonSelectOption value="female">Femenino</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Condición</IonLabel>
          <IonInput
            value={profile.condition}
            onIonChange={e => setProfile({ ...profile, condition: e.detail.value! })}
          />
        </IonItem>
        <IonButton expand="block" onClick={saveProfile}>Guardar</IonButton>
      </IonContent>
    </IonPage>
  );
};

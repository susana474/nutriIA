// src/pages/OcrCapture.tsx
// P8: Captura de foto para OCR cuando no se encuentra el producto

import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useState } from 'react';
import { recognizeText } from '../services/ocr';

export const OcrCapture: React.FC = () => {
  const [text, setText] = useState('');

  const capture = async () => {
    // TODO: use Capacitor camera to take photo
    // Placeholder: assume we have a Blob image
    const image = new Blob();
    const result = await recognizeText(image);
    setText(result);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton onClick={capture}>Capturar etiqueta</IonButton>
        <pre>{text}</pre>
      </IonContent>
    </IonPage>
  );
};

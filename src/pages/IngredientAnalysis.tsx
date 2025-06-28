// src/pages/IngredientAnalysis.tsx
// P9: Lista detallada de ingredientes con análisis inteligente

import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { ProductInfo } from '../services/recommendations';

interface Props {
  product: ProductInfo;
}

export const IngredientAnalysis: React.FC<Props> = ({ product }) => (
  <IonPage>
    <IonContent className="ion-padding">
      <IonList>
        {Object.entries(product.nutrients).map(([key, value]) => (
          <IonItem key={key}>
            <IonLabel>{key}: {value}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      {/* TODO: add intelligent observations like 'Alto en azúcar' */}
    </IonContent>
  </IonPage>
);

// src/pages/FrequentList.tsx
// P5: Lista de productos y comidas frecuentes

import { IonPage, IonContent, IonList, IonItem } from '@ionic/react';
import { ProductInfo } from '../services/recommendations';

interface Props {
  items: ProductInfo[];
  onSelect: (p: ProductInfo) => void;
}

export const FrequentList: React.FC<Props> = ({ items, onSelect }) => (
  <IonPage>
    <IonContent>
      <IonList>
        {items.map(p => (
          <IonItem button key={p.name} onClick={() => onSelect(p)}>
            {p.name}
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  </IonPage>
);

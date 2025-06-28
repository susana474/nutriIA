// src/components/ProductCard.tsx
// Displays product summary with score and quick actions

import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { ProductInfo } from '../services/recommendations';

interface ProductCardProps {
  product: ProductInfo;
  onSelect?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => (
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>{product.name}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      {/* TODO: show score and summary */}
      <IonButton onClick={onSelect}>Ver detalle</IonButton>
    </IonCardContent>
  </IonCard>
);

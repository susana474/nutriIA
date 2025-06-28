// src/pages/Recommendation.tsx
// P7: Mostrar recomendaciones automáticas y explicación del producto

import { IonPage, IonContent } from '@ionic/react';
import { ProductInfo, calculateScore, getRecommendations } from '../services/recommendations';

interface Props {
  product: ProductInfo;
}

export const RecommendationPage: React.FC<Props> = ({ product }) => {
  const score = calculateScore(product);
  const recommendations = getRecommendations(score);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>{product.name}</h2>
        <p>Puntaje: {score}</p>
        <p>{/* TODO: short product explanation */}</p>
        <ul>
          {recommendations.map(r => <li key={r}>{r}</li>)}
        </ul>
      </IonContent>
    </IonPage>
  );
};

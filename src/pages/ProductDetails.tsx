// src/pages/ProductDetails.tsx
// P4: Vista de producto escaneado o buscado

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { ProductInfo, calculateScore, getRecommendations } from '../services/recommendations';
import { RadarChart } from '../components/RadarChart';

interface Props {
  product: ProductInfo;
}

export const ProductDetails: React.FC<Props> = ({ product }) => {
  const score = calculateScore(product);
  const recommendations = getRecommendations(score);

  // Example radar data
  const data = {
    labels: ['Azúcar', 'Grasas', 'Sal', 'Fibra', 'Proteína'],
    datasets: [{
      data: [product.nutrients.sugar, product.nutrients.fat, product.nutrients.salt, product.nutrients.fiber, product.nutrients.protein],
      label: product.name
    }]
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{product.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <RadarChart data={data} />
        <p>Puntaje: {score}</p>
        <ul>
          {recommendations.map(r => <li key={r}>{r}</li>)}
        </ul>
        {/* TODO: enlace a IngredientAnalysis */}
      </IonContent>
    </IonPage>
  );
};

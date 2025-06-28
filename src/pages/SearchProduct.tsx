// src/pages/SearchProduct.tsx
// P6: Búsqueda de productos con acceso directo al escaneo

import { IonPage, IonContent, IonSearchbar, IonList, IonItem, IonButton } from '@ionic/react';
import { useState } from 'react';
import { searchProducts } from '../services/database';
import { ProductInfo } from '../services/recommendations';
import { scanBarcode } from '../services/barcode';

export const SearchProduct: React.FC = () => {
  const [results, setResults] = useState<ProductInfo[]>([]);

  const search = async (text: string) => {
    const found = await searchProducts(text);
    setResults(found as ProductInfo[]);
  };

  const handleScan = async () => {
    const barcode = await scanBarcode();
    // TODO: navigate to product page using barcode
  };

  return (
    <IonPage>
      <IonContent>
        <IonSearchbar onIonChange={e => search(e.detail.value!)} />
        <IonButton onClick={handleScan}>Escanear</IonButton>
        <IonList>
          {results.map(p => (
            <IonItem key={p.name}>{p.name}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

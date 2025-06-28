// src/services/recommendations.ts
// Simple scoring system and automatic recommendations

export interface ProductInfo {
  name: string;
  nutrients: Record<string, number>; // e.g., sugar, fat, salt
}

export function calculateScore(product: ProductInfo): number {
  // TODO: implement better scoring
  const sugar = product.nutrients.sugar || 0;
  const fat = product.nutrients.fat || 0;
  return 100 - sugar - fat;
}

export function getRecommendations(score: number): string[] {
  if (score > 80) return ['Excelente elección'];
  if (score > 60) return ['Consumir con moderación'];
  return ['Busca alternativas más saludables'];
}

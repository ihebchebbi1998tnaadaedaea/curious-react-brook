
const categoryBanners: Record<string, string> = {
  // Main Categories
  "vetements-cuisine": "/VetementDeCuisine/vestedecuisineImagebanner.jpg",
  "vetements-boulanger": "/VetementDeBoulanger&patissier/VetementTheBoulangerPattisierBanner.jpg",
  "vetements-hotellerie": "/VetementServiceHotellerie/TenueDacceuilHotelBanner.jpg",
  "vetements-travail": "/VetementDeTravail/VetementDeTravailBanner.jpg",
  "chaussures": "/ChausureDeTravail/ChaussureDeTravailBanner.jpg",
  "produits-marketing": "/ProduitsMarketing/ProduitMarketingBanner.jpg",

  // Subcategories Vêtements Cuisine
  "vetements-cuisine/vestes": "/VetementDeCuisine/VesteDeChef.jpg",
  "vetements-cuisine/tabliers": "/VetementDeCuisine/TablierDeChef.jpg",
  "vetements-cuisine/pantalons": "/VetementDeCuisine/PontalonDeChef.jpg",

  // Subcategories Vêtements Boulanger & Pâtissier
  "vetements-boulanger/vestes": "/VetementDeBoulanger&patissier/VesteDeBoulanger.jpg",
  "vetements-boulanger/tabliers": "/VetementDeBoulanger&patissier/TablierDeBoucher.jpg",
  "vetements-boulanger/tabliers-boucher": "/VetementDeBoulanger&patissier/VesteProBoucher.jpg",

  // Subcategories Vêtements Service & Hôtellerie
  "vetements-hotellerie/service": "/VetementServiceHotellerie/UniformeDeService.jpg",
  "vetements-hotellerie/accueil": "/VetementServiceHotellerie/TenueDacceuilHotelBanner.jpg",

  // Subcategories Vêtements de Travail
  "vetements-travail/blouses": "/VetementDeTravail/BlouseMedical.jpg",
  "vetements-travail/tuniques": "/VetementDeTravail/TuniqueMedical.png",
  "vetements-travail/combinaisons": "/VetementDeTravail/CombinaionDeTravail.jpg",

  // Subcategories Chaussures
  "chaussures/cuisine": "/ChausureDeTravail/ChaussureDeCuisine.jpg",

  // Subcategories Produits Marketing
  "produits-marketing/drapeaux": "/ProduitsMarketing/DrapeauMarketing.jpg",
  "produits-marketing/mugs": "/ProduitsMarketing/MugsPersonalise.jpg",
  "produits-marketing/carnets": "/ProduitsMarketing/CarnetPeronalise.jpg"
};

export const getCategoryBanner = (path: string): string => {
  return categoryBanners[path] || "/placeholder.svg";
};


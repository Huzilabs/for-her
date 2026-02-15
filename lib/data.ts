export interface Flower {
    id: string;
    name: string;
    scientificName: string;
    description: string;
    imageUrl: string;
    color: string;
}

export const flowers: Flower[] = [
    {
        id: "1",
        name: "Sakura (Cherry Blossom)",
        scientificName: "Prunus serrulata",
        description: "Symbolizing the transient nature of life, these delicate pink blossoms create breathtaking canopies in spring.",
        imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=3276&auto=format&fit=crop",
        color: "#ffccd5",
    },
    {
        id: "2",
        name: "Red Rose",
        scientificName: "Rosa",
        description: "The classic symbol of love and passion, known for its velvety petals and intoxicating fragrance.",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=3068&auto=format&fit=crop",
        color: "#d90429",
    },
    {
        id: "3",
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        description: "Radiant and cheerful, sunflowers follow the sun across the sky, embodying warmth and happiness.",
        imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=3135&auto=format&fit=crop",
        color: "#ffbe0b",
    },
    {
        id: "4",
        name: "White Lily",
        scientificName: "Lilium candidum",
        description: "Elegant and pure, white lilies are often associated with rebirth and new beginnings.",
        imageUrl: "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?q=80&w=3087&auto=format&fit=crop",
        color: "#f8f9fa",
    },
    {
        id: "5",
        name: "Blue Hydrangea",
        scientificName: "Hydrangea macrophylla",
        description: "Known for their large, cloud-like blooms that can change color based on the soil pH.",
        imageUrl: "https://images.unsplash.com/photo-1505820013142-f86a3439f5b2?q=80&w=3271&auto=format&fit=crop",
        color: "#4895ef",
    },
    {
        id: "6",
        name: "Tulip",
        scientificName: "Tulipa",
        description: "With their perfect symmetry and bold colors, tulips are a sign that spring has truly arrived.",
        imageUrl: "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=3132&auto=format&fit=crop",
        color: "#fb8500",
    },
];

export interface BouquetFlower {
    id: string;
    type: 'rose' | 'tulip' | 'sunflower' | 'lily';
    color: string;
    scale: number;
    rotation: number;
    stemHeight: number;
    delay: number;
}

export const bouquetData: BouquetFlower[] = [
    // Center (Rose)
    { id: 'c1', type: 'rose', color: '#8a1c2f', scale: 1.3, rotation: 0, stemHeight: 320, delay: 0.2 }, // Velvet Red

    // Inner Ring
    { id: 'i1', type: 'tulip', color: '#e6b8b8', scale: 1.1, rotation: -12, stemHeight: 280, delay: 0.4 }, // Dusty Pink
    { id: 'i2', type: 'tulip', color: '#f0dcd8', scale: 1.1, rotation: 12, stemHeight: 280, delay: 0.5 }, // Soft Blush

    // Mid Ring
    { id: 'm1', type: 'lily', color: '#f4f1ea', scale: 1, rotation: -22, stemHeight: 240, delay: 0.7 }, // Cream
    { id: 'm2', type: 'lily', color: '#f4f1ea', scale: 1, rotation: 22, stemHeight: 240, delay: 0.8 }, // Cream

    // Outer Ring/Back
    { id: 'o1', type: 'rose', color: '#e8cca5', scale: 0.9, rotation: -35, stemHeight: 200, delay: 1.0 }, // Muted Peach
    { id: 'o2', type: 'rose', color: '#dcb8b0', scale: 0.9, rotation: 35, stemHeight: 200, delay: 1.1 }, // Rose Dust
    { id: 'o3', type: 'tulip', color: '#d1d8bd', scale: 0.8, rotation: -45, stemHeight: 180, delay: 1.3 }, // Pale Sage
    { id: 'o4', type: 'tulip', color: '#d1d8bd', scale: 0.8, rotation: 45, stemHeight: 180, delay: 1.4 }, // Pale Sage
];

import type { Product, InsertProduct, Order, InsertOrder } from "@shared/schema";
import { randomUUID } from "crypto";

const macbookImage = "/attached_assets/generated_images/MacBook_Pro_product_image_e6388f74.png";
const airpodsImage = "/attached_assets/generated_images/AirPods_Pro_product_image_60ea2ecc.png";
const ipadImage = "/attached_assets/generated_images/iPad_Pro_product_image_3966e4ee.png";
const watchImage = "/attached_assets/generated_images/Apple_Watch_product_image_deb2c52d.png";
const iphone16Image = "/attached_assets/generated_images/iPhone_16_product_image_4b9e0d4b.png";
const iphone17Image = "/attached_assets/generated_images/iPhone_17_Pro_hero_image_0ba29daa.png";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, product: InsertProduct): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;
  
  getOrders(): Promise<Order[]>;
  getOrder(id: string): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrderStatus(id: string, status: string): Promise<Order | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private orders: Map<string, Order>;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.seedInitialData();
  }

  private seedInitialData() {
    const initialProducts: InsertProduct[] = [
      {
        name: "iPhone 17 Pro",
        description: "All out Pro. The most advanced iPhone ever with titanium design, A19 Pro chip, and pro camera system.",
        price: "489999",
        image: iphone17Image,
        category: "iPhone",
        stock: 15,
      },
      {
        name: "iPhone 16",
        description: "Powerful performance with A18 chip. Stunning display and advanced camera capabilities.",
        price: "349999",
        image: iphone16Image,
        category: "iPhone",
        stock: 25,
      },
      {
        name: "MacBook Pro 14\"",
        description: "Supercharged by M5. The ultimate pro laptop with incredible performance and battery life.",
        price: "849999",
        image: macbookImage,
        category: "Mac",
        stock: 8,
      },
      {
        name: "iPad Pro",
        description: "Advanced AI performance and game-changing capabilities with M4 chip.",
        price: "429999",
        image: ipadImage,
        category: "iPad",
        stock: 12,
      },
      {
        name: "Apple Watch Series 11",
        description: "The ultimate way to watch your health. Advanced health sensors and fitness tracking.",
        price: "169999",
        image: watchImage,
        category: "Watch",
        stock: 20,
      },
      {
        name: "AirPods Pro 3",
        description: "The world's best in-ear Active Noise Cancellation. Immersive sound experience.",
        price: "89999",
        image: airpodsImage,
        category: "Audio",
        stock: 30,
      },
    ];

    initialProducts.forEach((product) => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: string, insertProduct: InsertProduct): Promise<Product | undefined> {
    const existing = this.products.get(id);
    if (!existing) return undefined;
    
    const updated: Product = { ...insertProduct, id };
    this.products.set(id, updated);
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }

  async getOrders(): Promise<Order[]> {
    return Array.from(this.orders.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = {
      ...insertOrder,
      id,
      createdAt: new Date(),
    };
    this.orders.set(id, order);
    return order;
  }

  async updateOrderStatus(id: string, status: string): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (!order) return undefined;
    
    const updated: Order = { ...order, status };
    this.orders.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();

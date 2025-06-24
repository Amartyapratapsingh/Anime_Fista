// Simple image cache utility
class ImageCache {
  private cache: Map<string, HTMLImageElement> = new Map();
  private loadingPromises: Map<string, Promise<HTMLImageElement>> = new Map();

  preloadImage(src: string): Promise<HTMLImageElement> {
    // Return cached image if available
    if (this.cache.has(src)) {
      return Promise.resolve(this.cache.get(src)!);
    }

    // Return existing promise if already loading
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    // Create new loading promise
    const loadingPromise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.cache.set(src, img);
        this.loadingPromises.delete(src);
        resolve(img);
      };
      
      img.onerror = () => {
        this.loadingPromises.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      img.src = src;
    });

    this.loadingPromises.set(src, loadingPromise);
    return loadingPromise;
  }

  isImageCached(src: string): boolean {
    return this.cache.has(src);
  }

  getCachedImage(src: string): HTMLImageElement | null {
    return this.cache.get(src) || null;
  }

  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
  }

  getCacheSize(): number {
    return this.cache.size;
  }
}

export const imageCache = new ImageCache(); 
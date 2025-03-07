import type { DynamicLocalImage } from "astro:assets";

export const getDynamicImages = async (images: string[]) => {
  const imageModules = import.meta.glob<DynamicLocalImage>(
    "@/assets/media/**/*.jpg",
  );

  const imagesPromises = images.map(async (image) => {
    const key = Object.keys(imageModules).find((k) => k.includes(image));
    if (!key) {
      throw new Error(`Image not found for ${image}`);
    }
    const mod = await imageModules[key]();
    return mod.default;
  });

  return Promise.all(imagesPromises);
};

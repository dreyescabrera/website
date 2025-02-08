declare module "astro:assets" {
  export type DynamicLocalImage = Awaited<
    Exclude<LocalImageProps["src"], ImageMetadata>
  >;
}

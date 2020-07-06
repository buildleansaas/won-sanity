export const slideshow = {
  title: "Slideshow",
  name: "slideshow",
  type: "document",
  fields: [
    {
      title: "Slide",
      name: "slide",
      description:
        "IMPORTANT RULES: 1. Horizontal Images Only. 2. Resize Images to 1600 Width. 3. Process Image at www.tinyjpg.com to shrink file size before uploading.",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      required: true,
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
      required: true,
    },
  ],
};

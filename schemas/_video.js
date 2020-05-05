export const video = {
  title: "Video",
  name: "video",
  type: "document",
  fields: [
    {
      title: "Youtube Embed Link",
      name: "embedLink",
      type: "string",
      description:
        "Go to the Youtube video, then click 'Share', click 'Embed',  and select the link within the quotations after 'src', and hit CTRL+C to copy it as the mouse is selected on it. If this is confusing, I can do :)",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "About This Video",
      name: "description",
      type: "text",
    },
  ],
};

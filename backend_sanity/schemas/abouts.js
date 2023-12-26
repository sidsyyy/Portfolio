export default {
  name: "about",
  title: "Abouts",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

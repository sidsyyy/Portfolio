export default {
  name: "certificates",
  title: "Certificates",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "by",
      title: "By",
      type: "string",
    },
    {
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "issueDate",
      title: "Issue Date",
      type: "date",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
          options: {
            list: [
              "Unity",
              "Cyber Security",
              "Programming",
              "Internship",
              "Other",
              "All",
            ],
          },
        },
      ],
    },
  ],
};

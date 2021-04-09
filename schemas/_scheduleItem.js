import { timeSlot } from "./_timeSlot";

export const scheduleItem = {
  title: "Weekly Schedule",
  name: "schedule",
  type: "document",
  fields: [
    {
      title: "Active",
      name: "active",
      type: "boolean",
      layout: "true",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Link",
      name: "link",
      type: "string",
    },
    {
      title: "Time Slots",
      name: "timeslots",
      type: "array",
      of: [{ type: "timeslot" }],
    },
  ],
};

import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import { scheduleItem } from "./_scheduleItem";
import { event } from "./_event";
import { location } from "./_location";
import { timeslot } from "./_timeSlot";
import { video } from "./_video";

import { slideshow } from "./_slideshow";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    scheduleItem,
    event,
    location,
    timeslot,
    video,
    slideshow,
  ]),
});

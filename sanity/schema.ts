import { type SchemaTypeDefinition } from "sanity";
import newIn from "./schemas/newIn";
import jewelry from "./schemas/jewelry";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newIn, jewelry],
};

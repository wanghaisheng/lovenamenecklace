import { groq } from "next-sanity";
import { NewInItems } from "../../typings";
import { client } from "../../sanity/lib/client";

export const getNewInProducts = async (type: string) => {
  try {
    const query = groq`*[_type == "${type}"]`;

    const newInItems: NewInItems[] = await client.fetch(query);

    return newInItems;
  } catch (error) {
    console.error("Error fetching new in products:", error);
    // You can handle the error here, such as displaying a message to the user or returning a default value
    return [];
  }
};

export const getAllProducts = async () => {
  try {
    const query = groq`*[_type in ["jewelry", "newIn"]] {slug, images, name, "id": _id, price, _type }`;

    const allItems: NewInItems[] = await client.fetch(query);

    // console.log("CHECK", allItems);

    return allItems;
  } catch (error) {
    console.error("Error fetching all products:", error);
    // You can handle the error here, such as displaying a message to the user or returning a default value
    return [];
  }
};

export const getProduct = async (type: string, slug: string) => {
  const query = groq`*[_type == "${type}" && slug == "${slug}"]`;

  const item: NewInItems[] = await client.fetch(query);
  return item;
};

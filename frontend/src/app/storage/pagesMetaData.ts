export interface PageObject {
  title: string;
  content?: string;
}

// Create a map with default data
export const pagesMetadata: Map<string, PageObject> = new Map([
  ["", { title: "Main Dashboard" }],
]);

export async function fetchPosts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export function cleanString(text: string) {
  return text.replace(/[^a-zA-Z0-9]/g, "");
}

export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    return;
  }

  linksStored.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStored));

  console.log("link salvo com sucesso!");
}

export function deleteLinks(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
  alert("Link removido!");

  return myLinks;
}

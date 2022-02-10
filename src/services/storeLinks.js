export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks);
}

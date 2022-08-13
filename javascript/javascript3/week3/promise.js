//Getting into promises
function userRepositories(userName) {
  const res = fetch(
    `https://api.github.com/search/repositories?q=user:${userName}`
  );
  res
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const ul = document.createElement("ul");
      ul.innerHTML = `${userName}'s repositories`;
      document.body.append(ul);
      console.log(data.items);
      data.items.forEach((render) => {
        const liId = document.createElement("li");
        const li = document.createElement("li");
        const li1 = document.createElement("li");
        liId.innerHTML = `Id: ${render.id}`;
        li.innerHTML = `Full name: ${render.full_name}`;
        li1.innerHTML = `Url: ${render.url}`;
        ul.append(liId);
        ul.append(li);
        ul.append(li1);
      });
    });
}
async function logRepo() {
  await Promise.all([
    userRepositories("27ManishaPatel"),
    userRepositories("viedamayanti"),
    userRepositories("Hanouj"),
  ]);
}
logRepo();

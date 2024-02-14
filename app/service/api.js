const user = { firstName: "React", lastName: "Lab" };

export function getUser() {
  return user;
}

export async function getAllEpisodesFromApi(){
  return fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
}

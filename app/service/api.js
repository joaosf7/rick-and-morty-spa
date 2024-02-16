// Save state here
const user = { firstName: "React", lastName: "Lab" };

const API_URL = 'https://rickandmortyapi.com/api'

export function getUser() {
  return user;
}

export async function getAllEpisodes(){
  let fnArray = []
  await fetch(`${API_URL}/episode`)
    .then(response => response.json())
    .then(episodes => {
      for(let i=0; i < episodes.info.pages; i++){
        fnArray.push(fetch(`${API_URL}/episode?page=${i+1}`)
          .then(response => response.json()))
      }
      return episodes.info.pages
    })
    .catch(err => console.log(err))

  let results=[]
  results = await Promise.all(fnArray)

  let allEpisodes = []
  results.map(epObj => allEpisodes.push(...epObj.results))

  return allEpisodes
}

export async function getAllCharacters(){
  let fnArray = []
  await fetch(`${API_URL}/character`)
    .then(response => response.json())
    .then(episodes => {
      for(let i=0; i < episodes.info.pages; i++){
        fnArray.push(fetch(`${API_URL}/character?page=${i+1}`)
          .then(response => response.json()))
      }
      return episodes.info.pages
    })
    .catch(err => console.log(err))

  let results=[]
  results = await Promise.all(fnArray)

  let allCharacters = []
  results.map(epObj => allCharacters.push(...epObj.results))

  return allCharacters
}

export async function getCharactersByEpId(epId){
  let allChars = await getAllCharacters()
  let allEpisodes = await getAllEpisodes()
  let selectedCharsUrls = allEpisodes.filter(episode => episode.id === epId)[0].characters
  
  return allChars.filter(character => selectedCharsUrls.includes(character.url))
}

export async function getEpisodes(param = ''){
  if(param === '')
    return getAllEpisodes()
  const episodes = await fetch(`${API_URL}/episode?${param}`).then(response => response.json())
  
  return episodes.results
}

export async function getEpisodeById(id){
  return await fetch(`${API_URL}/episode/${id}`).then(response => response.json())
}
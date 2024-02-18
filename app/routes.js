import helloController from './controller/hello.js';
import episodesController from './controller/episodes.js'
import charactersController from './controller/characters.js'

export const hello = {
    hash: '#hello',
    init: helloController
};

export const episodes = {
    hash: '#episodes',
    init: episodesController
}

export const characters = {
    hash: '#characters',
    init: charactersController
}
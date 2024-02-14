import helloController from './controller/hello.js';
import episodesController from './controller/episodes.js'

export const hello = {
    hash: '#hello',
    init: helloController
};

export const episodes = {
    hash: '#episodes',
    init: episodesController
}
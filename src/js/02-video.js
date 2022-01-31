import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
    
    const onPlay = function(data) {
        const currentTimePlayer = data.seconds;
        localStorage.setItem(STORAGE_KEY, currentTimePlayer);
        console.log('currentTimePlayer', currentTimePlayer);
    };
    player.on('timeupdate', throttle(onPlay, 1000));
    const localStorageData = localStorage.getItem(STORAGE_KEY);
    player.setCurrentTime(JSON.parse(localStorageData));
    console.log('localStorageData', localStorageData);
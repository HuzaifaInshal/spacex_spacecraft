import { proxy } from 'valtio';

const appState = proxy({
    show3d:false,
});

export default appState;

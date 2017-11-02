const Compiled = require('./build/Release/node_keybd_event.node');

const VK_MEDIA_NEXT_TRACK = 0xB0;

Compiled.keybd_event(VK_MEDIA_NEXT_TRACK, 0, 0, 0);
var playlist = {
  shakira: "Underneath your cloths"
};

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle
}

funtion removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

return playlist
}

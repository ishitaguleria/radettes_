import song_list from "./songs.json" assert { type : "json" };

for (let key in song_list) console.log(song_list[key].name);

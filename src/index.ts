import { createGameLobbyServer } from "@icbmike/game-lobby-backend";
import { Top10LobbyData, Top10PlayerData } from "./models";

const server = createGameLobbyServer<Top10LobbyData, Top10PlayerData>({});

server.start();
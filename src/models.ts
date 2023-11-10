import { LobbyAdditionalData, PlayerAdditionalData } from "@icbmike/game-lobby-backend/dist/models/Lobby";

export interface Top10LobbyData extends LobbyAdditionalData {
  subject: string;
}

export interface Top10PlayerData extends PlayerAdditionalData {
  number: number;
}
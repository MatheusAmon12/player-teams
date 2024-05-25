import AsyncStorage from "@react-native-async-storage/async-storage";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export async function playerRemoveByGroup(playerName: string, group: string) {
    try {
        const storedPlayers = await playersGetByGroup(group);

        const filteredPlayers = storedPlayers.filter(player => player.name !== playerName);

        await AsyncStorage.setItem(
            `${PLAYER_COLLECTION}-${group}`,
            JSON.stringify(filteredPlayers)
        );
    } catch (error) {    
        throw error;
    }
}
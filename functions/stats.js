export async function onRequestGet() {

    const PLACE_ID = 120638632374687;

    try{

        // PLACE -> UNIVERSE

        const universeReq = await fetch(
            `https://apis.roblox.com/universes/v1/places/${PLACE_ID}/universe`
        );

        const universeData = await universeReq.json();

        const universeId = universeData.universeId;

        // GAME STATS

        const gameReq = await fetch(
            `https://games.roblox.com/v1/games?universeIds=${universeId}`
        );

        const gameData = await gameReq.json();

        return Response.json(gameData.data[0]);

    }
    catch(err){

        return Response.json({
            error:"Failed"
        }, {
            status:500
        });

    }

}
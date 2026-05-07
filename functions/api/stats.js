export async function onRequest() {

  const PLACE_ID = 120638632374687;

  try {

    // 1. Universe olish
    const universeRes = await fetch(
      `https://apis.roblox.com/universes/v1/places/${PLACE_ID}/universe`
    );

    const universeData = await universeRes.json();

    const universeId = universeData.universeId;

    if (!universeId) {
      return Response.json({ error: "No universeId" }, { status: 500 });
    }

    // 2. Game data
    const gameRes = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${universeId}`
    );

    const gameData = await gameRes.json();

    const game = gameData?.data?.[0];

    if (!game) {
      return Response.json({ error: "No game data" }, { status: 500 });
    }

    return Response.json({
      online: game.playing || 0,
      visits: game.visits || 0,
      favorites: game.favoritedCount || 0,
      likes: Math.round(
        (game.upVotes / (game.upVotes + game.downVotes || 1)) * 100
      )
    });

  } catch (err) {

    return Response.json({
      error: "FAILED",
      message: err.message
    }, { status: 500 });

  }

}

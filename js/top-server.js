function getServerPlayersRanking(serverToken, type = "current") {
  const url = `https://api.top-serveurs.net/v1/servers/${serverToken}/players-ranking?type=${type}`;

  return fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error fetching server players ranking");
      }
    })
    .then((data) => {
      return data.players;
    })
    .catch((error) => {
      throw new Error(`Error fetching server players ranking: ${error.message}`);
    });
}

// Usage of the function
const serverToken = "NIDY2Oebejo4tIR6wRHKrnHv7nH8ZJwS7GPfpAxj";

getServerPlayersRanking(serverToken)
  .then((players) => {
    console.log(players);
    // Do something with the player ranking data
  })
  .catch((error) => {
    console.error(error);
  });

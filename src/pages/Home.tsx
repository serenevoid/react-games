const Home = () => {

    const games_list = [
        {
            id: 1,
            name: "Tenzies",
            url: "/react-games/tenzies"
        },
        {
            id: 2,
            name: "Sliding Numbers",
            url: "/react-games/sliding-numbers"
        }
    ];

    return (
        <div className="container">
            <h1>
                React Games
            </h1>
            <div className="container games_list">
            {games_list.map(game => (
                <a href={game.url} className="container games_list_element" key={game.id}>{game.name}</a>
            ))}
            </div>
        </div>
    )

}

export default Home;

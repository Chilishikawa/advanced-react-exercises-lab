const DessertsList = props => {

    const postresBajasCalorias = props.data
        .filter(postre =>
            postre.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map(postre => {
            const item = `${postre.name} - ${postre.calories} cal`
            return <li>{item}</li>
        });

    return (
        <ul>
            {postresBajasCalorias}
        </ul>
    );
}

export default DessertsList;
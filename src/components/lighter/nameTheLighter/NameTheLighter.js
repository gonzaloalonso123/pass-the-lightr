function NameTheLighter({ id, nickname, setLighterName }) {
  const handleInput = (event) => {
    setLighterName(event.target.value);
  };

  return (
    <div className="lighterPageSection">
      {nickname === "" ? (
        <>
          <h1>
            Hey! Congrats, you are the first owner of this lighter. Please, give
            it a name
          </h1>
          <div className="who-are-you-input-container">
            <input className="input" onChange={handleInput} />
          </div>
        </>
      ) : (
        <h1>Hey! My name is {nickname}</h1>
      )}
    </div>
  );
}

export default NameTheLighter;

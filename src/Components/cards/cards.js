import React, { useState } from "react";
import { connect } from "react-redux";
import { selectGitChapter } from "../../Logic/actions/sample-actions";

const Cards = props => {
  const { cards } = props;

  const [card, setCardData] = useState("");

  const handleCardClick = e => {
    // console.log(e.currentTarget.dataset.card) //see https://javascript.info/bubbling-and-capturing
    let chapter = e.currentTarget.dataset.card;

    props.selectGitChapter(chapter);
  };

  console.log(props);

  return (
    <section id={"card-topics"}>
      <div className={"container one"}>
        {cards.map((card, idx) => {
          console.log(card.img, "card");

          return (
            <div
              className={"card"}
              key={"card-" + idx}
              data-card={"card-" + idx}
              onClick={e => handleCardClick(e)}
            >
              <div className={"context"}>
                <img src={card.img} alt="" />
                <h6>{card.name}</h6>
                <p>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  let { cards, returnChapter } = state.cardsReducer;

  return {
    cards: cards,
    returnChapter: returnChapter
  };
};

const mapDispatchToProps = {
  selectGitChapter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

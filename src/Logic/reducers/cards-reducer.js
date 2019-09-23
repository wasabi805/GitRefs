const initialState = {
  cards: [
    {
      name: "basics",
      img: `../../../public/images/undraw_new_ideas_jdea.png`,
      text:
        "hakjfkj hfajhk;afhj; aejehej fhjke ;jjadjkfsah jkhjadj hkdjhj hdahj kkhjdf"
    },
    {
      name: "Advanced : Code with others",
      img: "../../../public/images/undraw_people_tax5.png",
      text:
        "hakjfkj hfajhk;afhj; aejehej fhjke ;jjadjkfsah jkhjadj hkdjhj hdahj kkhjdf"
    },
    {
      name: "OnGitHubBro",
      img: "../../../public/images/undraw_detailed_analysis_xn7y.png",
      text:
        "hakjfkj hfajhk;afhj; aejehej fhjke ;jjadjkfsah jkhjadj hkdjhj hdahj kkhjdf"
    }
  ],

  chapter_01: [
    { name: "Basic Terms" },
    { name: "View Commit History with Git Log " },
    { name: "Express Commit " }
  ],
  chapter_02: [{ name: "this" }, { name: "is the " }, { name: "second" }],

  returnChapter: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SELECT_GIT_CHAPTER":
      let returnChapter = "";

      const { chapter } = payload;
      const num = chapter.substr(5);

      if (num == 0) {
        returnChapter = state.chapter_01;
      }

      if (num == 1) {
        returnChapter = state.chapter_02;
      }

      return {
        ...state,
        returnChapter: returnChapter
      };
    default:
      return state;
  }
}

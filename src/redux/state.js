import { reRenderEntireTree } from "../render";
var random_name = require("node-random-name");
const logoUrl =
  "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png";
const logoUrldima =
  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png";

let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        logo: logoUrl,
        name: "Lucy G",
        message: "i'm fine, what bout u?",
        likeCount: 13,
        dislikeCount: 10,
      },
      {
        id: 2,
        logo: logoUrldima,
        name: "Eric H",
        message: "Hi all, how are u?",
        likeCount: 4,
        dislikeCount: 80,
      },
      {
        id: 3,
        logo: logoUrl,
        name: "Ina T",
        message: "No worries about my health",
        likeCount: 29,
        dislikeCount: 68,
      },
    ],
    newPostText: "ввыф",
  },
  dialogsPage: {
    message: [
      { id: 1, message: "Hi hwo are u?" },
      { id: 2, message: "i'm fine, what bout u?" },
      { id: 3, message: "Hi ll, how are u?" },
      { id: 4, message: "what''s app" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Hey" },
    ],
    dialogsData: [
      { id: 1, name: "Beulah", logo: logoUrl },
      { id: 2, name: "Carlos", logo: logoUrldima },
      { id: 3, name: "Katharine", logo: logoUrl },
      { id: 4, name: "Sean", logo: logoUrldima },
      { id: 5, name: "Sarah", logo: logoUrl },
      { id: 6, name: "Florence", logo: logoUrldima },
    ],
  },
  sideBar: {
    friends: [
      { id: 1, logo: logoUrl, name: "Gregory" },
      { id: 2, logo: logoUrldima, name: "Ruby" },
      { id: 3, logo: logoUrl, name: "Millie" },
    ],
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: state.profilePage.postData.length + 1,
    logo: logoUrl,
    name: random_name({ first: true }) + " " + random_name({ last: true })[0],
    message: state.profilePage.newPostText,
    likeCount: 0,
    dislikeCount: 0,
  };
  state.profilePage.postData.push(newPost);
  reRenderEntireTree();
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reRenderEntireTree();
};

export default state;

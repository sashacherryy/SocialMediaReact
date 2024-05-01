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
              name: "Olexandr V",
              message: "i'm fine, what bout u?",
              likeCount: 1,
              dislikeCount: 0,
            },
            {
              id: 2,
              logo: logoUrldima,
              name: "Dima K",
              message: "Hi all, how are u?",
              likeCount: 1,
              dislikeCount: 2,
            },
            {
              id: 3,
              logo: logoUrl,
              name: "Verastouy K",
              message: "No worries about my health",
              likeCount: 3,
              dislikeCount: 1,
            },
          ],
    },
    dialogsPage : {
        message: [
            { id: 1, message: "Hi hwo are u?" },
            { id: 2, message: "i'm fine, what bout u?" },
            { id: 3, message: "Hi ll, how are u?" },
            { id: 4, message: "what''s app" },
            { id: 5, message: "Yo" },
            { id: 6, message: "Hey" },
          ],
          dialogsData: [
            { id: 1, name: "Sasha" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Kostya" },
            { id: 4, name: "Varfs" },
            { id: 5, name: "Vlad" },
            { id: 6, name: "Getic" },
          ],
    }
};

export default state;

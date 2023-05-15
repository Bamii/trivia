import { rest } from "msw";
import { setupServer } from 'msw/node'

export const server = setupServer(...[
  rest.get("https://opentdb.com/api.php", (res, req, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        response_code: 0,
        results: [
          {
            category: "Entertainment: Video Games",
            type: "boolean",
            difficulty: "hard",
            question:
              "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Entertainment: Video Games",
            type: "boolean",
            difficulty: "hard",
            question:
              "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "History",
            type: "boolean",
            difficulty: "hard",
            question:
              "The Battle of Trafalgar took place on October 23rd, 1805",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Entertainment: Video Games",
            type: "boolean",
            difficulty: "hard",
            question:
              "All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Celebrities",
            type: "boolean",
            difficulty: "hard",
            question:
              "Lady Gaga&#039;s real name is Stefani Joanne Angelina Germanotta.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Politics",
            type: "boolean",
            difficulty: "hard",
            question:
              "George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.",
            correct_answer: "False",
            incorrect_answers: ["True"],
          },
          {
            category: "Entertainment: Japanese Anime & Manga",
            type: "boolean",
            difficulty: "hard",
            question:
              "In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Entertainment: Music",
            type: "boolean",
            difficulty: "hard",
            question:
              "The singer Billie Holiday was also known as &quot;Lady Day&quot;.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Entertainment: Film",
            type: "boolean",
            difficulty: "hard",
            question:
              "YouTube personality Jenna Marbles served as an executive producer of the film Maximum Ride (2016).",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Entertainment: Video Games",
            type: "boolean",
            difficulty: "hard",
            question:
              "In The Witcher 3, the Zoltan Chivay Gwent card can be found under the Hanged Man&#039;s Tree.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
        ],
      })
    );
  }),
]);

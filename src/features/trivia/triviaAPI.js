import { wrappedFetch as fetch, HTMLDecoder } from "../../utils";
const { REACT_APP_API_URL } = process.env;
const decode = HTMLDecoder()

export function fetchTrivia() {
  return new Promise(async (resolve, reject) =>{
    try {
      const { results } = await fetch(REACT_APP_API_URL)
      
      const modified_list = results
        .map(({ type, incorrect_answers, correct_answer, question, ...rest }) => ({
            ...rest,
            incorrect_answers,
            correct_answer,
            question: decode(question),
            possible_answers: [correct_answer, ...incorrect_answers].sort()
          }))

      resolve(modified_list)
    } catch (error) {
      reject(error.message)
    }
  });
}

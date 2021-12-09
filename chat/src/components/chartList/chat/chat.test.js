import { renderWithRedux } from "../../../utils/renderWithRedux";
import { Chat } from "./chat";

let state = null;

beforeEach(() => {
  state = {
    messages: {
      messages: {
        chat1: [{ author: "user", message: "test" }],
      },
    },
  };
});

describe("chat component", () => {
  it("should render Chat with chat1 title", () => {
    const { container } = renderWithRedux(<Chat title="chat1" />, state);

    const nodes = [...container.querySelectorAll(".itemChat")];

    expect(nodes[0]).toHaveTextContent("chat1");
  });

});

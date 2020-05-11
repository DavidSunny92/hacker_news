import { TimePipe } from "./components/pagenation/time.pipe";

describe("TimePipe", () => {
  it("create an instance", () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });
});

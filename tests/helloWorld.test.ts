import { printHelloWorld } from "../assets/ts/app";

// Test the printHelloWorld function
describe("printHelloWorld", () => {
  it('should log "Hello, Node.js!" to the console', () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    // Call the function
    printHelloWorld();

    // Check if console.log was called with "Hello, Node.js!"
    expect(consoleSpy).toHaveBeenCalledWith("Hello, Node.js!");

    // Clean up the spy
    consoleSpy.mockRestore();
  });
});

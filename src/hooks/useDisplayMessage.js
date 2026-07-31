function useDisplayMessage() {
  function displayMessage() {
    console.log("hello I'm from own hook function");
  }
  return [displayMessage];
}

export default useDisplayMessage;

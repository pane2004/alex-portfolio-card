export function CowsayConstruction({text} : {text: string}) {
  return (
    <pre className="text-teal-500">
      { " ______________________" + "\n" +
        `< ${text} >` + "\n" +
        " --------------------" + "\n" +
        "        \\   ^__^" + "\n" +
        "         \\  (oo)\\_______" + "\n" +
        "            (__)\\       )\\/\\ " + "\n" +
        "                ||----w |" + "\n" +
        "                ||     ||" }
    </pre>
  );
}

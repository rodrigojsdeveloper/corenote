import { NoteContextProvider } from "./note.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return <NoteContextProvider>{children}</NoteContextProvider>;
};

export default Providers;

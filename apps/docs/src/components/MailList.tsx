import { useSelector } from "react-redux";
import { emailSelector } from "../store/store";
import { useShaDOM } from "./ShadowDOM";

export default function MailList() {
  const shadowRoot = useShaDOM();
  const emails = useSelector(emailSelector);
  console.log(emails);
  return <></>;
}

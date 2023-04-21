import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function initIcons() {
  return library.add(faEnvelope, faLock);
}

export default initIcons;

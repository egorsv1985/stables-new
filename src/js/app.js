import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
flsFunctions.bodyLockStatus();
flsFunctions.bodyLockToggle();
flsFunctions.bodyUnlock();
flsFunctions.bodyLock();
flsFunctions.menuInit();
flsFunctions.menuOpen();
flsFunctions.menuClose();




// core version + navigation, pagination modules:
import Swiper, {
	Navigation,
	Pagination
} from 'swiper';

// init Swiper:
const swiper = new Swiper();
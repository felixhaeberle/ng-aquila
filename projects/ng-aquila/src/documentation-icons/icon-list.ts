// @ts-nocheck
// the SVG imports doesn't support are not typed, so we have to ts-nocheck the imports
import emailIcon from '@carbon/icons/es/email/24';
import notificationIcon from '@carbon/icons/es/notification/24';
import bookmarkIcon from '@carbon/icons/es/bookmark/24';
import downloadIcon from '@carbon/icons/es/download/24';
import copyIcon from '@carbon/icons/es/copy/24';
import logoFacebookIcon from '@carbon/icons/es/logo--facebook/24';
import documentBlankIcon from '@carbon/icons/es/document--blank/24';
import documentIcon from '@carbon/icons/es/document/24';
import informationIcon from '@carbon/icons/es/information/24';
import launchIcon from '@carbon/icons/es/launch/24';
import lockedIcon from '@carbon/icons/es/locked/24';
import documentPdfIcon from '@carbon/icons/es/document--pdf/24';
import penIcon from '@carbon/icons/es/pen/24';
import maximizeIcon from '@carbon/icons/es/maximize/24';
import redoIcon from '@carbon/icons/es/redo/24';
import phoneIcon from '@carbon/icons/es/phone/24';
import carIcon from '@carbon/icons/es/car/24';
import airlinePassengerCareIcon from '@carbon/icons/es/airline--passenger-care/24';
import planeIcon from '@carbon/icons/es/plane/24';
import searchIcon from '@carbon/icons/es/search/24';
import saveIcon from '@carbon/icons/es/save/24';
import settingsIcon from '@carbon/icons/es/settings/24';
import chatIcon from '@carbon/icons/es/chat/24';
import logoTwitterIcon from '@carbon/icons/es/logo--twitter/24';
import userIcon from '@carbon/icons/es/user/24';
import heartIcon from '@carbon/icons/es/favorite/24.js'
import barsIcon from '@carbon/icons/es/menu/32.js'
import switchSitesIcon from '@carbon/icons/es/switcher/24.js'

export interface SvgIcon {
    svg: string;
  }

export const ICON_MAPPINGS: { [key: string]: SvgIcon } = {
'bars': { svg: barsIcon },
'switch-sites': { svg: switchSitesIcon },
'bell-o': { svg: notificationIcon },
'bookmark-o': { svg: bookmarkIcon },
'download': { svg: downloadIcon },
'duplicate': { svg: copyIcon },
'facebook': { svg: logoFacebookIcon },
'file': { svg: documentBlankIcon },
'file-text': { svg: documentIcon },
'info-circle-o': { svg: informationIcon },
'launch': { svg: launchIcon },
'lock-o': { svg: lockedIcon },
'mail': { svg: emailIcon },
'mail-o': { svg: emailIcon },
'pdf': { svg: documentPdfIcon },
'pen': { svg: penIcon },
'popout': { svg: maximizeIcon },
'refresh': { svg: redoIcon },
'phone-o': { svg: phoneIcon },
'product-car': { svg: carIcon },
'product-care-insurance': { svg: airlinePassengerCareIcon },
'product-heart': { svg: heartIcon },
'product-plane': { svg: planeIcon },
'product-search': { svg: searchIcon },
'save-o': { svg: saveIcon },
'search': { svg: searchIcon },
'setting': { svg: settingsIcon },
'speech-bubble-o': { svg: chatIcon },
'twitter': { svg: logoTwitterIcon },
'user-o': { svg: userIcon},
// the users icon in font awesome is not quadratic as a workaround
// we just reuse the single user here
'users': { svg: userIcon }
};



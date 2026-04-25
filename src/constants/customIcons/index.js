import { library, dom } from '@fortawesome/fontawesome-svg-core';

import {
  faReactIcon,
  faRailIcon,
  faGatsbyIcon,
  faIosIcon,
  faCSSIcon,
  faHTMLIcon,
  faSEOIcon,
  faUIUXIcon,
  faContentCreatorIcon,
  faManagementIcon,
  faFigmaIcon,
  faProjectManagementIcon,
  faNextJsIcon
} from './icons';

// add new icons to lib
library.add(
  faReactIcon,
  faRailIcon,
  faGatsbyIcon,
  faIosIcon,
  faCSSIcon,
  faHTMLIcon,
  faSEOIcon,
  faUIUXIcon,
  faContentCreatorIcon,
  faManagementIcon,
  faFigmaIcon,
  faProjectManagementIcon,
  faNextJsIcon
);

// Look for changes of icons
dom.watch();

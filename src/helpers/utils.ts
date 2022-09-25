import {
  CommandLineIcon,
  GlobeAltIcon,
  LinkIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import {
  AndroidIcon,
  AppleIcon,
  BitcoinIcon,
  ChromeIcon,
  EthereumIcon,
  HarmonyIcon,
  LinuxIcon,
  WindowsIcon,
} from '../components/common/icons';
import { APP_TYPE } from './constants';

export const getAppTypeIcon = (type: string): any => {
  switch (type) {
    case APP_TYPE.ANDROID: {
      return AndroidIcon;
    }
    case APP_TYPE.ADMIN_CONSOLE: {
      return CommandLineIcon;
    }
    case APP_TYPE.API:
    case APP_TYPE.EXTENSION:
    case APP_TYPE.INTEGRATION:
    case APP_TYPE.LIBRARY:
    case APP_TYPE.SDK:
    case APP_TYPE.SERVICE: {
      return PuzzlePieceIcon;
    }
    case APP_TYPE.BITCOIN: {
      return BitcoinIcon;
    }
    case APP_TYPE.CHROME: {
      return ChromeIcon;
    }
    case APP_TYPE.ETHEREUM: {
      return EthereumIcon;
    }
    case APP_TYPE.HARMONY: {
      return HarmonyIcon;
    }
    case APP_TYPE.IOS:
    case APP_TYPE.MACOS: {
      return AppleIcon;
    }
    case APP_TYPE.LINUX: {
      return LinuxIcon;
    }
    case APP_TYPE.WINDOWS: {
      return WindowsIcon;
    }
    case APP_TYPE.WEBSITE:
    case APP_TYPE.WEB: {
      return GlobeAltIcon;
    }
    default: {
      return LinkIcon;
    }
  }
};

export const destructureListableValue = (value: any): Array<any> =>
  Array.isArray(value) ? value : [value];

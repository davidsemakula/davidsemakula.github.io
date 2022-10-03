import {
  CommandLineIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import {
  AlgorandIcon,
  AndroidIcon,
  AppleIcon,
  BinanceIcon,
  BitcoinIcon,
  ChromeIcon,
  EthereumIcon,
  FlowIcon,
  HarmonyIcon,
  LinuxIcon,
  NearIcon,
  WindowsIcon,
} from '../components/common/icons';
import { APP_TYPE } from './constants';

export const getAppTypeIcon = (type: string): any => {
  switch (type) {
    case APP_TYPE.ALGORAND: {
      return AlgorandIcon;
    }
    case APP_TYPE.ADMIN_CONSOLE: {
      return CommandLineIcon;
    }
    case APP_TYPE.ANDROID: {
      return AndroidIcon;
    }
    case APP_TYPE.BINANCE: {
      return BinanceIcon;
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
    case APP_TYPE.FLOW: {
      return FlowIcon;
    }
    case APP_TYPE.HARMONY: {
      return HarmonyIcon;
    }
    case APP_TYPE.IOS:
    case APP_TYPE.MACOS: {
      return AppleIcon;
    }
    case APP_TYPE.NEAR: {
      return NearIcon;
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
      return PuzzlePieceIcon;
    }
  }
};

export const destructureListableValue = (value: any): Array<any> =>
  Array.isArray(value) ? value : [value];

export const isNonEmptyArray = value =>
  value && Array.isArray(value) && value.length;

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
  GnosisSafeIcon,
  HarmonyIcon,
  LinuxIcon,
  NearIcon,
  WindowsIcon,
} from '../components/common/icons';
import { APP_TYPE } from './constants';
import {
  DetailedAwardInput,
  DetailedCompanyInput,
  DetailedIconInput,
  DetailedPlatformInput,
  DetailedTagInput,
  GeneralAwardInput,
  GeneralCompanyInput,
  GeneralIconInput,
  GeneralPlatformInput,
  GeneralTagInput,
  SimpleIconInput,
} from './types';

export const cleanAwardObject = (
  value: GeneralAwardInput | any
): DetailedAwardInput => {
  if (typeof value === 'string') {
    return {
      name: value,
    };
  }
  return value;
};

export const cleanCompanyObject = (
  value: GeneralCompanyInput
): DetailedCompanyInput => {
  if (typeof value === 'string') {
    return {
      name: value,
    };
  }
  return value;
};

export const cleanIconObject = (
  value: GeneralIconInput | any
): DetailedIconInput => {
  if (value && !value.icon) {
    return {
      icon: value,
    };
  }
  return value;
};

export const cleanPlatformObject = (
  value: GeneralPlatformInput
): DetailedPlatformInput => {
  if (typeof value === 'string') {
    return {
      type: value,
    };
  }
  return value;
};

export const cleanTagObject = (value: GeneralTagInput): DetailedTagInput => {
  if (typeof value === 'string') {
    return {
      name: value,
    };
  }
  return value;
};

export const getAppTypeIcon = (type: APP_TYPE): SimpleIconInput => {
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
    case APP_TYPE.GNOSIS_SAFE_APP: {
      return GnosisSafeIcon;
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

export const isNonEmptyArray = (value: any): number =>
  value && Array.isArray(value) && value.length;

export const overrideIconClassName = (
  value: GeneralIconInput | any,
  className: string
): DetailedIconInput => {
  if (value.icon) {
    return {
      ...value,
      className,
    };
  }
  return {
    icon: value,
    className,
  };
};

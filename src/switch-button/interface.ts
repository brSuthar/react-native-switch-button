export interface ISwitchButton {
  status: boolean;
  onSwitch: (val: any) => void;
  disable?: boolean;
  onThumbColor?: string;
  offThumbColor?: string;
  disableThumbColor?: string;
  onBgColor?: string;
  offBgColor?: string;
  disableBgColor?: string;
}

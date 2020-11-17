import color from 'color'

import { Platform, Dimensions, PixelRatio } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX =
  platform === 'ios' && (deviceHeight === 812 || deviceWidth === 812)

const toolbarBtnTextColor = '#fff'
const brandPrimary = 'rgba(29,29,27,1)'
const brandSecondary = 'rgba(249,178,51,1)'
const brandThird = 'rgba(195,80,46,1)'
const lightTransparent = 'rgba(255,255,255, 0.3)'
const lightTransparentDeep = 'rgba(255,255,255,0.03)'

export default {
  platformStyle,
  platform,

  //Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  //Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: 'System',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary
  },
  get btnPrimaryColor() {
    return this.inverseTextColor
  },
  get btnInfoBg() {
    return this.brandInfo
  },
  get btnInfoColor() {
    return this.inverseTextColor
  },
  get btnSuccessBg() {
    return this.brandSuccess
  },
  get btnSuccessColor() {
    return this.inverseTextColor
  },
  get btnDangerBg() {
    return this.brandDanger
  },
  get btnDangerColor() {
    return this.inverseTextColor
  },
  get btnWarningBg() {
    return this.brandWarning
  },
  get btnWarningColor() {
    return this.inverseTextColor
  },
  get btnTextSize() {
    return platform === 'ios' ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6
  },

  // Card
  cardDefaultBg: 'rgba(247,247,247,1)', //'#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === 'ios' ? 0 : 0, // before ios 13
  CheckboxBorderWidth: 2, // before ios 1
  CheckboxPaddingLeft: 2, // before ios 4
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  CheckboxIconSize: platform === 'ios' ? 18 : 16, // before ios 21
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  CheckboxFontSize: platform === 'ios' ? 21 : 17, // before ios 23/0.9
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Color
  brandPrimary,
  brandSecondary,
  brandInfo: brandPrimary, //"#3F57D3",
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandThird,
  brandLight: '#f4f4f4',
  lightTransparent,
  lightTransparentDeep,

  //Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // Font
  DefaultFontSize: 16,
  fontFamily: platform === 'ios' ? 'System' : 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: 'rgba(202,41,42,1)', //platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: '#fff',
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: '#fff', //platform === 'ios' ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff', //platform === 'ios' ? '#2874F0' : '#fff',
  tabActiveBgColor: 'rgba(189,32,33,1)', //platform === 'ios' ? '#cde1f9' : '#3F51B5',

  // Header
  toolbarBtnColor: '#fff', //platform === 'ios' ? '#007aff' : '#fff',
  toolbarDefaultBg: 'rgba(202,41,42,1)', //platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: platform === 'ios' ? 64 : 56,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: '#fff', //platform === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 30 : 50,
  toolbarBtnTextColor, //platform === 'ios' ? '#007aff' : '#fff',
  iosStatusbar: 'light-content', //'dark-content',
  toolbarDefaultBorder: 'rgba(202,41,42,1)', //platform === 'ios' ? '#a7a6ab' : '#3F51B5',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex()
  },
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex()
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor
  },
  get inputColorPlaceholder() {
    return '#575757'
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === 'ios' ? 20 : 24,

  // List
  listBg: '#FFF', //'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 12, //platform === 'ios' ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: brandPrimary,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: '#5067FF', //'#3F51B5'
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,
  get radioColor() {
    return this.brandPrimary
  },

  // Segment
  segmentBackgroundColor: 'rgba(202,41,42,1)', //platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: '#fff', //platform === 'ios' ? '#007aff' : '#fff',
  segmentTextColor: '#fff', //platform === 'ios' ? '#007aff' : '#fff',
  segmentActiveTextColor: 'rgba(202,41,42,1)', //platform === 'ios' ? '#fff' : '#3F51B5',
  segmentBorderColor: '#fff', //platform === 'ios' ? '#007aff' : '#fff',
  segmentBorderColorMain: '#3F51B5', //platform === 'ios' ? '#a7a6ab' : '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: '#3F51B5', //platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: '#b3c7f9', //platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: '#fff', //platform === 'ios' ? '#007aff' : '#fff',
  topTabBarBorderColor: '#fff', //platform === 'ios' ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: '#fff', //platform === 'ios' ? '#007aff' : '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: 'rgba(34,34,34,1)', //'#000'
  inverseTextColor: '#fff',
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor
  },

  // Title
  titleFontfamily: 'System', //platform === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 11 : 14,
  subtitleColor: '#FFF', //platform === 'ios' ? '#000' : '#fff',
  titleFontColor: '#FFF', //platform === 'ios' ? '#000' : '#fff',

  // Other
  borderRadiusBase: platform === 'ios' ? 3 : 2, //platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  //iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
}

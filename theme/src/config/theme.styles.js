import { createMuiTheme } from '@material-ui/core/styles';



const colours = {

  // UI
  colourBlack:                            '#000',
  colourGrey_CodGrey_dark:                '#0d0d0d',
  colourGrey_CodGrey_light:               '#191919',
  colourGrey_MineShaft_dark:              '#262626',
  colourGrey_MineShaft_light:             '#333',
  colourGrey_Tundora_dark:                '#404040',
  colourGrey_Tundora_light:               '#4c4c4c',
  colourGrey_Scorpion:                    '#595959',
  colourGrey_DoveGrey_dark:               '#666',
  colourGrey_DoveGrey_light:              '#737373',
  colourGrey_Grey_dark:                   '#7f7f7f',
  colourGrey_Grey_light:                  '#8c8c8c',
  colourGrey_DustyGrey:                   '#999',
  colourGrey_SilverChalice_dark:          '#a6a6a6',
  colourGrey_SilverChalice_light:         '#b2b2b2',
  colourGrey_Silver_dark:                 '#bfbfbf',
  colourGrey_Silver_light:                '#ccc',
  colourGrey_Alto:                        '#d9d9d9',
  colourGrey_Mercury:                     '#e5e5e5',
  colourGrey_Concrete:                    '#f2f2f2',
  colourGrey_Alabaster:                   '#f7f7f7',
  colourWhite:                            '#fff',
  colourBlue_DeepCerulean:                '#007aaa',
  colourBlue_BahamaBlue:                  '#069',
  colourBlue_Orient:                      '#00557f',
  colourBrown_Rust:                       '#ae460e',
  colourPurple_Purple:                    '#609',
  colourRed_GuardsmanRed:                 '#c00',
  colourYellow_Dandelion:                 '#fd6',

  // Branding
  colourRed_RedRibbon_jiscVividPink:      '#e50e45',
  colourPink_Razzmatazz_jiscPink:         '#ce0f69',
  colourPurple_Disco_jiscGrape:           '#8d1558',
  colourPurple_HoneyFlower_jiscPurple:    '#6D2077',
  colourBlue_BlueZodiac_jiscNavy:         '#0d224c',
  colourBlue_Lochmara_jiscBlue:           '#007dba',
  colourGreen_Teal_jiscJade:              '#00857d',
  colourGreen_FunGreen_jiscGreen:         '#006938',
  colourOrange_WebOrange_jiscYellow:      '#f8a800',
};



const theme = createMuiTheme({
});



theme.palette = {
  ...theme.palette,
  colourBlue_DeepCerulean: {
    main: colours.colourBlue_DeepCerulean,
    contrastText: theme.palette.common.white,
  },
};



export default theme;



export const jiscMUI_styles = ({ palette }) => ({
  buttonPrimary: {
    backgroundColor: theme.palette.colourBlue_DeepCerulean.main,
    borderRadius: 3, // #TODO @zzcgulm Convert to variable.
    textTransform: 'none',
  },
  buttonSecondary: {
    borderRadius: 3, // #TODO @zzcgulm Convert to variable.
    textTransform: 'none',
  },
  buttonGhost: {
    borderRadius: 3, // #TODO @zzcgulm Convert to variable.
    textTransform: 'none',
  },
});

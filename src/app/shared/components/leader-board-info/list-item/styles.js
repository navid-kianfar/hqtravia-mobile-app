import {StyleSheet, Platform} from 'react-native';
import Fonts from '../../../../../themes/fonts';
import Metrics from '../../../../../themes/metrics';
import Colors from '../../../../../themes/colors';

const styles = StyleSheet.create({
  topPlayerItem: {
    width: '33.33333%',
    padding: Metrics.WIDTH * 0.015,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  topPlayerImgWrapper: {
    width: Metrics.WIDTH * 0.21,
    height: Metrics.WIDTH * 0.21,
  },
  championImgWrapper: {
    width: Metrics.WIDTH * 0.25,
    height: Metrics.WIDTH * 0.25,
  },
  topPlayerImg: {
    width: '100%',
    height: '100%',
    borderRadius: Metrics.WIDTH * 0.105,
  },
  championImg: {
    width: '100%',
    height: '100%',
    borderRadius: Metrics.WIDTH * 0.125,
  },
  topPlayerRank: {
    position: 'absolute',
    top: -Metrics.WIDTH * 0.015,
    left: -Metrics.WIDTH * 0.015,
    width: Metrics.WIDTH * 0.07,
    height: Metrics.WIDTH * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.WIDTH * 0.035,
  },
  topPlayerRankTxt: {
    color: Colors.snow,
  },
  topPlayerName: {
    width: '100%',
    height: Fonts.size.h4 * 2,
    overflow: 'hidden',
    marginVertical: Metrics.marginVertical,
  },
  topPlayerNameTxt: {
    color: Colors.blacktxt,
    lineHeight: Fonts.size.h4,
    fontSize: Fonts.size.h5,
    textAlign: 'center',
  },
  playerScoreWrapper: {
    paddingHorizontal: Metrics.marginHorizontal,
    backgroundColor: Colors.gray,
    height: Metrics.section * 1.2,
    borderRadius: Metrics.section * 0.6,
    justifyContent: 'center',
  },
  playerScore: {
    color: Colors.blacktxt,
  },

  listItem: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.WIDTH * 0.04,
    paddingVertical: Metrics.marginVertical,
    borderTopWidth: 1,
    borderColor: '#0000000b',
    alignItems: 'center',
  },
  playerRank: {
    width: 30,
  },
  playerRankTxt: {
    color: Colors.lighttxt,
    textAlign: 'center',
  },
  playerImgWrapper: {
    width: Metrics.section * 1.6,
    height: Metrics.section * 1.6,
    marginHorizontal: Metrics.marginHorizontal,
    borderRadius: Metrics.section * 0.8,
    overflow: 'hidden',
  },
  playerImg: {
    width: '100%',
    height: '100%',
  },
  playerName: {
    flex: 1,
  },
  playerNameTxt: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.h5,
  },
});

export default styles;

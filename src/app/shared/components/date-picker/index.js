import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Picker from 'react-native-picker';
import i18n from '../../../../services/i18n';
import PersianDateConverter from './persian-date-converter';
import GregorianDateConverter from './gregorian-date-converter';

const PersianDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const GregorianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default class DatePicker extends Component {
  static propTypes = {
    culture: PropTypes.string,
    pickerTitle: PropTypes.string,
    pickerConfirmBtnText: PropTypes.string,
    pickerCancelBtnText: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    min: PropTypes.instanceOf(Date),
    max: PropTypes.instanceOf(Date),
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onSelect: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    disabled: PropTypes.bool,
    birthday: PropTypes.bool,
    requiredAge: PropTypes.number,
    tillToday: PropTypes.bool,
    fromToday: PropTypes.bool,
  };

  Converter: Function;
  daysInMonth: number[];

  constructor(props) {
    super(props);
    this.state = {value: undefined};
    switch (props.culture || i18n.locale) {
      case 'fa':
        this.Converter = PersianDateConverter;
        this.daysInMonth = PersianDaysInMonth;
        break;
      default:
        this.Converter = GregorianDateConverter;
        this.daysInMonth = GregorianDaysInMonth;
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.wrapperStyle}
        activeOpacity={this.props.activeOpacity}
        onPress={() => this.showPicker()}>
        <TextInput
          pointerEvents="none"
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          style={this.props.style}
          editable={false}
          value={this.formatDate()}
        />
      </TouchableOpacity>
    );
  }

  formatDate() {
    if (!this.props.value) {
      return; // this.props.placeholder || i18n.t("PLEASE_CHOOSE");
    }
    const localized = new this.Converter().FromDateTime(this.props.value);
    return `${localized.Year}/${localized.Month.toString().padStart(
      2,
      '0',
    )}/${localized.Day.toString().padStart(2, '0')}`;
  }

  fillColumns() {
    const GAP = 100;
    const now = new Date();
    const time = now.getTime();
    let minDate: Date, maxDate: Date, input: Date;
    input = this.props.value || now;
    if (this.props.min) minDate = this.props.min;
    else if (this.props.fromToday) minDate = new Date(time);
    else {
      minDate = new Date(time);
      minDate.setFullYear(minDate.getFullYear() - GAP);
    }
    if (this.props.max) maxDate = this.props.max;
    else if (this.props.tillToday) maxDate = new Date(time);
    else {
      maxDate = new Date(time);
      maxDate.setFullYear(minDate.getFullYear() + GAP);
    }
    const calendar = new this.Converter();
    const date = calendar.FromDateTime(input.ToUTC());
    const min = calendar.FromDateTime(minDate.ToUTC());
    const max = calendar.FromDateTime(maxDate.ToUTC());
    const result = [];
    for (let year = min.Year; year <= max.Year; year++) {
      const yearObj = {};
      yearObj[year] = [];
      for (let month = 1; month <= 12; month++) {
        const monthObj = {};
        monthObj[month] = [];
        const days = this.daysInMonth[month - 1];
        for (let day = 1; day <= days; day++) {
          monthObj[month].push(day);
        }
        yearObj[year].push(monthObj);
      }
      result.push(yearObj);
    }
    return {
      picker: result,
      value: [date.Year, date.Month, date.Day + ''],
    };
  }

  noop() {}

  showPicker() {
    Keyboard.dismiss();
    if (this.props.onShow) {
      const result = this.props.onShow();
      if (result === false) return;
    }
    const columns = this.fillColumns();
    const that = this;
    Picker.init({
      pickerConfirmBtnText:
        this.props.pickerConfirmBtnText || i18n.t('CONFIRM'),
      pickerCancelBtnText: this.props.pickerCancelBtnText || i18n.t('CANCEL'),
      pickerTitleText: this.props.pickerTitle || i18n.t('PLEASE_CHOOSE'),
      selectedValue: columns.value,
      pickerData: columns.picker,
      onPickerConfirm: data => {
        const date = new that.Converter().ToDateTime({
          Year: +data[0],
          Month: +data[1],
          Day: +data[2],
        });
        console.log(date);
        (that.props.onConfirm || that.noop)(date);
      },
      onPickerSelect: data => {
        const date = new that.Converter().ToDateTime({
          Year: +data[0],
          Month: +data[1],
          Day: +data[2],
        });
        (that.props.onSelect || that.noop)(date);
      },
      onPickerCancel: data => {
        (that.props.onCancel || that.noop)();
      },
    });
    Picker.show();
  }
}

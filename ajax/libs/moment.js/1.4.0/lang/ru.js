(function () {
    var lang = {
            months : "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort : "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays : "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            weekdaysShort : "вск_пнд_втр_срд_чтв_птн_суб".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD-MM-YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            }, 
            calendar : {
                sameDay: '[Сегодня в] LT',
                nextDay: '[Завтра в] LT',
                lastDay: '[Вчера в] LT',
                nextWeek: function () {
                    return this.day() === 1 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
                },
                lastWeek: function () {
                    switch (this.day()) {
                    case 0:
                    case 1:
                    case 3:
                        return '[В прошлый] dddd [в] LT';
                    case 6:
                        return '[В прошлое] dddd [в] LT';
                    default:
                        return '[В прошлую] dddd [в] LT';
                    }
                },
                sameElse: 'L'
            },
            // It needs checking (adding) russian plurals and cases.
            relativeTime : {
                future : "через %s",
                past : "%s назад",
                s : "несколько секунд",
                m : "минут",
                mm : "%d минут",
                h : "часа",
                hh : "%d часов",
                d : "1 день",
                dd : "%d дней",
                M : "месяц",
                MM : "%d месяцев",
                y : "год",
                yy : "%d лет"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ru', lang);
    }
}());

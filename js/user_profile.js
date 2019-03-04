$('.user-range').each(function() {
    var $range_element = $(this),
        $range_input = $('.it-range', $range_element);
    $range_input.slider({});
});


$(document).ready(function() {
    $('.user-calendar').fullCalendar({
        firstDay: 1,
        defaultView: 'month',
        header: {
            left: 'title',
            center: '',
            right: '',
        },
        height: 620,
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'οюнь', 'οюль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
        viewRender: function(view) {
            $('.fc-left').append('<h4 class="block-title">Расписание - ' + view.title + '</h4>');
            $('.fc-left h2').remove();
        },
        events: [{
            title: 'Базовый курс',
            start: '2019-03-05',
            end: '2019-03-07',
            class: 'base-course',
            status: 'record-is-open'
        },
            {
                title: 'Продвинутый курс',
                start: '2019-03-07',
                end: '2019-03-09',
                class: 'advanced-course',
                status: 'record-is-closed'
            }
        ],

        eventAfterRender: function(event, element) {
            element.find('.fc-event-title').remove();
            element.find('.fc-event-time').remove();
            element.find('.fc-content').addClass(event.class).addClass(event.status);

            var input_radio = (event.status == 'record-is-open') ? '<input type="checkbox" name="choice_course" class="form-ich">' : '<input type="checkbox" name="choice_course" class="form-ich" disabled>';

            if (event.status == 'record-is-closed') {
                element.find('.fc-content').attr({
                    'data-toggle': 'tooltip',
                    'data-animation': 'false',
                    'title': 'Вы не можете начать продвинутый курс, пока не пройдете тест по базовому курсу'
                }).addClass('tooltip-disabled');
            }

            var pseudo_ir = '<div class="type-ich pseudo-ich">' +
                '<label>' +
                '<span class="lbl-ich">' + moment(event.start).format("12:00") + '-' + moment(event.end).format("14:00") +
                '</span>' +
                input_radio +
                '<span class="custom-ich"></span>' +
                '</label>' +
                '</div>';

            var description_base =
                '<div class="d-flex align-items-start">' +
                '<form class="w-50">' +
                pseudo_ir +
                pseudo_ir +
                '</form>' +
                '<form class="w-50 pl-2">' +
                pseudo_ir +
                pseudo_ir +
                '</form>' +
                '</div>';

            element.find(".fc-content").append(description_base);
        }
    });

    $('.tooltip-active').tooltip();
    $('.tooltip-disabled').tooltip({
        template: '<div class="tooltip disabled"><div class="tooltip-inner"></div></div>'
    });




    var $menu_parent = $('.main-menu').parent();
    var $menu_open = $('.phone-menu .ic-menu');
    var $menu_close = $('.phone-menu .ic-close');


    $menu_open.click(function() {
        $menu_open.hide();
        $menu_parent.removeClass('d-none');
        $('body').toggleClass('menu-opened');
    });

    $menu_close.click(function() {
        $menu_open.show();
        $menu_parent.addClass('d-none');
        $('body').toggleClass('menu-opened');
    });

});
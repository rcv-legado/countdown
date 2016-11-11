import moment from 'moment';
import $ from 'jQuery';

window.moment = moment;
const houseSenateElection = moment("20181106");
const presidentialElection = moment("20201103");

function fillBox(string, date, div, href) {
    const when = date.format("dddd, MMMM Do YYYY");
    const whenInLocal = date.fromNow();
    const whenInMonths = -moment().diff(date, 'months');
    const whenInDays = -moment().diff(date, 'days');

    $(div).html(`The <span class="what">${string}</span> is on <span class="when">${when}</span>, <span class="when">${whenInLocal}</span>. <div class="days-months">That's <span class="when">${ whenInMonths }</span> months (<span class="when">${whenInDays}</span> days) from today.</div> <a href="${href}" class="link">Link</a>`);
}

$(document).ready(function() {
    fillBox('House and Senate elections',
            houseSenateElection,
            '#hs',
            'https://en.wikipedia.org/wiki/United_States_elections,_2018'
           );
    fillBox('Presidential election',
            presidentialElection,
            '#prez',
            'https://en.wikipedia.org/wiki/United_States_presidential_election,_2020'
           );    
});

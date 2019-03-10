//  with "if ... else" operator.
var day = prompt('Enter day of week', '');

if(
    day == 'Monday' ||
    day == 'Tuesday' ||
    day == 'Wednesday' ||
    day == 'Thursday' ||
     day == 'Friday') {
    alert('Working day');
} else if(day == 'Saturday' || day == 'Sunday') {
    alert('Weekend');
} else {
    alert('Can not define. Please try another value.')
}

// with "switch" operator.

switch(day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        alert('Working day');
        break;

    case 'Saturday':
    case 'Sunday':
        alert('Weekend');
        break;

    default:
        alert('Can not define. Please try another value.');
        break;
}
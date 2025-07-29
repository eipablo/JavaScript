function getWeekDay(weekDay){
    let weekDayText;

    switch (weekDay){
    case 0:
        weekDayText = 'Domingo';
        return weekDayText;
    case 1:
        weekDayText = 'Segunda';
        return weekDayText;
    case 2:
        weekDayText = 'Terça';
        return weekDayText;
    case 3:
        weekDayText = 'Quarta';
        return weekDayText;
    case 4:
        weekDayText = 'Quinta';
        return weekDayText;
    case 5:
        weekDayText = 'Sexta';
        return weekDayText;
    case 6:
        weekDayText = 'Sábado';
        return weekDayText;
    default:
        weekDayText = 'Inválido';
    }
} //* utilize switch / case para formatar o valor do número da semana para uma string que o representa ex: 0 = domingo, 6 = sábado

const date = new Date();
const weekDay = date.getDay();

console.log(`Hoje é ${getWeekDay(weekDay)}`);

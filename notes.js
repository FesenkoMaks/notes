function intervalConstruction(arr) {
    let intervalName = arr[0];
    let startingNote = arr[1];
    let up = arr[2] ? arr[2] : 'asc';
    let interval = ['м2', 'M2', 'м3', 'M3', 'P4', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8']
    let notes;
    if (up === "asc"){notes = ['Cb', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'B#']}
    else {notes = ['Cb', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'B#'].reverse()}
    console.log(notes)
    let clearNotes = notes.filter((arg) => arg.length === 1)
    console.log(clearNotes)
    let indexStartingNote = clearNotes.findIndex((arg) => arg === startingNote[0])
    console.log(indexStartingNote)
    let intervalCount = +intervalName[1]
    console.log(intervalCount)
    let semitoneNumber = interval.findIndex(arg => arg === intervalName) + 1 + (startingNote[1] === 'b' ? + 1 : 0) - (startingNote[1] === '#' ? - 1 : 0)
    console.log(semitoneNumber)
    let searchNoteIndex = indexStartingNote+intervalCount - 1 - (indexStartingNote+ intervalCount > clearNotes.length? clearNotes.length : 0)
    let searchNote = clearNotes[searchNoteIndex]
    let start = notes.findIndex((arg) => arg === startingNote)
    let finish = notes.findIndex((arg) => arg === searchNote)

    console.log(searchNote)
    let three;
    if (finish < start) {
        let one = notes.slice(start, notes.length)
        console.log("one:"+ one)
        let two = notes.slice(0, finish)
        console.log("two:"+ two)
        three = one.concat(two).filter((arg)=> arg.length === 1 || arg === startingNote)
    } else {
        three = notes.slice(start, finish).filter((arg)=> arg.length === 1 || arg === startingNote)
    }
    console.log(three)
    let semitone = {
        'C': 2,
        'D': 2,
        'E': 1,
        'F': 2,
        'G': 2,
        'A': 2,
        'B': 1,
        'Cb': 1,
        'C#': 1,
        'Db': 1,
        'D#': 1,
        'Eb': 1,
        'E#': 1,
        'Fb': 1,
        'F#': 1,
        'Gb': 1,
        'G#': 1,
        'Ab': 1,
        'A#': 1,
        'Bb': 1,
        'B#': 1,

    }
    let semitoneSum = 0

    for (let i = 0; i < three.length; i++){
        for (key in semitone){
            if (key === three[i]){
                semitoneSum += semitone[key]
            }
        }
    }
    console.log(semitoneNumber - semitoneSum)

    switch (semitoneNumber - semitoneSum) {
        case -2: {
            console.log( searchNote+ 'bb');
            break;
        }
        case -1: {
            console.log( searchNote+ 'b');
            break;
        }
        case 0: {
            console.log( searchNote);
            break;
        }
        case 1: {
            console.log( searchNote+ '#');
            break;
        }
        case 2: {
            console.log( searchNote+ '##');
            break;
        }
    }

}
console.log(['M3', 'Cb', 'dsc'])
intervalConstruction( ['M3', 'Cb', 'dsc'])
// ["C", "D", "E", "F", "G", "A", "B"]
// Требования:
//     intervalConstruction
//
// Функция intervalConstruction должна принимать массив строк в качестве входных данных и возвращать строку.
//     Массив содержит три или два элемента.
//     Первый элемент в массиве - это имя интервала, второй - начальная нота, а третий указывает, идет ли интервал по возрастанию или по убыванию.
//     Если в массиве нет третьего элемента, по умолчанию порядок построения возрастает.
//     Функция должна вернуть строку, содержащую название заметки.
//     В строке возврата разрешены только следующие названия заметок:
//     Cbb Cb C C # C ## Dbb Db D D # D ## Ebb Eb E E # E ## Fbb Fb F F # F ## Gbb Gb G G # G ## Abb Ab A A # A ## Bbb Bb B B # B ##
//     Если во входном массиве больше или меньше элементов, должно быть выдано исключение: «Недопустимое количество элементов во входном массиве»
// Соглашение: ['a', 'b'] здесь означает массив строк.
//
//     Примеры ввода и значение:
//     Обратите внимание: данные, которые получит ваша функция, будут выглядеть как массив строк, как определено на вашем языке. Никакого дополнительного разбора не требуется! Форма ['', ''] - это просто соглашение!
//     Допускаются следующие примечания:
//     Cb C C # Db D D # Eb E E # Fb F F # Gb G G # Ab A A # Bb B B #
//     Допускаются следующие интервалы ввода:
//     м2 M2 м3 M3 P4 P5 m6 M6 m7 M7 P8
//
//     ['M3', 'A', 'asc'] - построить восходящий интервал M3, начиная с A
//     ['m7,' Fb ',' dsc '] - построить нисходящий интервал m7, начиная с Fb.
//     ['P5', 'C'] - строить восходящий интервал P5, начиная с C
//     ['P4', 'E #'] - строить восходящий интервал P4, начиная с E #
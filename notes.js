function intervalConstruction(arr) {
    let intervalName = arr[0];
    let startingNote = arr[1];
    let up = arr[2] ? arr[2] : 'asc';
    let interval = ['м2', 'M2', 'м3', 'M3', 'P4', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8']
    let notes = ['C','semitone','semitone','D','semitone','semitone','E','semitone','F','semitone','semitone', 'G', "semitone", "semitone", 'A', "semitone", "semitone", 'B', "semitone", "C"]

    if (arr.length < 2 || arr.length > 3){
        console.log("Illegal number of elements in input array")
    } else {
        let semitoneNumber = interval.findIndex((arg) => arg === intervalName) + 1
        console.log(semitoneNumber)
        let arrayNotes = notes.filter((a) => a.length === 1)
        console.log(arrayNotes)
        let indexStartingNote = arrayNotes.findIndex((arg) => arg === startingNote)
        console.log(indexStartingNote)
        let rr = +intervalName[1]
        console.log(rr)
        let searchNote = arrayNotes.find((arg, i) => i === indexStartingNote + rr - 1)
        console.log(searchNote)
        let aa = notes.findIndex((arg) => arg === startingNote)
        console.log(aa)
        let bb = notes.findIndex((arg) => arg === searchNote)
        console.log(bb)
        switch (aa + semitoneNumber - rr) {
            case -2: console.log(searchNote+"bb")
                break
            case -1: console.log(searchNote+"b")
                break
            case 0: console.log(searchNote)
                break
            case 1: console.log(searchNote+"#")
                break
            case 2: console.log(searchNote+"##")
                break
        }
    }
}

intervalConstruction(['P5', 'D', 'asc'])
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
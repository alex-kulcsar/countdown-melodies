/**
 * https://musescore.com/user/35461455/scores/10951453
 * 
 * Main theme = measures 1 through 16.
 * Timer = measures 17 through 32.
 */
const COUNTDOWN_MML: string[][] = [
    // Measure 0
    [],
    // Measure 1
    [
        "L1 O4 C",
        "L1 O3 G",
        "L1 O3 F",
        "L1 O3 C",
        "L1 O3 D",
        "L1 O2 G",
    ],
    // Measure 2
    [
        "L1 O5 C",
        "L1 O4 G",
        "L1 O4 F",
        "L1 O4 C",
        "L1 O3 G",
        "L1 O3 D",
        "L1 O3 C",
        "L1 O2 G",
    ],
    // Measure 3
    [
        "L8 O4 P.>C. P <B-.A. P",
        "L8 O4 P. G. G  G. A. G",
        "L8 O4 P. E. E  E.-E.-E-",
        "L8 O4 C. C. C  C. C. C",
        "L2 O3 C E-",
        "L2 O2 C E-",
    ],
    // Measure 4
    [
        "L8 O4 P.>C.<P B-.P. P",
        "L8 O4 P. A. G G. A. G",
        "L8 O4 P. F. F E-.E.-E-",
        "L8 O4 C. C. C C. C. C",
        "L2 O4 F < B-4 > F4",
        "L2 O3 F < B-4 > F4",
    ],
    // Measure 5
    [
        "L8 O4 P.>C. P <B-.A. P",
        "L8 O4 P. G. G  G. A. G",
        "L8 O4 P. E. E  E.-E.-E-",
        "L8 O4 C. C. C  C. C. C",
        "L2 O3 C E-",
        "L2 O2 C E-",
    ],
    // Measure 6
    [
        "L16 O4 P8.>C<P P P P B-4 A4",
        "L16 O4 P8. G P G P A F4  F4",
        "L16 O4 P8. E P E P E D4  C4",
        "L16 O4 C8. C P C P C<B-4 A4",
        "L16 O3 C   C P C     E-4 E-4",
        "L16 O2 C   C P C     E-4 E-4",
    ],
    // Measure 7
    [
        "L8 O4 P.>C. P <B-.A. P",
        "L8 O4 P. G. G  G. A. G",
        "L8 O4 P. E. E  E.-E.-E-",
        "L8 O4 C. C. C  C. C. C",
        "L2 O3 C E-",
        "L2 O2 C E-",
    ],
    // Measure 8
    [
        "L8 O4 P.>C.<P B-.P. P",
        "L8 O4 P. A. G G. A. G",
        "L8 O4 P. F. F E-.E.-E-",
        "L8 O4 C. C. C C. C. C",
        "L2 O4 F < B-4 > F4",
        "L2 O3 F < B-4 > F4",
    ],
    // Measure 9
    [
        "L8 O4 P.>C. P <B-.A. P",
        "L8 O4 P. G. G  G. A. G",
        "L8 O4 P. E. E  E.-E.-E-",
        "L8 O4 C. C. C  C. C. C",
        "L2 O3 C E-",
        "L2 O2 C E-",
    ],
    // Measure 10
    [
        "L16 O4 P8.>C<P P P P B-4 A4",
        "L16 O4 P8. G P G P A F4  F4",
        "L16 O4 P8. E P E P E D4  C4",
        "L16 O4 C8. C P C P C<B-4 A4",
        "L16 O3 C   C P C     E-4 E-4",
        "L16 O2 C   C P C     E-4 E-4",
    ],
    // Measure 11
    [
        "L8 O4 P.>C. P <B-.A. P",
        "L8 O4 P. G. G  G. A. G",
        "L8 O4 P. E. E  E.-E.-E-",
        "L8 O4 C. C. C  C. C. C",
        "L2 O3 C E-",
        "L2 O2 C E-",
    ],
    // Measure 12
    [
        "L8 O4 P.>C.<P B-.P. P",
        "L8 O4 P. A. G G. A. G",
        "L8 O4 P. F. F E-.E.-E-",
        "L8 O4 C. C. C C. C. C",
        "L2 O4 F < B-4 > F4",
        "L2 O3 F < B-4 > F4",
    ],
    // Measure 13
    [
        "L2 O4  C             P",
        "L16 O3 C8 C8<G>C P C C8 C8<G>C P C",
        "L16 O2 C8 C8<G>C P C C8 C8<G>C P C",
    ],
    // Measure 14
    [
        "L1 O3 C",
        "L1 O2 G",
        "L1 O2 F",
        "L1 O2 C",
    ],
    // Measure 15
    [
        "L8 O4 P.>C.< P B-.P. P",
        "L8 O4 P. G.  G G. A. G",
        "L8 O4 P. E.  E E-.E-.E-",
        "L8 O4 C. C.  C C. C. C",
        "L8 O3 C. E-. E F. F#. G",
        "L8 O2 C. E-. E F. F#. G",
    ],
    // Measure 16
    [
        "L16 O5 P P  P8 P P P8 P P  P P  P8 C8",
        "L16 O4 P P  P8 P P P8 P P  P P  P8 G8",
        "L16 O5 C<B- P8 F G P8>F E- C E- P8<E-8",
        "L16 O4 C<B- P8 F G P8>F E- C E- P8 C8",
        "L16 O3 C<B- P8 F G P8>F E- C E- P8 C8",
        "L16 O2 C<B- P8 F G P8>F E- C E- P8 C8",
    ],
    // Measure 17
    [
        "L16 O4 C8 C > C R < C > C8 < C8 C > C P < C > C8",
        "L1 O3  C",
    ],
    // Measure 18
    [
        "L16 O4 C8 C > C R < C > C8 < C8 C > C P < C > C C",
        "L1 O3  C",
    ],
    // Measure 19
    [
        "L16 O4 C8 C > C R < C > C8 < C8 C > C P < C > C8",
        "L1 O2  C",
    ],
    // Measure 20
    [
        "L16 O4 C8 C > C R < C > C8 < C8 C > C P < C > C C",
        "L1 O2  C",
    ],
    // Measure 21
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D8",
        "L1 O2  C",
    ],
    // Measure 22
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D D",
        "L1 O2  C",
    ],
    // Measure 23
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D8",
        "L1 O2  C",
    ],
    // Measure 24
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D D",
        "L1 O2  C",
    ],
    // Measure 25
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D8",
        "L1 O2  C",
    ],
    // Measure 26
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D D",
        "L1 O2  C",
    ],
    // Measure 27
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D8",
        "L1 O2  C",
    ],
    // Measure 28
    [
        "L16 O4 D8 D > D R < D > D8 < D8 D > D P < D > D D",
        "L1 O2  C",
    ],
    // Measure 29
    [
        "L16 O4 D8 D8 < G > D8 P D8 D8 < G > D8 P",
        "L4 O2  C       C        C       C",
    ],
    // Measure 30
    [
        "L4 O4  D",
        "L16 O2 C4 C4 A A P A B- B- < A",
    ],
    // Measure 31
    [
        "L8 O3 D. F. F# G. A-. A",
        "L8 O2 D. F. F# G. A-. A",
    ],
    // Measure 32
    [
        "L16 O5 D C P8 < G A P8 > G F D F P8 F",
        "L16 O4 D C P8 < G A P8 > G F D F P8 D",
        "L16 O3 D C P8 < G A P8 > G F D F P8 D",
        "L16 O2 D C P8 < G A P8 > G F D F P8 D",
    ],
]

let isPlaying: boolean = false
let nextMeasureTime: number = 0
let currentMeasure: number = 0
let currentTempo: number = 0
let beatsPerMeasure: number = 0
let measureMs: number = 0
let firstMeasure: number = 0
let lastMeasure: number = 0
let instrument: mml.MMLInstrument = mml.Dog

game.onUpdate(() => {
    if (isPlaying && game.runtime() >= nextMeasureTime) {
        // Time to play the next measure.
        if (currentMeasure == -1) {
            currentMeasure = firstMeasure
        }
        if (currentMeasure > lastMeasure || currentMeasure >= COUNTDOWN_MML.length) {
            isPlaying = false
            info.setScore(0)
            return
        }
        info.setScore(currentMeasure)
        let tracks: mml.MMLTrack[] = []
        for (let t of COUNTDOWN_MML[currentMeasure]) {
            let track: mml.MMLTrack = new mml.MMLTrack(t, instrument)
            tracks.push(track)
        }
        // Allow for an empty measure.
        if (tracks.length > 0) {
            music.play(new mml.MMLPlayable(tracks), music.PlaybackMode.InBackground)
        }
        currentMeasure++
        nextMeasureTime = game.runtime() + measureMs
    }
})

function playMainTheme() {
    nextMeasureTime = 0
    currentMeasure = -1
    currentTempo = 120
    beatsPerMeasure = 4
    measureMs = 60000 * beatsPerMeasure / currentTempo
    firstMeasure = 1
    lastMeasure = 16
    isPlaying = true
}

function playTimer() {
    nextMeasureTime = 0
    currentMeasure = -1
    currentTempo = 120
    beatsPerMeasure = 4
    measureMs = 60000 * beatsPerMeasure / currentTempo
    firstMeasure = 17
    lastMeasure = 32
    isPlaying = true
    info.startCountdown(30)
}

info.onCountdownEnd(function () {

})

interface Point {
    x: number
    y: number
}   // interface Point

// https://lodev.org/cgtutor/floodfill.html
function floodScanline(img: Image, x: number, y: number, c: number) {
    let bgColor: number = img.getPixel(x, y)
    if (bgColor === c) {
        return
    }   // if (img.getPixel(x, y) === c)

    let x1: number
    let spanAbove: boolean
    let spanBelow: boolean
    let stack: Point[] = [{ x: x, y: y }]
    while (stack.length > 0) {
        let p: Point = stack.pop()
        x1 = p.x
        while (x1 >= 0 && img.getPixel(x1, p.y) === bgColor) {
            x1--
        }   // while (x1 >= 0 ...)
        x1++
        spanAbove = false
        spanBelow = false
        while (x1 < img.width && img.getPixel(x1, p.y) === bgColor) {
            img.setPixel(x1, p.y, c)
            if (!spanAbove && p.y > 0 && img.getPixel(x1, p.y - 1) === bgColor) {
                stack.push({ x: x1, y: p.y - 1 })
                spanAbove = true
            } else if (spanAbove && p.y > 0 && img.getPixel(x1, p.y - 1) !== bgColor) {
                spanAbove = false
            }   // if (! spanAbove ...)

            if (!spanBelow && p.y < img.height - 1 && img.getPixel(x1, p.y + 1) === bgColor) {
                stack.push({ x: x1, y: p.y + 1 })
                spanBelow = true
            } else if (spanBelow && p.y < img.height - 1 && img.getPixel(x1, p.y + 1) !== bgColor) {
                spanBelow = false
            }   // if (! spanBelow ...)
            x1++
        }   // while (x1 < img.width && ...)
        // scene.setBackgroundImage(img)
        // pause(50)
    }   // while (stack)
}   // floodScanline()

function drawClock(i: Image, percent: number) {
    let c: number = i.width / 2
    i.fill(0)
    i.fillCircle(c, c, c, 8)
    i.fillCircle(c, c, c - 2, 1)
    i.drawLine(c, c, c, 0, 8)
    /**
     * 100   percent
     * --- = -------
     * 2pi    angle
     * 
     * Need to back out a quarter-turn to the angle.
     * 
     *         pi * percent   pi
     * angle = ------------ - --
     *              50         2
     * 
     * x = cos(angle) * radius + radius
     * y = sin(angle) * radius + radius
     */
    if (percent > 0) {
        let angle: number = Math.PI * (percent - 25) / 50
        let x: number = 60 * (Math.cos(angle) + 1)
        let y: number = 60 * (Math.sin(angle) + 1)
        i.drawLine(c, c, x, y, 8)
        if (percent > 0.5) {
            floodScanline(i, c + 2, 4, 8)
        }
    }
}

let clockRunning: boolean = false
let clockImage: Image = image.create(120, 120)
let startTime: number = 0

function startClock(): void {
    let s: Sprite = sprites.create(clockImage, 0)
    drawClock(clockImage, 100)
    clockRunning = true
    startTime = game.runtime()
}

let timerLength: number = 30
game.onUpdate(() => {
    if (clockRunning) {
        let elapsed: number = (game.runtime() - startTime) / 1000
        if (elapsed < timerLength) {
            let p: number = elapsed / timerLength * 100
            info.setScore(Math.floor(elapsed))
            drawClock(clockImage, p)
        } else {
            // music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
            clockRunning = false
        }
    }
})

scene.setBackgroundColor(9)
// playMainTheme()
playTimer()
startClock()

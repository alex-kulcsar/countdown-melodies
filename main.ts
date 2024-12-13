/**
 * https://musescore.com/user/35461455/scores/10951453
 */
function playMainTheme() {
    let measureCount: number = 1
    for (let measure of mainThemeMeasures) {
        info.setScore(measureCount)
        if (measure.length == 8) {
            music.play(mml.playable(
                mml.track(mml.Dog, measure[0]),
                mml.track(mml.Dog, measure[1]),
                mml.track(mml.Dog, measure[2]),
                mml.track(mml.Dog, measure[3]),
                mml.track(mml.Dog, measure[4]),
                mml.track(mml.Dog, measure[5]),
                mml.track(mml.Dog, measure[6]),
                mml.track(mml.Dog, measure[7]),
            ), music.PlaybackMode.UntilDone)
        } else if (measure.length == 6) {
            music.play(mml.playable(
                mml.track(mml.Dog, measure[0]),
                mml.track(mml.Dog, measure[1]),
                mml.track(mml.Dog, measure[2]),
                mml.track(mml.Dog, measure[3]),
                mml.track(mml.Dog, measure[4]),
                mml.track(mml.Dog, measure[5]),
            ), music.PlaybackMode.UntilDone)
        } else if (measure.length == 4) {
            music.play(mml.playable(
                mml.track(mml.Dog, measure[0]),
                mml.track(mml.Dog, measure[1]),
                mml.track(mml.Dog, measure[2]),
                mml.track(mml.Dog, measure[3]),
            ), music.PlaybackMode.UntilDone)
        } else if (measure.length == 3) {
            music.play(mml.playable(
                mml.track(mml.Dog, measure[0]),
                mml.track(mml.Dog, measure[1]),
                mml.track(mml.Dog, measure[2])
            ), music.PlaybackMode.UntilDone)
        }
        measureCount++
    }
}
function playTimer() {
    info.startCountdown(30)
    let measureCount: number = 17
    for (let measure of timerMeasures) {
        info.setScore(measureCount)
        if (measure.length == 2) {
            music.play(mml.playable(
                mml.track(mml.Dog, measure[0]),
                mml.track(mml.Dog, measure[1]),
            ), music.PlaybackMode.UntilDone)
        } else {
            music.play(mml.playable(
                mml.track(mml.Dog, measure[0]),
                mml.track(mml.Dog, measure[1]),
                mml.track(mml.Dog, measure[2]),
                mml.track(mml.Dog, measure[3]),
            ), music.PlaybackMode.UntilDone)
        }
        measureCount++
    }
}
info.onCountdownEnd(function () {

})
let timerMeasures: string[][] = []
timerMeasures = [
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

let mainThemeMeasures: string[][] = []
mainThemeMeasures = [
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
    ]
]

// playTimer()
for (let i: number = 0; i < 2; i++) {
    playMainTheme()
    music.play(mml.playable(
        mml.track(mml.Dog, "P1")
    ), music.PlaybackMode.UntilDone)
}

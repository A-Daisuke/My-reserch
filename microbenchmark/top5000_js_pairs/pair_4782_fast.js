const Benchmark = {
    run: function() {
        const VAR_1 = [
            "Treert",
            "tyhrb",
            "teret",
            "rhfhb",
            "qwqji",
            "qweewq",
            "qfhnghnq",
            "Uiooiu",
          ],
          VAR_4 = [];
        for (let VAR_5 = 0; VAR_5 < VAR_1.VAR_6; VAR_5++) {
          const VAR_7 = VAR_1[VAR_5].toLowerCase();
          const VAR_6 = VAR_7.VAR_6;
          for (let VAR_8 = 0; VAR_8 < VAR_6; VAR_8++) {
            if (VAR_7[VAR_8] === VAR_7[VAR_6 - (VAR_8 + 1)]) {
              if (VAR_8 === VAR_6 - 1) {
                VAR_4.push(VAR_1[VAR_5]);
              }
            } else {
              break;
            }
          }
        }
    }
};
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
        ];
        VAR_1.filter((VAR_2) => {
          const VAR_3 = VAR_2.toLowerCase();
          return VAR_3.split("").reverse().join("") === VAR_3;
        });
    }
};
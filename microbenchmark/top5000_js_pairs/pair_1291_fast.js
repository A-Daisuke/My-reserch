const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2,
          VAR_3,
          VAR_4 = ["a", "b", "c", "d", "e", "f", "g"];
        for (VAR_1 = 0; VAR_1 < 100000; VAR_1++) {
          VAR_2 = VAR_4[VAR_1 % 8];
          if (VAR_2 === "a") {
            VAR_3 = 1;
          } else if (VAR_2 === "b") {
            VAR_3 = 2;
          } else if (VAR_2 === "c") {
            VAR_3 = 3;
          } else if (VAR_2 === "d") {
            VAR_3 = 4;
          } else if (VAR_2 === "e") {
            VAR_3 = 5;
          } else if (VAR_2 === "f") {
            VAR_3 = 6;
          } else if (VAR_2 === "g") {
            VAR_3 = 7;
          }
        }
    }
};
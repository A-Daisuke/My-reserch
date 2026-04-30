const Benchmark = {
    run: function() {
        var VAR_1 = "XxXxXxX";
        var VAR_2 = 1000;
        var VAR_3 = VAR_1,
          VAR_4 = [VAR_1],
          VAR_5 = 1,
          VAR_6,
          VAR_7;
        while (VAR_5 < VAR_2) {
          VAR_6 = VAR_2 - VAR_5;
          VAR_1 = VAR_3;
          for (VAR_7 = 2; VAR_7 < VAR_6; VAR_7 *= 2) {
            VAR_1 += VAR_1;
          }
          VAR_4.push(VAR_1);
          VAR_5 += VAR_7 / 2;
        }
        VAR_4.join("");
    }
};
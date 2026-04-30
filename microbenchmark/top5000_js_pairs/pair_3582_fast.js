const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_2 = 10;
        var VAR_3 = [];
        var VAR_4;
        for (VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
          VAR_3.push(Math.random());
        }
        var VAR_5 = VAR_2 * VAR_1;
        var VAR_9 = "";
        var VAR_7;
        for (VAR_7 = 0; VAR_7 < VAR_5; VAR_7++) {
          VAR_9 += "just a small string...";
          if (VAR_7 % VAR_1 === 0) {
            VAR_9 += VAR_3[VAR_7 / VAR_1];
          }
        }
        var VAR_10 = VAR_9;
    }
};
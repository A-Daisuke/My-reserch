const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 1000000,
          VAR_3 = /^0(?:px)?$/;
        for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
          var VAR_5 = VAR_4 % 10;
          VAR_6 = Math.floor(VAR_4 / 10) % 2 ? "px" : "";
          VAR_7 = VAR_5 + VAR_6;
          if (VAR_3.test(VAR_7)) {
            VAR_1++;
          }
        }
    }
};
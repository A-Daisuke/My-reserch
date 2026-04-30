const Benchmark = {
    run: function() {
        var VAR_1 = 10000000;
        const VAR_4 = "+";
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < VAR_1; ++VAR_3) {
          switch (VAR_4) {
            case "+":
              VAR_2 = VAR_2 + VAR_3;
              break;
            case "*":
              VAR_2 = VAR_2 * VAR_3;
              break;
          }
        }
    }
};
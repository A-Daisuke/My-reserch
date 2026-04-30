const Benchmark = {
    run: function() {
        for (var VAR_1 = 1; VAR_1 <= 100; VAR_1++) {
          var VAR_3 = VAR_1 % 3 === 0;
          var VAR_4 = VAR_1 % 5 === 0;
          var VAR_5 = "";
          if (VAR_3) {
            VAR_5 += "Fizz";
          }
          if (VAR_4) {
            VAR_5 += "Buzz";
          }
          if (!VAR_3 && !VAR_4) {
            VAR_5 += VAR_1.toString();
          }
        }
    }
};
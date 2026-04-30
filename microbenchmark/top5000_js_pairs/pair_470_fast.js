const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 === 2
            ? !(VAR_2 % 4 || (!(VAR_2 % 100) && VAR_2 % 400))
              ? 29
              : 28
            : 30 + ((VAR_1 + (VAR_1 >> 3)) & 1);
        }
        for (var VAR_4 = 1; VAR_4 <= 2000; VAR_4++) {
          for (var VAR_5 = 1; VAR_5 <= 12; VAR_5++) {
            var VAR_6 = FUNCTION_1(VAR_5, VAR_4);
          }
        }
    }
};
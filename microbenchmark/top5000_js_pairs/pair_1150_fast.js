const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 === 2
            ? !(VAR_2 % 4 || (!(VAR_2 % 100) && VAR_2 % 400))
              ? 29
              : 28
            : 30 + ((VAR_1 + (VAR_1 >> 3)) & 1);
        }
        for (var VAR_3 = 1; VAR_3 <= 2000; VAR_3++) {
          for (var VAR_4 = 1; VAR_4 <= 12; VAR_4++) {
            var VAR_5 = FUNCTION_1(VAR_4, VAR_3);
          }
        }
    }
};
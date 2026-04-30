const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 === 2
            ? VAR_2 & 3 || (!(VAR_2 % 25) && VAR_2 & 15)
              ? 28
              : 29
            : 30 + ((5546 >> VAR_1) & 1);
        }
        for (var VAR_3 = 1; VAR_3 <= 2000; VAR_3++) {
          for (var VAR_4 = 1; VAR_4 <= 12; VAR_4++) {
            var VAR_5 = FUNCTION_1(VAR_4, VAR_3);
          }
        }
    }
};
const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 < 2) return VAR_1;
          else {
            var VAR_6 = 1,
              VAR_7 = 1,
              VAR_8;
            for (var VAR_9 = 3; VAR_9 <= VAR_1; VAR_9++) {
              VAR_8 = VAR_6 + VAR_7;
              VAR_6 = VAR_7;
              VAR_7 = VAR_8;
            }
            return VAR_8;
          }
        }
        function FUNCTION_2(VAR_2) {
          for (
            VAR_3 = 2, VAR_4 = [1, 1];
            VAR_9 < VAR_2;
            VAR_9++, VAR_4[VAR_4.VAR_5] = VAR_4[VAR_4.VAR_5 - 1] + VAR_4[VAR_4.VAR_5 - 2]
          ) {}
          return VAR_4[VAR_4.VAR_5 - 1];
        }
        FUNCTION_1(20);
    }
};
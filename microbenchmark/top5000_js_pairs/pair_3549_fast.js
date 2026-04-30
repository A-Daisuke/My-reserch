const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 <= 0) return [];
          if (VAR_2 == 1) return [VAR_1];
          var VAR_5 = FUNCTION_1(VAR_1, VAR_2 >> 1);
          VAR_5 = VAR_5.concat(VAR_5);
          if (VAR_2 & 1) VAR_5.push(VAR_1);
          return VAR_5;
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
            VAR_5.push(VAR_1);
          }
          return VAR_5;
        }
        FUNCTION_1(1, 10000);
    }
};
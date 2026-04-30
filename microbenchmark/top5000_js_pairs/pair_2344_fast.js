const Benchmark = {
    run: function() {
        var VAR_2 = [300, 625, 950];
        function FUNCTION_1(VAR_1) {
          for (var VAR_6 = 0; VAR_6 < VAR_2.length; VAR_6++) {
            var VAR_7 = VAR_2[VAR_6];
            var VAR_8 = VAR_2[VAR_6 - 1] || VAR_7 / 2;
            var VAR_9 = VAR_2[VAR_6 + 1] || VAR_7 * 2;
            var VAR_10 = (VAR_8 + VAR_7) / 2;
            var VAR_11 = (VAR_9 + VAR_7) / 2;
            if (VAR_10 <= VAR_1 && VAR_1 <= VAR_11) {
              return VAR_7;
            }
          }
          return VAR_1;
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          FUNCTION_1(VAR_5);
        }
    }
};
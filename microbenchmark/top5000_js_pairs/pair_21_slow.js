const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 8750; VAR_2++) {
          VAR_1.push(
            (Math.sin(Math.random()) * Math.cos(Math.random())) / Math.random(),
          );
        }
        function FUNCTION_1(VAR_3) {
          var VAR_4, VAR_5;
          for (var VAR_6 = 1; VAR_6 < VAR_1.length; VAR_6 += 1) {
            VAR_4 = VAR_1[VAR_6];
            VAR_5 = VAR_6 - 1;
            while (VAR_5 >= 0 && VAR_1[VAR_5] > VAR_4) {
              VAR_1[VAR_5 + 1] = VAR_1[VAR_5];
              VAR_5 -= 1;
            }
            VAR_1[VAR_5 + 1] = VAR_4;
          }
          return VAR_1;
        }
        FUNCTION_1(VAR_1);
    }
};
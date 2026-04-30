const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3;
        function FUNCTION_1(VAR_4, VAR_5) {
          return new Date(
            VAR_4.getTime() + Math.random() * (VAR_5.getTime() - VAR_4.getTime()),
          );
        }
        for (VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.push(FUNCTION_1(new Date(2012, 0, 1), new Date()));
          VAR_2.push(VAR_1[VAR_3].getTime());
        }
        for (VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          if (VAR_1[VAR_3] < VAR_1[100 - VAR_3]) {
          }
        }
    }
};
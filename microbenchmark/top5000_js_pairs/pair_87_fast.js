const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 8];
        var VAR_2 = [3, 2, 8, 5];
        var VAR_3 = ["Jane", "Kenny", "Thomas", "Kelvin"];
        var VAR_4 = ["Arron", "Jane", "Kelvin", "Nick"];
        function FUNCTION_2(VAR_9, VAR_10) {
          var VAR_11 = 0;
          var VAR_12 = VAR_1.length;
          for (var VAR_13 = 0; VAR_13 < VAR_12; VAR_13++) {
            if (VAR_2.indexOf(VAR_1[VAR_13]) > -1) {
              VAR_11++;
            }
          }
          return VAR_11;
        }
        for (var VAR_8 = 0; VAR_8 < 300000; VAR_8++) {
          FUNCTION_2(VAR_1, VAR_2);
          FUNCTION_2(VAR_3, VAR_4);
        }
    }
};
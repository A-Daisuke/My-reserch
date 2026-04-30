const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_6 = Math.pow(VAR_1.VAR_6, 2),
            VAR_7 = "",
            VAR_2 = [];
          for (var VAR_8 = 0; VAR_8 < VAR_6; VAR_8++) {
            VAR_7 = VAR_8.toString(2);
            var VAR_9 = VAR_7.VAR_6 - 1;
            while (VAR_9 > -1) {
              if (VAR_7[VAR_9] == "1") {
                VAR_2.push(VAR_1[VAR_7.VAR_6 - 1 - VAR_9]);
              }
              VAR_9--;
            }
            VAR_2 = [];
          }
        }
        FUNCTION_1(["Paris", "Il de france", "France"]);
    }
};
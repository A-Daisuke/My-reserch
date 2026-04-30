const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_8 = VAR_2;
          for (var VAR_9 = VAR_3.length - 1; VAR_9 !== -1; VAR_9--) {
            VAR_8 = VAR_1(VAR_3[VAR_9], VAR_8);
          }
          return VAR_8;
        }
        var VAR_4 = new Array();
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          VAR_4.push(VAR_5);
        }
        function FUNCTION_2(VAR_6, VAR_7) {
          return VAR_6 + VAR_7;
        }
        FUNCTION_1(FUNCTION_2, 0, VAR_4);
    }
};
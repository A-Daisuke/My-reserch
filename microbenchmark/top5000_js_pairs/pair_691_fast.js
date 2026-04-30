const Benchmark = {
    run: function() {
        var VAR_4 = 7;
        var VAR_2 = 0;
        var VAR_5 = 1;
        var VAR_6 = 2;
        var VAR_7 = 4;
        function FUNCTION_1(VAR_8, VAR_9) {
          return VAR_8 & VAR_9;
        }
        for (var VAR_3 = 0; VAR_3 < 999999; VAR_3++) {
          if (FUNCTION_1(VAR_4, VAR_5) && FUNCTION_1(VAR_4, VAR_6) && FUNCTION_1(VAR_4, VAR_7)) ++VAR_2;
        }
        console.log(VAR_2);
    }
};
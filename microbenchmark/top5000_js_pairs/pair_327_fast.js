const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 15,
          VAR_3 = Math.pow(2, VAR_2);
        for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
          VAR_1.push("v" + VAR_4);
        }
        function FUNCTION_1(VAR_5) {
          var VAR_6 = [],
            VAR_7 = (VAR_5 >>> 0).toString(2);
          for (var VAR_10 = 0; VAR_4 < VAR_7.length; VAR_4++) {
            if (VAR_7[VAR_4]) VAR_6.push(VAR_4);
          }
          return VAR_6;
        }
        for (var VAR_9 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_1(VAR_4);
        }
    }
};
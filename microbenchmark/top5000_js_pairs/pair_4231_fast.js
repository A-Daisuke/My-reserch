const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 10000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        function FUNCTION_1(VAR_4, VAR_5) {
          var VAR_6 = false;
          for (var VAR_7 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            if (VAR_1[VAR_3] === VAR_5) {
              VAR_6 = true;
              break;
            }
          }
          return VAR_6;
        }
        FUNCTION_1(VAR_1, VAR_2 / 2);
    }
};
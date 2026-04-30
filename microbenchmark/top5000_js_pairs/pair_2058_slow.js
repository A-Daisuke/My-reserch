const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_2, VAR_3) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: VAR_3,
          });
        }
        function FUNCTION_2(VAR_4) {
          var VAR_5 = [].slice.call(arguments);
          for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) {
            FUNCTION_1.apply(null, [VAR_6].concat(VAR_5));
          }
        }
        FUNCTION_2("cornsilk");
    }
};
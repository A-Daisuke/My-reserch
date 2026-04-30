const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var VAR_1,
            VAR_2 = 0;
          for (VAR_1 = 0; VAR_1 < 10; VAR_1++) VAR_2 += VAR_1;
          return VAR_2;
        };
        var VAR_3 = {
          KEY_1: FUNCTION_1,
          KEY_2: function () {},
        };
        var VAR_4 = { KEY_3: FUNCTION_1 };
        try {
          VAR_4.KEY_1();
        } catch (VAR_5) {}
        try {
          VAR_4.KEY_2();
        } catch (VAR_6) {}
    }
};
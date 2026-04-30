const Benchmark = {
    run: function() {
        FUNCTION_1 = function () {
          var VAR_1 = 1;
          return {
            KEY_1: "foo",
            KEY_2: "bar",
          };
        };
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 < 100; VAR_5++) VAR_4.push(FUNCTION_1());
    }
};
const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {
            return 1 + 1;
          },
        };
        var VAR_2 = {};
        var VAR_3 = 1000;
        function FUNCTION_2() {
          VAR_1.KEY_1.apply(VAR_1, [VAR_2]);
        }
        function FUNCTION_1() {
          VAR_1.KEY_1(VAR_2);
        }
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) FUNCTION_1();
    }
};
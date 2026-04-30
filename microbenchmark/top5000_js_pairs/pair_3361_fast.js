const Benchmark = {
    run: function() {
        var VAR_1 = {
          get KEY_1() {
            return VAR_1.VAR_2;
          },
          get KEY_2() {
            VAR_1.KEY_2 = VAR_1.VAR_2;
            return VAR_1.VAR_2;
          },
        };
        VAR_1.VAR_2 = "15";
        VAR_1.FUNCTION_1 = function () {
          return VAR_1.VAR_2;
        };
        VAR_1.KEY_2;
        for (var VAR_3 = 0; VAR_3 < 3000; VAR_3++) {
          VAR_1.VAR_2;
        }
    }
};
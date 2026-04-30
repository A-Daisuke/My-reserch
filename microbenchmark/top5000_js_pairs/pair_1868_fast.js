const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_1.VAR_2 = 1;
        VAR_1.FUNCTION_1 = function () {
          this.VAR_2 += 6;
        };
        VAR_1.FUNCTION_2 = function () {
          this.FUNCTION_1();
          if (this.VAR_3) {
            this.VAR_3.FUNCTION_2();
          }
        };
        var VAR_4 = Object.create(VAR_1);
        var VAR_5 = VAR_4;
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_5.VAR_3 = Object.create(VAR_1);
          VAR_5 = VAR_5.VAR_3;
        }
        VAR_5 = VAR_4;
        while (VAR_5) {
          VAR_5.FUNCTION_1();
          VAR_5 = VAR_5.VAR_3;
        }
    }
};
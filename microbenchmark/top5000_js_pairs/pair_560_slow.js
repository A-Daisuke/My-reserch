const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        };
        for (var VAR_5 = 0; VAR_5 < 100000; VAR_5++) {
          new FUNCTION_1(0, 0);
        }
    }
};
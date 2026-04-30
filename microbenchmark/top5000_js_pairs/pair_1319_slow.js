const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
        };
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_5.push(new FUNCTION_1("" + Math.random(), Math.random()));
        }
    }
};
const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = Math.random();
          this.VAR_2 = Math.random();
          this.VAR_3 = Math.random();
        };
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          var VAR_5 = new FUNCTION_1();
        }
    }
};
const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var FUNCTION_1 = function () {
          this.VAR_2 = Math.random();
          this.VAR_3 = Math.random();
          this.VAR_4 = Math.random();
        };
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          var VAR_6 = new FUNCTION_1();
        }
    }
};
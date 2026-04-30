const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 0;
          this.VAR_2 = 0;
          this.VAR_3 = 0;
        };
        for (var VAR_4 = 0; VAR_4 < 1024; VAR_4++) {
          var VAR_5 = new FUNCTION_1();
        }
    }
};
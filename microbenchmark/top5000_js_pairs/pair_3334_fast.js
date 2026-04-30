const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_6 = 4;
          this.VAR_7 = true;
          this.VAR_1 = [];
          this.VAR_8 = "blah";
        };
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          FUNCTION_1.call();
        }
    }
};
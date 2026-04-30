const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        var FUNCTION_1 = function (VAR_2) {
          this.VAR_3 = VAR_2;
        };
        var VAR_7 = VAR_1.map(function (VAR_8) {
          return new FUNCTION_1(VAR_2);
        });
    }
};
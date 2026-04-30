const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_3) {
          this.VAR_5 = VAR_3.VAR_5;
          this.VAR_6 = VAR_3.VAR_6;
        };
        var FUNCTION_3 = function () {
          this.VAR_5 = 5;
          this.VAR_6 = 7;
        };
        var VAR_7 = {};
        VAR_7.VAR_5 = 5;
        VAR_7.VAR_6 = 7;
    }
};
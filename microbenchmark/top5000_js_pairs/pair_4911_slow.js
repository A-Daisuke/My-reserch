const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 0;
          this.VAR_2 = 0;
        };
        var FUNCTION_2 = function (VAR_3) {
          this.VAR_1 = VAR_3.VAR_1;
          this.VAR_2 = VAR_3.VAR_2;
        };
        var FUNCTION_3 = function () {
          this.VAR_1 = 5;
          this.VAR_2 = 7;
        };
        var VAR_4 = new FUNCTION_1();
        VAR_4.VAR_5 = 5;
        VAR_4.VAR_6 = 7;
    }
};
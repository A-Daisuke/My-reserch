const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 1;
        var VAR_3 = 2;
        var VAR_4 = 3;
        var FUNCTION_1 = function () {
          this.VAR_5 = 0;
          this.VAR_6 = 1;
          this.VAR_7 = 2;
          this.VAR_8 = 3;
        };
        var VAR_9 = new FUNCTION_1();
        var VAR_10 = VAR_9.VAR_5 + VAR_9.VAR_6;
        var VAR_11 = VAR_9.VAR_7 + VAR_9.VAR_8;
    }
};
const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        };
        var VAR_7 = new FUNCTION_1(1, null, 6);
        var VAR_8 = new FUNCTION_1();
        var VAR_9 = new FUNCTION_1(null, null, 6);
        var VAR_10 = new FUNCTION_1("test");
        var VAR_11 = new FUNCTION_1("1, 2, 3, 4");
    }
};
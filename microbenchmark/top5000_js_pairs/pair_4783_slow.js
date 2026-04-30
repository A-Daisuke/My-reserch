const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
          return this;
        };
        var VAR_7 = new FUNCTION_1();
        VAR_7.VAR_4 = "someVal";
        VAR_7.VAR_5 = "someVal2";
        VAR_7.VAR_6 = "someVal3";
    }
};
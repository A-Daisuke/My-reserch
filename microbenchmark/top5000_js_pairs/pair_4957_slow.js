const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 42;
          this.VAR_2 = "abc";
          this.VAR_3 = true;
          this.VAR_4 = [1, 2, 3];
        };
        var VAR_5 = new FUNCTION_1();
    }
};
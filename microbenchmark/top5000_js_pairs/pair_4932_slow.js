const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
          this.FUNCTION_2 = function () {
            return this.VAR_3 + this.VAR_4;
          };
        };
        var VAR_5 = new FUNCTION_1("a", "b");
    }
};
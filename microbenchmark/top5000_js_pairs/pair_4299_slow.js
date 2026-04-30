const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
          this.VAR_7 = [];
          this.VAR_8 = {};
          this.FUNCTION_2 = function () {};
          return this;
        };
        var VAR_9 = new FUNCTION_1(0, "foo", { KEY_1: "blah" });
        VAR_9.VAR_4 += 1;
    }
};
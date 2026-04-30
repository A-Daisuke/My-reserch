const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyz";
        String.prototype.FUNCTION_1 = function (VAR_2) {
          var VAR_3 = "";
          while (--VAR_2) VAR_3 += this;
          return this;
        };
        VAR_1.FUNCTION_1(100);
    }
};
const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          var VAR_2 = [];
          VAR_2.VAR_4 = VAR_1;
          return VAR_2.join(this);
        };
        "jacekSracek".FUNCTION_1(10000);
    }
};
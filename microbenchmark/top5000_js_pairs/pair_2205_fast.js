const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_5) {
          return Array(++VAR_5).join(this);
        };
        var VAR_4 = "bar ".FUNCTION_1(1500);
        console.log(VAR_4);
    }
};
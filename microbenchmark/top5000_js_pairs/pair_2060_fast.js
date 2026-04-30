const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return new Array(VAR_1 + 1).join(this);
        };
        var VAR_2 = "longstring".FUNCTION_1(10000);
        function FUNCTION_2(VAR_3, VAR_4) {
          var VAR_5 = [];
          while (VAR_3.length > VAR_4) {
            VAR_5.push(VAR_3.slice(0, VAR_4));
            VAR_3 = VAR_3.slice(VAR_4);
          }
          VAR_5.push(VAR_3);
          return VAR_5;
        }
        FUNCTION_2(VAR_2, 1000);
    }
};
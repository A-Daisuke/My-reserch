const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [].slice.call(arguments);
          var VAR_2 = VAR_1.shift();
          function FUNCTION_2(VAR_3, VAR_4) {
            return VAR_3.replace("%s", VAR_4);
          }
          return VAR_1.reduce(FUNCTION_2, VAR_2);
        }
        var VAR_5 = "%s" + new Array(100).join(", %s");
        var VAR_6 = (function () {
          var VAR_7 = [];
          while (VAR_7.length < 100) VAR_7.push(VAR_7.length);
          return VAR_7;
        })();
        FUNCTION_1.apply(null, [VAR_5].concat(VAR_6));
    }
};
const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [].slice.call(arguments);
          var VAR_2 = VAR_1.shift();
          var VAR_8 = 0;
          return VAR_2.replace(/%s/g, function () {
            return VAR_1[VAR_8++];
          });
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
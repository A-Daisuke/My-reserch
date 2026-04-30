const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        function FUNCTION_1(VAR_2) {
          var VAR_3 = VAR_1.length - 1;
          for (var VAR_4 = VAR_3; VAR_4 >= 0; VAR_4--) {
            Array.prototype.splice.apply(VAR_1, [VAR_4, 0].concat(VAR_1.splice(0, 1)));
          }
          return VAR_1;
        }
        FUNCTION_1(VAR_1);
    }
};
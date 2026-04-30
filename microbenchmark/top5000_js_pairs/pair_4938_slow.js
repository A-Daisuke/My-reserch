const Benchmark = {
    run: function() {
        FUNCTION_1(1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5);
        function FUNCTION_1() {
          var VAR_1 =
            arguments instanceof Array
              ? arguments
              : Array.prototype.slice.call(arguments);
          if (!VAR_1.length) return 0;
          return VAR_1.pop() + FUNCTION_1.apply(null, VAR_1);
        }
    }
};
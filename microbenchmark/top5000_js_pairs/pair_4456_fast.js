const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_3) {
          var FUNCTION_2 = function (VAR_6, VAR_7, VAR_8) {
            if (!VAR_6 && !VAR_7) return;
            if (!VAR_7) {
              VAR_8.push(VAR_6);
            } else {
              FUNCTION_2(VAR_6 + VAR_7[0], VAR_7.slice(1), VAR_8);
              FUNCTION_2(VAR_6, VAR_7.slice(1), VAR_8);
            }
            return VAR_8;
          };
          return FUNCTION_2("", VAR_3, []);
        }
        FUNCTION_1("abcd");
    }
};
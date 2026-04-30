const Benchmark = {
    run: function() {
        var VAR_1 =
          "1234567890qweryuiopasdfghjlzxcvbnm" +
          Math.random().toString(32) +
          Math.random().toString(32);
        function FUNCTION_2(VAR_3) {
          return VAR_3.split("");
        }
        function FUNCTION_1(VAR_2) {
          return Array.prototype.slice.call(VAR_2);
        }
        FUNCTION_2(VAR_1);
    }
};
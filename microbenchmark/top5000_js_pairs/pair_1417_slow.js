const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (typeof VAR_1 !== "string") {
            throw new TypeError("Expected `input` to be a string");
          }
          if (VAR_2 < 0 || !isFinite(VAR_2)) {
            throw new TypeError("Expected `count` to be a positive finite number");
          }
          var VAR_3 = [];
          do {
            if (VAR_2 & 1) {
              VAR_3.push(VAR_1);
            }
            VAR_1 += VAR_1;
          } while ((VAR_2 >>= 1));
          return VAR_3.join("");
        }
        FUNCTION_1("unicorn ", 100000);
    }
};
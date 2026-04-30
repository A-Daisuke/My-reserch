const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        try {
          (function fac(VAR_3) {
            if (VAR_3 <= 0) throw new FUNCTION_1("Go napiton!");
            return VAR_3 * fac(VAR_3 - 1);
          })(10);
        } catch (VAR_4) {}
    }
};
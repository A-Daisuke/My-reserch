const Benchmark = {
    run: function() {
        try {
          (function fac(VAR_3) {
            if (VAR_3 <= 0) throw 1;
            return VAR_3 * fac(VAR_3 - 1);
          })(10);
        } catch (VAR_4) {}
    }
};